<template>
  <div>
    <v-row>
      <v-text-field v-model="input" single-line outlined />
    </v-row>
    <v-row>
      <v-text-field v-model="output" single-line outlined />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: 1000000000
    }
  },
  computed: {
    output() {
      return Number(this.input).toLocaleString()
    }
  }
}
</script>
