const filterCharacter = (characters, name) => {
  return [...characters].reduce((count, char) => {
    if(char.name.includes(name)) count++
    return count
  },0)
}

const checkIsAlive = (characters, name, mockFn) => {
  const character = characters.find(char => char.name.includes(name))
  const isAlive = !!character.alive

  return isAlive ? mockFn() : false
}

module.exports = {filterCharacter, checkIsAlive}
