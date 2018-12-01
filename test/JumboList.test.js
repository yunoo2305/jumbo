const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const JumboList = artifacts.require('JumboList')

contract('JumboList', async (accounts) => {
  describe('reviewing()', async()=>{
    it('should receive store struct., user address, review score as its input parameter', async=>{})
    it('should affect former voter\'s reward')
    it('should initialization voting amount to zero')
    it('should return review id', async=>{})
  })
  describe('listing()', async()=>{
    it('should get each store\'s score', async=>{})
    it('sorting...', async=>{})
    it('should return top100 or whatever as return value(list of ids)', async=>{})
  })
  describe('jumbo-ing()', async()=>{
    it('should receive list of ids', async=>{})
    it('should return map(ids => integer)', async=>{})
  })
  describe('quest()', async()=>{
    it('should pass validation test', async()=>{}) // voting, transaction from store, etc., ...
    it('if not already has')
    it('give item to customer')
    it('should return pass/non-pass')
  })
  describe('food()', async()=>{
    it('should receive store type, user address, item id as its input parameter', async()=>{})
    it('minting new item')
    it('user get item; transfer ownership')
  })
})
