<template>
  <div>
    <div>
      {{ formatTime }}
    </div>
    <v-btn v-if="!timerOn" @click="start()">Start</v-btn>
    <v-btn v-if="timerOn" @click="stop()">Stop</v-btn>
    <v-btn v-if="count != 0 && !timerOn" @click="clear()">Clear</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      timerOn: false,
      timerObj: null
    }
  },
  computed: {
    formatTime() {
      const msec = this.count % 100
      const sec = Math.floor(this.count / 100)
      const min = Math.floor(sec / 60)
      const hour = Math.floor(min / 60)
      return (
        this.getdoubleDigestNumer(hour) +
        ':' +
        this.getdoubleDigestNumer(min) +
        ':' +
        this.getdoubleDigestNumer(sec) +
        ':' +
        this.getdoubleDigestNumer(msec)
      )
    }
  },
  methods: {
    up() {
      this.count++
      if (this.count === 24 * 60 * 60 * 100) {
        this.count = 0
      }
    },
    start() {
      const self = this
      this.timerObj = setInterval(() => {
        self.up()
      }, 10)
      this.timerOn = true
    },
    stop() {
      clearInterval(this.timerObj)
      this.timerOn = false
    },
    clear() {
      this.count = 0
    },
    getdoubleDigestNumer(number) {
      return ('0' + number).slice(-2)
    }
  }
}
</script>
