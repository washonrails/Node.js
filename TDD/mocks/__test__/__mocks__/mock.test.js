const mockCharacters = require('../../src/db')
const userData = require('../../src/userData')
const filterCharacter = require('../../src/filter-chars')
const isAlive = require('../../src/is-alive')
const Logger = require('../../src/logger')
const { default:expect } = require('expect')
 ;

(async () => {

  // afterEach(() => {
  //   // restore the spy created with spyOn
  //   jest.restoreAllMocks()
  // })


  {
    it('Should filter a list of chars and return the number of corresponding name on object', () => {

      const result = filterCharacter(mockCharacters, 'skywalker')
      const expected = 2

      expect(result).toEqual(expected)
    })
  }

  {
    it('Should verify if character is alive and must be executed at least one time', () => {

      const mockIsAlive = jest.fn().mockReturnValue(true)
      const result = isAlive(mockCharacters, 'skywalker', mockIsAlive)
      const expected = true

      expect(result).toEqual(expected)
      expect(mockIsAlive).toHaveBeenCalledTimes(1)
    })
  }

  {
    it('Should make a log and call the function at least one time', () => {
      const spy = jest.spyOn(Logger, 'log')
      const isLog = Logger.log()
      const expected = 1

      expect(spy).toHaveBeenCalledTimes(expected)
    })
  }

  {
    it('Should mock fetch user data function and verify calls of the same', () => {
      const fetchUserData = jest.fn()
      fetchUserData.mockReturnValue({ name: 'WALLACE', age: 20 })

      fetchUserData()
      fetchUserData()
      console.log(fetchUserData.mock.calls.length)

      fetchUserData.mockClear()
      console.log(fetchUserData.mock.calls.length)
    })
  }

  {
    it('Spy test', () => {
      jest.spyOn(userData, 'fetchUserData').mockReturnValue({ name: 'Mocked', age: 99 })

      console.log(userData.fetchUserData())


      userData.fetchUserData.mockRestore()
      console.log(userData.fetchUserData())
    })
  }

})()
