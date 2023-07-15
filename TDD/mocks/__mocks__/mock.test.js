const mockCharacters = require('../src/db')
const filterCharacter = require('../src/filter-chars')
const isAlive = require('../src/is-alive')
const Logger = require('../src/logger')
const { rejects, deepStrictEqual, assert } = require('assert')
const { default:expect } = require('expect')
 ;

(async () => {

  {
    const result = filterCharacter(mockCharacters, 'skywalker')
    const expected = 2

    console.log(result, expected)

    deepStrictEqual(result, expected)
  }

  {
    describe('filterCharacter', () => {
       it('Should filter a list of chars and return the number of corresponding name on object', () => {

        const result = filterCharacter(mockCharacters, 'skywalker')
        const expected = 2

        expect(result).toEqual(expected)

    })
   })
  }

  {
    describe('isAlive', () => {
      it('Should verify if character is alive and must be executed at least one time', () => {

        const mockIsAlive = jest.fn().mockReturnValue(true)
        const result = isAlive(mockCharacters, 'skywalker', mockIsAlive)
        const expected = true

        expect(result).toEqual(expected)
        expect(mockIsAlive).toHaveBeenCalledTimes(1)

      })
    })
  }

  {
    describe('spy logger', () => {
      it('Should make a log from given objs', () => {
        const spy = jest.spyOn(Logger, 'log')
        const isLog = Logger.log()
        const expected = 1

        expect(spy).toHaveBeenCalledTimes(expected)
      })
    })
  }

})()
