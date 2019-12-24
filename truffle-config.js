module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/989cb18083114110ba7f613d29397642");
      },
      network_id: '3',
    },
    test: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
      },
      network_id: '*',
    },
  }  
};
