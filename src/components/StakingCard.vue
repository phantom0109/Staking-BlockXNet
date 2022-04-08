<template>
  <v-container>
    <v-card elevation="2" class="mx-auto my-12" max-width="480">
      <div class="d-flex justify-space-between align-center">
        <div>
          <v-card-subtitle class="grey--text pb-0">Chapter 2</v-card-subtitle>
          <v-card-title class="pt-0 pb-0">Devastation</v-card-title>
        </div>
        <!-- <v-btn color="blue-grey" class="ma-2 white--text">
          6 months
        </v-btn> -->
        <v-btn
          color="blue-grey"
          @click="connectWallet"
          v-if="!connected"
          class="ma-2 white--text"
        >
          CONNECT
        </v-btn>
      </div>
      <v-card-title class="justify-center text-h4 font-weight-medium pb-0"
        >4,000,000</v-card-title
      >
      <v-row class="mb-1">
        <v-col class="pl-7 pr-7">
          <v-card-subtitle class="subtitle grey--text pl-0 pb-1"
            >348,759.6 Staked</v-card-subtitle
          >
          <v-progress-linear value="15"></v-progress-linear>
        </v-col>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <tbody class="staking-table">
            <tr>
              <td>Total Locked Value</td>
              <td>{{ totalStaked }} BCX</td>
            </tr>
            <tr>
              <td>Maturity Return (APY%)</td>
              <td>45%</td>
            </tr>
            <tr>
              <td>My Staked</td>
              <td>{{ myStaked }} BCX</td>
            </tr>
            <tr>
              <td>Treasure Tickets</td>
              <td>--</td>
            </tr>
            <tr>
              <td>My Rewards</td>
              <td>{{ myRewards }} BCX</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <div v-if="staked" class="withdraw-btn-container">
        <v-btn rounded class="min-w-52" outlined color="teal" dark x-large>
          +
        </v-btn>
        <v-btn rounded class="min-w-52" outlined color="error" dark x-large>
          -
        </v-btn>
        <div class="stretch"></div>
        <v-btn rounded color="primary" @click="claim" dark x-large> Claim </v-btn>
      </div>
      <div v-else class="stake-btn-container">
        <v-btn rounded v-if="approved" color="primary" dark x-large block
          >Stake</v-btn
        >
        <v-btn
          rounded
          v-else
          @click="approve"
          color="primary"
          dark
          x-large
          block
        >
          Approve
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
// const Web3 = require("web3");
// const web3 = new Web3(window.ethereum);
const { address, abi, erc20_address, erc20_abi } = require('../../config')
export default {
  name: 'StakingCard',
  mounted() {
    this.init()
  },
  methods: {
    init: async function () {
      const connected = await this.checkConnectedWalletExist()
      if (connected) {
        console.log('connected,', this.currentAccount)
        await this.getData()
      }
    },
    approve: async function () {
      try {
        const provider = new this.$ethers.providers.Web3Provider(
          window.web3.currentProvider
        )
        const signer = provider.getSigner()
        const erc20 = new this.$ethers.Contract(
          erc20_address,
          erc20_abi,
          signer
        )
        await erc20.approve(address, this.$ethers.constants.MaxUint256)
        await this.getData()
      } catch (e) {
        console.log(e)
      }
    },
    getData: async function () {
      try {
        const provider = new this.$ethers.providers.Web3Provider(
          window.web3.currentProvider
        )
        const signer = provider.getSigner()
        const stakingContract = new this.$ethers.Contract(address, abi, signer)
        const erc20 = new this.$ethers.Contract(
          erc20_address,
          erc20_abi,
          signer
        )
        // const totalStaked = await stakingContract.totalStaked()
        const myStaked = await stakingContract.getBalance()
        const myRewards = await stakingContract.earned(this.currentAccount)
        const allowance = await erc20.allowance(this.currentAccount, address)
        if (Number(allowance)) this.approved = true
        else this.approved = false
        // this.totalStaked = this.$ethers.utils.formatEther(totalStaked)
        this.myStaked = this.$ethers.utils.formatEther(myStaked)
        if (Number(myStaked)) this.staked = true
        else this.staked = false
        this.myRewards = Number(
          this.$ethers.utils.formatEther(myRewards)
        ).toFixed(4)
        // console.log('staked amount', totalStaked.toString())
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    },
    claim: async function () {
      try {
        const provider = new this.$ethers.providers.Web3Provider(
          window.web3.currentProvider
        )
        const signer = provider.getSigner()
        const stakingContract = new this.$ethers.Contract(address, abi, signer)
        const tx = await stakingContract.getReward()
        await tx.wait()
      } catch (e) {
        console.log(e)
      }
    },
    checkConnectedWalletExist: async function () {
      try {
        const { ethereum } = window
        if (!ethereum) {
          alert('Make sure you have metamask!')
          return false
        } else {
          console.log('We have the ethereum object', ethereum)
        }
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        if (accounts.length !== 0) {
          const account = accounts[0]
          console.log('Found an authorized account:', account)
          this.currentAccount = account
          this.connected = true
          return true
        } else {
          console.log('No authorized account found')
          return false
        }
      } catch (error) {
        console.log(error)
        return false
      }
    },
    connectWallet: async function () {
      try {
        const { ethereum } = window
        if (!ethereum) {
          alert('Get MetaMask!')
          return
        }
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        })
        console.log('Connected', accounts[0])
        this.currentAccount = accounts[0]
        this.connected = true
      } catch (error) {
        console.log(error)
      }
    },
  },
  //Can be populated later
  data: () => ({
    currentAccount: '',
    connected: false,
    totalStaked: '0.0',
    myStaked: '0.0',
    myRewards: '0.0',
    approved: false,
    staked: false,
  }),
}
</script>
<style>
.stake-btn-container {
  padding: 24px;
}
.staking-table > tr > td {
  border: 0px solid !important;
}
.withdraw-btn-container {
  display: flex !important;
  flex-direction: row;
  gap: 12px;
  padding: 24px;
}
.min-w-52 {
  min-width: 52px !important;
  max-width: 52px !important;
}
.stretch {
  flex-grow: 1;
}

/* .staking-table > tr > td:last-child { */
/*   text-align: right; */
/* } */
</style>
