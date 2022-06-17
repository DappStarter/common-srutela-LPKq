require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rifle six purse grace glide equal gasp'; 
let testAccounts = [
"0x324bcda6bbf2678ac5db86d6b547e3cad91ac93d3607faf694451451abed2d70",
"0xac7ea716647cb0603fd01e353b9567c566ae5b516132d4d85ae51fef2ca0d37a",
"0xb0c7291588dd10e4b4f9384a4a1cd1d6a2045e3df10e64b6517aa571139e93ba",
"0x03aa8660a417c766da1862a32fb625356a5f99d88154315c09b5e26c74b62049",
"0xd431305ccdceb11e37f4b48295e46844e290f6b6c403e3a39c1465908cbc9da3",
"0x3de0c8983c49dacdb36ca1afbea70cddddf6aa126fe2e5ce6792872b871aaaa8",
"0x2cdce72eb3099fbadd171c70d03771acc891283cb1b8bb46477227242f9d75d4",
"0xd252822dde24720c95a274bed96845f2dd93ce02c48c3723e0b705a92ddbc5a0",
"0xe86c7c1145979c34efdf2e32ed4aa568c54a1aa3c1169e438f5860403a3ed873",
"0x2ce7f8bf0981ce8ac814fb844d0e995315ad0c282f72474eaecbf6e9e571f14a"
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


