const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
  ;
(async () => {
  {
    const filePath = './tests/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }

  {
    const filePath = './tests/fourItems-invalid.csv'
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  }

  {
    const filePath = './tests/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
  {
    "name": "Wallace Henrique",
    "id": 123,
    "profession": "Programmer",
    "birthDay": 2002
  },
  {
    "name": "Xuxa",
    "id": 321,
    "profession": "Actress",
    "birthDay": 1940
  },
  {
    "name": "Joao Peripecias",
    "id": 231,
    "profession": "Humorist",
    "birthDay": 1990
  }
]
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }

})()
