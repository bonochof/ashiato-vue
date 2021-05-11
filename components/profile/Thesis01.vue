<template>
  <v-card-text>
    <v-list-item v-for="item in items" :key="item.title">
      <v-list-item-content class="text-left">
        <v-list-item-title v-text="item.title" />
        <v-list-item-subtitle
          v-for="content in item.content"
          :key="content"
          v-text="content"
        />
      </v-list-item-content>
    </v-list-item>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: '進化的学習を通したエージェントの立位保持に関する検討',
          content: [
            '常葉大学 経営学部 研究紀要, Vol. 8, No. 2, pp. 35-41, Feb. 2021',
            '山田雅敏, 高田亮介, 坂本孝丈, 竹内勇剛',
            '(査読あり)'
          ]
        }
      ]
    }
  }
}
</script>
