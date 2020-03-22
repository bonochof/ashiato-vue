<template>
  <div>
    <v-row>
      <v-text-field v-model="input" single-line outlined />を
      <v-text-field v-model="repeatCount" single-line outlined />回
    </v-row>
    <v-row>
      <v-btn @click="repeat()">生成</v-btn>
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
      input: '',
      repeatCount: 10,
      output: ''
    }
  },
  methods: {
    repeat() {
      this.output = ''
      for (let i = 0; i < this.repeatCount; i++) {
        this.output += this.input
      }
    }
  }
}
</script>
