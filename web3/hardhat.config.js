/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        url: 'https://rpc.ankr.com/eth_sepolia',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

//YPrd4tPRT-96ZEaPs0tjeV0SHsW6BJEZRkXpYkmvHMm-6885hyc6ldqb2ZbIrtF3kMlncEM17MvXvnE9b6a-JQ

/* crowd3
Client ID
Identifies your application.


88938a5ddf12a63fdb14209934570ead
Secret Key
Identifies and authenticates your application from a backend.


YPrd4tPRT-96ZEaPs0tjeV0SHsW6BJEZRkXpYkmvHMm-6885hyc6ldqb2ZbIrtF3kMlncEM17MvXvnE9b6a-JQ
Do not share or expose your secret key
Secret keys cannot be recovered. If you lose your secret key, you will need to create a project
*/

//crowd 2:address :  0x5a9469D5fcb6FA7997f37f87CC508994bD105E66