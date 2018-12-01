const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const MyJumbo = artifacts.require('MyJumbo')

contract('MyJumbo', async (accounts) => {
  describe('feed()', async()=>{
    it('should receive type of food', async=>{})
    it('should return level of level of jumbo', async=>{})
  })
  describe('equip()', async()=>{
    it('should receive item number', async=>{})
    it('should return validation of ownership, jumbo\'s state', async=>{})
  })
  describe('remove()', async()=>{
    it('should receive item number', async=>{})
    it('should return validation of action(rmv), jumbo\'s state', async=>{})
  })
  describe()
})
