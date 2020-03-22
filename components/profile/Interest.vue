<template>
  <v-card-text>
    <v-list-item v-for="item in items" :key="item">
      <v-list-item-content class="text-left">
        <v-list-item-title v-text="item" />
      </v-list-item-content>
    </v-list-item>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      items: [
        '旅',
        'Ruby',
        '温泉',
        '甘いもの',
        '認知科学',
        '人工生命',
        'ゲーム情報学',
        'イオンモール',
        'Official髭男dism'
      ]
    }
  }
}
</script>
