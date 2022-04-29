export const address = "0xA878b8eB62B4a25308CA75B0c89C718F1448B50F"
export const abi = [
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_stakingToken",
            "type": "address"
         },
         {
            "internalType": "address",
            "name": "_rewardPool",
            "type": "address"
         }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "user",
            "type": "address"
         }
      ],
      "name": "addAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "account",
            "type": "address"
         }
      ],
      "name": "earned",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "user",
            "type": "address"
         }
      ],
      "name": "emergencyWithdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_user",
            "type": "address"
         }
      ],
      "name": "getBalanceOfUser",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "getReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "lastUpdateTime",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "multiplier",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "user",
            "type": "address"
         }
      ],
      "name": "removeAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "rewardPerToken",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "rewardPerTokenStored",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "rewardRate",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "name": "rewards",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "rewardsToken",
      "outputs": [
         {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "_rewardPool",
            "type": "address"
         }
      ],
      "name": "setRewardPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "rate",
            "type": "uint256"
         }
      ],
      "name": "setRewardRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
         }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "name": "stakers",
      "outputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "stakingToken",
      "outputs": [
         {
            "internalType": "contract IERC20",
            "name": "",
            "type": "address"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "totalRewards",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "totalStaked",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "user",
            "type": "address"
         }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   },
   {
      "inputs": [
         {
            "internalType": "address",
            "name": "",
            "type": "address"
         }
      ],
      "name": "userRewardPerTokenPaid",
      "outputs": [
         {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
         }
      ],
      "stateMutability": "view",
      "type": "function"
   },
   {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
   }
]

export const erc20_address = "0x86E25f1e266eA4831b3CBb68164753DcbA30D047"
export const erc20_abi = [
    {
       "inputs":[
          {
             "internalType":"string",
             "name":"name_",
             "type":"string"
          },
          {
             "internalType":"string",
             "name":"symbol_",
             "type":"string"
          },
          {
             "internalType":"uint8",
             "name":"decimals_",
             "type":"uint8"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"owner",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"Approval",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"Transfer",
       "type":"event"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"_mint",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"owner",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          }
       ],
       "name":"allowance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"approve",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          }
       ],
       "name":"balanceOf",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"decimals",
       "outputs":[
          {
             "internalType":"uint8",
             "name":"",
             "type":"uint8"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"subtractedValue",
             "type":"uint256"
          }
       ],
       "name":"decreaseAllowance",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"spender",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"addedValue",
             "type":"uint256"
          }
       ],
       "name":"increaseAllowance",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"name",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"symbol",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"totalSupply",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"recipient",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"transfer",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"sender",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"recipient",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"transferFrom",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    }
 ]