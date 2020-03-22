<template>
  <div>
    <v-img
      width="30%"
      class="mx-auto"
      src="/images/tools/dice.png"
      @click="roll()"
    />
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    roll() {
      this.value = Math.floor(Math.random() * 6) + 1
    }
  }
}
</script>
