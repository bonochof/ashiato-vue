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
          title: 'プログラミングの楽しさを知る',
          content: ['常葉大学 経営学部 情報学ゼミナール, May. 2021', '高田亮介']
        }
      ]
    }
  }
}
</script>
