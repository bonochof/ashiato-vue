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
          title: '水泳',
          content: ['選手(全国高専大会で個人三連覇)', 'コーチのアルバイト']
        },
        {
          title: '書道',
          content: [
            '19歳で習字研究社漢字科 五段(一般過程の最高段位)を取得',
            '隷書が好き'
          ]
        },
        {
          title: 'ピアノ',
          content: ['マイペースに…']
        }
      ]
    }
  }
}
</script>
