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
          title: '情報処理学会',
          content: '2016年～'
        },
        {
          title: '進化計算学会',
          content: '2020年～'
        },
        {
          title: '人工知能学会',
          content: '2021年～'
        }
      ]
    }
  }
}
</script>
