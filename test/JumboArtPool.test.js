const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const JumboArtPool = artifacts.require('JumboArtPool')

contract('JumboArtPool', async (accounts) => {
  describe('registerCandidate()', async()=>{
    it('should receive level, hash of image as its input parameter', async=>{})
    it('should register new jumbo candidate', async=>{})
  })
  describe('vote()', async()=>{
    
  })
  describe('getCandidate()', async()=>{
    
  })
  describe('getCandidates()', async()=>{
    
  })
  describe('getJumbo()', async()=>{
  
  })
})
