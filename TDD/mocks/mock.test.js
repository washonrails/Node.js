const {filterCharacter} = require('./src/filter-chars')
const {checkIsAlive} = require('./src/is-alive')
const { rejects, deepStrictEqual } = require('assert')
const { default:expect } = require('expect')
 ;

(async () => {
  const mockCharacters = [
   { name: 'anakin skywalker', nickname: 'darth vader', alive: true },
   { name: 'leia organa', alive: false },
   { name: 'luke skywalker', alive: false},
   { name: 'r2-d2', alive: true },
   { name: 'c3po', alive: true},
  ];

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
    describe('checkIsAlive', () => {
      it('Should verify if character is alive and must be executed at least one time', () => {
        
        const mockIsAlive = jest.fn().mockReturnValue(true)
        const result = checkIsAlive(mockCharacters, 'skywalker', mockIsAlive)
        const expected = true

        expect(result).toEqual(expected)
        expect(mockIsAlive).toHaveBeenCalledTimes(1)

      })
    })
  }

})()
