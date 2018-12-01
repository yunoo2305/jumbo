const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const ArtShop = artifacts.require('ArtShop')

contract('ArtShop', async (accounts) => {
  describe('upload()', async()=>{
    it('should receive title, hash of image, describe as its input parameter', async=>{})
    // it('should set votes amount to zero', async=>{})
    it('should return address of owner as its return value', async=>{})
  })
  describe('buy()', async()=>{
    it('should receive art_id as its input parameter', async=>{})
    it('should pay a reward to owner')
    it('should transfer ownership of art')
    it('should return address of owner as its return value', async=>{})
  })
  describe('delete()', async()=>{
    it('should receive ard_id as its input parameter', async=>{})
    it('validation test; vaild ownership or administrator')
    it('should delete art which is storing in server', async=>{})
    it('should return successfully done or not as its return value', async=>{})
  })
  describe('timeout()', async()=>{
    it('call delete function periodically')
  })
  /*
  describe('voting()', async()=>{
    it('should receive target id, good or bad as its input parameter', async=>{})
    it('should affect Jumbo growing state')
    it('should return type of tree as its return value', async=>{})
  })
  */
})
