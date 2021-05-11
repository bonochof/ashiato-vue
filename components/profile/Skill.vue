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
          title: 'C',
          content: [
            '2013年～',
            '高専1年生の授業でHello Worldした　なんでもできる'
          ]
        },
        {
          title: 'Ruby',
          content: ['2015年～', '1番好きな言語　なぜならRubyCity出身なので']
        },
        {
          title: 'Python',
          content: ['2016年～', '研究でお世話になってる　機械学習とか分析とか']
        },
        {
          title: 'Java',
          content: [
            '2016年～',
            'オブジェクト指向はこれで学んだ　高専の卒研でのメイン言語'
          ]
        },
        {
          title: 'C#',
          content: ['2018年～', '研究・業務で使用中']
        },
        {
          title: 'その他',
          content: [
            'JavaScript，C++，PHP，LISP，Prolog，Objective-C，SQL',
            'すべてアプリ・システム開発経験有り'
          ]
        }
      ]
    }
  }
}
</script>
