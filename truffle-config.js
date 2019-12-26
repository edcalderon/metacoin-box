var HDWalletProvider = require("truffle-hdwallet-provider");

// 12-word mnemonic
var mnemonic = process.env.NMEMONIC || "deliver private phone screen snake surge flight anxiety cousin prosper spawn shrug"

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/989cb18083114110ba7f613d29397642");
      },
      network_id: '4',
    },
    test: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/");
      },
      network_id: '*',
    },
  }  
};
