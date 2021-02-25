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
            '常葉大学 経営学部 研究紀要, Feb. 2021',
            '山田雅敏, 高田亮介, 坂本孝丈, 竹内勇剛',
            '【査読有り】'
          ]
        },
        {
          title:
            '強化学習を用いたエージェントによる缶蹴りの集団形成と振る舞い分析',
          content: [
            'ヒューマンインタフェースサイバーコロキウム論文集, pp.81-88, Oct. 2020',
            '高田亮介, 坂本孝丈, 竹内勇剛',
            '【優秀発表賞 受賞】'
          ]
        },
        {
          title: '缶蹴りにおける強化学習を用いた身体的インタラクション',
          content: [
            '日本認知科学会第37回大会論文集, pp.384-391, Sep. 2020',
            '高田亮介, 竹内勇剛'
          ]
        },
        {
          title:
            'ニューロエボリューションを用いたクリーチャによる協調行動の分析',
          content: [
            '第34回人工知能学会全国大会論文集, 4Rin1-64, Jun. 2020',
            '高田亮介, 竹内勇剛'
          ]
        },
        {
          title:
            '身体的特徴が異なるエージェントにおける立位熟達過程の分析 -ニューロエボリューションによる進化的学習に注目して-',
          content: [
            '第34回人工知能学会全国大会論文集, 4Rin1-19, Jun. 2020',
            '山田雅敏, 高田亮介, 坂本孝丈, 竹内勇剛'
          ]
        },
        {
          title: '強化学習を通したクリーチャによる協調行動の自動獲得',
          content: ['HAIシンポジウム, G-7, Mar. 2020', '高田 亮介, 竹内 勇剛']
        },
        {
          title:
            'ニューロエボリューションによるエージェントの立位獲得過程に関する研究',
          content: [
            '第8回浜松アカデミックカンファレンス, Feb. 2020',
            '山田 雅敏, 高田 亮介, 竹内 勇剛'
          ]
        },
        {
          title:
            'Design of Cooperative Interaction between Humans and AI Creatures through Reinforcement Learning',
          content: [
            'Proceedings of the 7th International Conference on Human-Agent Interaction, pp.220-222, Oct. 2019',
            'Ryosuke TAKATA, Yugo TAKEUCHI',
            '【査読有り】'
          ]
        },
        {
          title:
            'Design of Cooperative Interaction between Humans and Agents through Reinforcement Learning',
          content: [
            'Next Generation Human-Agent Interaction Workshop, Oct. 2019',
            'Ryosuke TAKATA, Yugo TAKEUCHI'
          ]
        },
        {
          title:
            'Learning Method to Discover Secret Tricks Using Reinforcement Learning',
          content: [
            'NIT-NUU Bilateral Academic Conference, Jul. 2018',
            'Tsuyoshi HASHIMOTO, Ryosuke TAKATA'
          ]
        },
        {
          title:
            '無限1UPを題材としたアクションゲームの裏技を発見する自己学習手法の提案',
          content: [
            '第39回情報処理学会ゲーム情報学研究会, Mar. 2018',
            '高田 亮介, 橋本 剛',
            '【若手奨励賞 受賞】'
          ]
        },
        {
          title: '自己学習で裏技を発見するアクションゲームAIの研究',
          content: [
            '松江工業高等専門学校卒業論文, Feb. 2018',
            '高田 亮介, 橋本 剛'
          ]
        },
        {
          title: '第1回スモウルビー甲子園優勝プログラムと将来の展望',
          content: [
            '第58回プログラミング・シンポジウム予稿集, pp.81-83, Jan. 2017',
            '高田 亮介, 加藤 聡'
          ]
        }
      ]
    }
  }
}
</script>
