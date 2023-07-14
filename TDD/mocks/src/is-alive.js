const checkIsAlive = (characters, name, mockFn) => {
  const character = characters.find(char => char.name.includes(name))

  return character && !!character.alive ? mockFn() : false
}


module.exports = checkIsAlive
