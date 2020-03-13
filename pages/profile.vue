<template>
  <v-layout>
    <Header title="Profile" />
    <v-flex class="text-center">
      このページでは私のプロフィールを載せています．
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
