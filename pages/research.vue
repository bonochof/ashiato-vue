<template>
  <v-container>
    <Header title="あしあと - Research" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          このページでは私の<span class="font--primary">研究</span
          >を紹介します．
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            人の探索による発見は機械にも可能か？
          </v-card-title>
          <v-card-text>
            「知的である」，「知性を持つ」とはどういうことなのか．
            人を含めた動物の知性を形式化するために，動物が探索・探求するために行う「進化」や「学習」に着目しています．
            例えば，スーパーマリオブラザーズの有名な裏技「無限1UP」は人の探索によって発見されましたが，
            「無限1UP」が機械にも発見可能かどうか研究しています．
            ダイナミクスを把握している設計者が人工物に答えを教えることなく，
            機械が自律的に探索して解を発見することで，その機械は「知的である」と言えるか検証しています．
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            人工物が協調することはできるか？
          </v-card-title>
          <v-card-text>
            人などの動物が協調的に振る舞うとき，人は何に注目しているのか．
            協調しやすい状況にはどんな要素が必要なのか，といった点に興味を持っています．
            人工物に協調的な振る舞いを獲得させて，その様子を観察する構成論的アプローチによる協調の仕組みの解明を目指しています．
            例えば，2体の人工物が1つの重たい箱を持ち上げる「箱持ち上げ課題」に対して，
            ニューラルネットワークを用いた学習を通して協調的な振る舞いを獲得させる実験を行っています．
            学習させたニューラルネットワークを分析し，人工物が何に注目しているか，
            どのような行動規則であるか記述することで，人とも協調可能な人工物の実現に近づくと考えています．
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            社会性を持った集団は人工的に創発できるか？
          </v-card-title>
          <v-card-text>
            アリや魚といった動物はしばしば群れを形成して行動します．
            このとき，群れの振る舞いはリーダーがトップダウンに制御しているのではなく，
            各個体がそれぞれ自律的に，かつインタラクティブに振る舞うことでボトムアップに創発しています．
            このような，ボトムアップに創発する社会性を持った集団を人工的に創り出す研究を行っています．
            例えば，日本の伝統的な遊びである「缶蹴り」は，単純なルールであるにもかかわらず，
            多様なインタラクションが見られます．「缶蹴り」を題材に強化学習させることで，
            プレイヤにそれぞれ異なった役割が形成され，社会性が創発するか検証しています．
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from '~/components/Header.vue'
import TitleImage from '~/components/TitleImage.vue'
export default {
  components: {
    Header,
    TitleImage
  }
}
</script>

<style scoped>
.font--primary {
  color: #d2691e;
}
.intro-text {
  font-size: 10px;
}
@media only screen and (min-width: 651px) {
  .intro-text {
    font-size: 16px;
  }
}
</style>
