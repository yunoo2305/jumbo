const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const JumboList = artifacts.require('JumboList')

contract('JumboList', async (accounts) => {
  describe('reviewing()', async()=>{
    it('should receive store struct., user address, review score, deposit as its input parameter', async=>{})
    it('should be locking deposit')
    it('should affect former voter\'s reward')
    it('should initialization voting amount to zero')
    it('should return review id', async=>{})
  })
  describe('challenge()', async()=>{
    it('should receive review id, user address, deposit', async=>{})
    it('induce voting()')
    it('should return challenge id')
  })
  describe('voting()', async()=>{
    it('should receive challenge id, user address, voting amount(+1 or -1)', async()=>{})
    it('validation test')
    it('should return total score')
  })
})
