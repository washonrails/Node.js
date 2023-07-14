const { readFile } = require('fs/promises')
const { error, DEFAULT_OPT } = require('./constants')
const User = require('./user')

class File {
  static async csvToJson(filePath) {
    const content = await File.getFileContent(filePath)
    const validation = File.isValid(content)

    if(!validation.valid) throw new Error(validation.error)
    
    const users = File.parseCSVToJson(content)
    return users
  }

  static async getFileContent(filePath){
    return (await readFile(filePath)).toString('utf8')
  }

  static isValid(csvString, opts = DEFAULT_OPT ) {
    const [ header, ...fileWithoutHeader ] = csvString.split('\n')
    const isHeaderValid = header === opts.fields.join(',')

    if(!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false
      }
    }

    const isContentLengthAccepted = (
      fileWithoutHeader.length > 0 &&
      fileWithoutHeader.length <= opts.maxLines
    )

    if(!isContentLengthAccepted) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false
      }
    }

    return { valid: true }
  }

  static parseCSVToJson(csvString) {
    const lines = csvString.split('\n')
    const firstLine = lines.shift()
    const header = firstLine.split(',')
    const users = lines.map(line => {
      const columns = line.split(',')
      let user = {}
      for(const index in columns) {
        user[header[index]] = columns[index]
      }
      return new User(user) 
    })
    return users
  }
}

module.exports = File
