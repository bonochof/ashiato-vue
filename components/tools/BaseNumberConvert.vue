<template>
  <div>
    <v-row>
      <v-select
        v-model="beforeBaseNumber"
        :items="baseNumberItems"
        :item-text="text"
        :item-value="value"
        dense
        outlined
      />の <v-text-field v-model="input" single-line outlined />を
      <v-select
        v-model="afterBaseNumber"
        :items="baseNumberItems"
        :item-text="text"
        :item-value="value"
        dense
        outlined
      />に変換
    </v-row>
    <v-row>
      <v-btn @click="convert()">変換</v-btn>
      <v-text-field v-model="output" single-line outlined />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      output: '',
      beforeBaseNumber: '',
      afterBaseNumber: '',
      baseNumberItems: [
        {
          text: '2進数',
          value: 2
        },
        {
          text: '8進数',
          value: 8
        },
        {
          text: '10進数',
          value: 10
        },
        {
          text: '16進数',
          value: 16
        }
      ]
    }
  },
  methods: {
    convert() {
      this.output = parseInt(this.input, this.beforeBaseNumber).toString(
        this.afterBaseNumber
      )
    }
  }
}
</script>
