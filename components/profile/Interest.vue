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
          title: '旅'
        },
        {
          title: '温泉'
        },
        {
          title: '甘いもの'
        },
        {
          title: '認知科学'
        },
        {
          title: '人工生命'
        },
        {
          title: 'ゲーム情報学'
        },
        {
          title: 'イオンモール'
        },
        {
          title: 'Official髭男dism'
        }
      ]
    }
  }
}
</script>
