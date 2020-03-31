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
          title: '旅',
          content: ['いつだって自然に囲まれた場所に行きたい']
        },
        {
          title: 'Ruby',
          content: ['Matz江市の誇り', '一番気楽に書ける']
        },
        {
          title: '温泉',
          content: ['かなり長風呂(ただしのぼせる)']
        },
        {
          title: '甘いもの',
          content: ['無限に食べたい']
        },
        {
          title: '認知科学',
          content: ['大学で研究を始めてから人の面白さを感じる']
        },
        {
          title: '人工生命',
          content: ['生命とは何か？という哲学を寝る前に考えてニヤニヤしてる']
        },
        {
          title: 'ゲーム情報学',
          content: ['高専での研究から現在までの研究領域']
        },
        {
          title: 'イオンモール',
          content: ['毎日通ってる', '気付いたら株主になってた']
        },
        {
          title: 'Official髭男dism',
          content: ['山陰の誇り', '大輔さん(ギター)は兄の同級生']
        }
      ]
    }
  }
}
</script>
