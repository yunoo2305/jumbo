const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const JumboGuide = artifacts.require('JumboGuide')

contract('JumboGuide', async (accounts) => {
  describe('register()', async()=>{
    it('should receive name, location, category, menu, symbol as its input parameter', async=>{})
    it('should return type of tree as its return value', async=>{})
  })
  describe('vote()', async()=>{
    it('should affect former voter\'s Jumbo growing state')
  })
  describe('explore()', async()=>{
    it('should ')
  })
  describe('review()', async()=>{
    it('should receive', async()=>{})
  })
  describe()
  describe()
  describe()
})
