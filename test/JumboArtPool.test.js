const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const JumboArtPool = artifacts.require('JumboArtPool')

contract('JumboArtPool', async (accounts) => {
  function registerCandidate(uint8 level, bytes32 hash) external;
  function vote(uint8 level, bytes32 hash, bool upvote) external;
  function getCandidate(bytes32 hash) external returns(int256 votes);
  function getCandidates(uint8 level) external returns(bytes32[] memory ranking);
  function getJumbo(uint8 level) external returns(bytes32 target);


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
