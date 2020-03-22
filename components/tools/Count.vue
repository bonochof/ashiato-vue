<template>
  <div>
    <v-row>
      <v-textarea v-model="input" solo />
    </v-row>
    <v-row>
      <v-col>文字数(全文字)</v-col>
      <v-col>{{ strCount }}</v-col>
    </v-row>
    <v-row>
      <v-col>文字数(スペース無視)</v-col>
      <v-col>{{ spaCount }}</v-col>
    </v-row>
    <v-row>
      <v-col>行数</v-col>
      <v-col>{{ retCount }}</v-col>
    </v-row>
    <v-row>
      <v-col>段落数</v-col>
      <v-col>{{ parCount }}</v-col>
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
    strCount() {
      return this.input.replace(/\n/g, '').length
    },
    spaCount() {
      return this.input.replace(/\s+/g, '').length
    },
    retCount() {
      const r = this.input.match(/\n/g)
      return (r && r.length + 1) || 1
    },
    parCount() {
      const p = this.input.match(/\n(?:|\s+|「|『|＜|《|〈|≪|（|“|‘|\(|"|')./g)
      return (p && p.length + 1) || 1
    }
  }
}
</script>
