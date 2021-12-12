require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind history inflict nation fold segment'; 
let testAccounts = [
"0x623a982641cedc824f25614017f34b8eaf97ecc0ebed9cfa4c9aca54c1ae80e7",
"0xe51df1b7d656cbeda85e1b8687fde48c9d32c1ee65fb2e1577b4abc8c5686850",
"0xe7cb085d9fa0c780f9af8a0628d9eece85dae201daf0b01d0f6ec8b9d6a61221",
"0xb9921074fab36e49f66d1b210c5323d01315a66bcd059840654460e00b0bb6a9",
"0x91ad826c69f34b7846d3f15b64935fd0a96106b7979571f4c5fc4272ec9313c9",
"0xfb555266867fee0c7d2b38d1067a4657b1ac056dd381cddd8fcd0ac4731aae56",
"0xeccd4b66b540d0b75b52106a325610d656638557c5e7e7e0c3cc48350a4b46ec",
"0x4cc5d910abd197e44245e38b7bb8754ad4d3085e6388bc97f5473bceb7bc6e2b",
"0xae26b16f884aa5c0a4aa942b2f090a1b5e7fa96f8fc0cbdcd11990dbe643bbe1",
"0xc926f2640bcc51441cabf5f071d94e2636ee27789440b06b6301ba56bd5006ff"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


