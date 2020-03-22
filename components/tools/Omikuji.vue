<template>
  <v-img
    width="30%"
    class="mx-auto"
    src="/images/tools/omikuji.png"
    @click="run()"
  />
</template>

<script>
export default {
  methods: {
    run() {
      const rand = Math.floor(Math.random() * 100)
      let msg = '大吉'
      if (rand > 9) {
        msg = '中吉'
      } else if (rand > 29) {
        msg = '吉'
      } else if (rand > 69) {
        msg = '凶'
      } else if (rand > 89) {
        msg = '大凶'
      }
      alert(msg)
    }
  }
}
</script>
