var axios = require("axios")

module.exports = {

  // getPublicChain() method returns all blockchain data except private transactions. 
  // Use this method to perform analysis, block and node validation. 
  getPublicChain () {
        return axios.get(`https://iotappbe.com:5001/test`)
        .then((response) => {
          let chain = response.data;
          return chain.slice().reverse()
        })
        .catch((error) => {
          console.log("API error: " + error);
        })
    },
  
    // getPrivateChain() method returns all private blockchain data for a given write key.
    // Use this method to get and display all transactions signed to your dapp. 
  getPrivateChain (key1, key2) {
      return axios.post('https://iotappbe.com:5001/passkeys', {
        privKey1: key1,
        privKey2: key2,
      })
      .then((response) => {
        let privateChain = response.data;
        return privateChain.slice().reverse();
      })
      .catch((error) => {
        console.log("API error: " + error);
      })
  }, 

  //getLastTx() method returns the last transaction in the private chain for a given write key.
  // Use this method to get and display the latest incoming data for your dapp. 
  getLatestTx (key1, key2) {
    return axios.post('https://iotappbe.com:5001/passkeys', {
      privKey1: key1,
      privKey2: key2,
    })
    .then((response) => {
      let lastBlock = response.data;
      return [lastBlock.slice(-1)[0]]
    })
    .catch((error) => {
      console.log("API error " + error);
    }) 
  }
}