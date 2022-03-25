<template>
  <v-app>
    <v-main>
      <StakingCard />
    </v-main>
  </v-app>
</template>

<script>
import StakingCard from './components/StakingCard'

export default {
  name: 'App',

  components: {
    StakingCard,
  },

  data: () => ({
    //
  }),
}
</script>
