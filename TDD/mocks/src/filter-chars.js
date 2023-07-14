const filterCharacter = (characters, name) => {
  return [...characters].reduce((count, char) => {
    if(char.name.includes(name)) count++
    return count
  },0)
}

module.exports = filterCharacter
