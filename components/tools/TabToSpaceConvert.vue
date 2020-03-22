<template>
  <div>
    <v-row>
      <v-textarea v-model="input" solo />
    </v-row>
    <v-row>
      <v-textarea v-model="output" solo />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  computed: {
    output() {
      return this.input.replace(/\t/g, '  ')
    }
  }
}
</script>
