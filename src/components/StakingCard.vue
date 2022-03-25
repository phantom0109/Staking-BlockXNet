<template>
  <v-container>
    <v-card elevation="2" class="mx-auto my-12" max-width="480">
      <div class="d-flex justify-space-between align-center">
        <div>
          <v-card-subtitle class="grey--text pb-0">Chapter 2</v-card-subtitle>
          <v-card-title class="pt-0 pb-0">Devastation</v-card-title>
        </div>
        <v-btn color="blue-grey" class="ma-2 white--text">
          6 months
          <!-- <v-icon -->
          <!--   right -->
          <!--   dark -->
          <!-- > -->
          <!--   mdi-cloud-upload -->
          <!-- </v-icon> -->
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
              <td>$11,401</td>
            </tr>
            <tr>
              <td>Maturity Return (APY%)</td>
              <td>45%</td>
            </tr>
            <tr>
              <td>My Staked</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Treasure Tickets</td>
              <td>--</td>
            </tr>
            <tr>
              <td>My Rewards</td>
              <td>0</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="stake-btn-container">
        <v-btn rounded color="primary" dark x-large block>Stake</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'StakingCard',

  //Can be populated later
  data: () => ({}),
}
</script>
<style>
.stake-btn-container {
  padding: 24px;
}
.staking-table > tr > td {
  border: 0px solid !Important;
}

/* .staking-table > tr > td:last-child { */
/*   text-align: right; */
/* } */
</style>
