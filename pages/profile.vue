<template>
  <v-container>
    <Header title="たかたのあしあと - Profile" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          このページでは私の<span class="font--primary">プロフィール</span
          >を載せています．
        </div>
      </v-col>
    </v-row>
    <v-card class="pc-only">
      <v-card-title>高田亮介（Ryosuke TAKATA）</v-card-title>
      <v-card-subtitle>
        大学院生 / 研究補佐員 / ソフトウェアエンジニア / 水泳コーチ
      </v-card-subtitle>
      <v-tabs v-model="tab" grow>
        <v-tab v-for="item in items" :key="item.key">
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.key">
          <v-card v-if="item.key === 'history'">
            <history />
          </v-card>
          <v-card v-else-if="item.key === 'activity'">
            <activity />
          </v-card>
          <v-card v-else-if="item.key === 'thesis'">
            <v-card-title>学術論文</v-card-title>
            <thesis01 />
            <v-card-title>国際会議における発表</v-card-title>
            <thesis02 />
            <v-card-title>国内学会・シンポジウムにおける発表</v-card-title>
            <thesis03 />
            <v-card-title>招待講演</v-card-title>
            <thesis04 />
            <v-card-title>受賞</v-card-title>
            <thesis05 />
          </v-card>
          <v-card v-else>
            <v-card-title>プログラミング</v-card-title>
            <skill />
            <v-card-title>所属学会</v-card-title>
            <society />
            <v-card-title>趣味</v-card-title>
            <hobby />
            <v-card-title>興味</v-card-title>
            <interest />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-card class="sp-only">
      <v-card-title>高田亮介（Ryosuke TAKATA）</v-card-title>
      <v-card-subtitle>
        大学院生 / 研究補佐員 / ソフトウェアエンジニア / 水泳コーチ
      </v-card-subtitle>
      <v-expansion-panels popout="true" multiple="true">
        <v-expansion-panel v-for="item in items" :key="item.key">
          <v-expansion-panel-header class="t">
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
            {{ item.tab }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="item.key === 'history'">
              <history />
            </div>
            <div v-else-if="item.key === 'activity'">
              <activity />
            </div>
            <div v-else-if="item.key === 'thesis'">
              <v-card-title>学術論文</v-card-title>
              <thesis01 />
              <v-card-title>国際会議における発表</v-card-title>
              <thesis02 />
              <v-card-title>国内学会・シンポジウムにおける発表</v-card-title>
              <thesis03 />
              <v-card-title>招待講演</v-card-title>
              <thesis04 />
              <v-card-title>受賞</v-card-title>
              <thesis05 />
            </div>
            <div v-else>
              <v-card-title>プログラミング</v-card-title>
              <skill />
              <v-card-title>所属学会</v-card-title>
              <society />
              <v-card-title>趣味</v-card-title>
              <hobby />
              <v-card-title>興味</v-card-title>
              <interest />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>
import Header from '~/components/Header.vue'
import TitleImage from '~/components/TitleImage.vue'
import History from '~/components/profile/History.vue'
import Activity from '~/components/profile/Activity.vue'
import Thesis01 from '~/components/profile/Thesis01.vue'
import Thesis02 from '~/components/profile/Thesis02.vue'
import Thesis03 from '~/components/profile/Thesis03.vue'
import Thesis04 from '~/components/profile/Thesis04.vue'
import Thesis05 from '~/components/profile/Thesis05.vue'
import Skill from '~/components/profile/Skill.vue'
import Society from '~/components/profile/Society.vue'
import Hobby from '~/components/profile/Hobby.vue'
import Interest from '~/components/profile/Interest.vue'
export default {
  components: {
    Header,
    TitleImage,
    History,
    Activity,
    Thesis01,
    Thesis02,
    Thesis03,
    Thesis04,
    Thesis05,
    Skill,
    Society,
    Hobby,
    Interest
  },
  data() {
    return {
      tab: null,
      items: [
        {
          key: 'history',
          icon: 'mdi-account-clock',
          tab: '歴史'
        },
        {
          key: 'activity',
          icon: 'mdi-account-details',
          tab: '活動'
        },
        {
          key: 'thesis',
          icon: 'mdi-account-edit',
          tab: '業績'
        },
        {
          key: 'other',
          icon: 'mdi-account-music',
          tab: 'その他'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
.v-icon {
  display: block;
}
</style>
