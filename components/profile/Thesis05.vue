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
          title: 'toioの「Do!コン」 審査員特別賞',
          content: ['May. 2021']
        },
        {
          title: 'HAIシンポジウム2021 Student Encouragement Award',
          content: ['Mar. 2021']
        },
        {
          title:
            'ロボットやろうぜ！-toio & Unity 作品動画コンテスト- 審査員特別賞',
          content: ['Dec. 2020']
        },
        {
          title:
            '第3回静岡テックプラングランプリ 最優秀賞，ヤマハ発動機賞，浜松いわた信用金庫賞',
          content: ['Nov. 2020']
        },
        {
          title: 'ヒューマンインタフェースサイバーコロキウム 優秀発表賞',
          content: ['Oct. 2020']
        },
        {
          title: '静岡大学 成績優秀者賞',
          content: ['Dec. 2019']
        },
        {
          title: '第8回サイエンス・インカレ 審査員特別賞',
          content: ['Mar. 2019']
        },
        {
          title:
            '松江工業高等専門学校 電気情報学会賞，功労賞，優秀成績賞，優秀卒業学生表彰',
          content: ['Mar. 2018']
        },
        {
          title: '第39回情報処理学会ゲーム情報学研究会 若手奨励賞',
          content: ['Mar. 2018']
        },
        {
          title: '第1回スモウルビー・プログラミング甲子園 優勝',
          content: ['Mar. 2016']
        }
      ]
    }
  }
}
</script>
