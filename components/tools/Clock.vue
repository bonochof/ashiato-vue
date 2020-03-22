<template>
  <p>{{ nowDate }}</p>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      nowDate: '',
      youbi: ['月', '火', '水', '木', '金', '土', '日']
    }
  },
  created() {
    setInterval(() => {
      const now = moment()
      const youbiIndex = now.format('E')
      this.nowDate = now.format('YYYY年MM月DD日(')
      this.nowDate += this.youbi[Number(youbiIndex) - 1]
      this.nowDate += now.format(') HH時mm分ss秒')
    }, 500)
  }
}
</script>
