<template>
  <v-container>
    <Header title="あしあと - Profile" />
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
      <v-card-title>高田亮介（TAKATA Ryosuke）</v-card-title>
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
          <v-card v-else-if="item.key === 'award'">
            <award />
          </v-card>
          <v-card v-else-if="item.key === 'thesis'">
            <thesis />
          </v-card>
          <v-card v-else>
            <v-card-title>趣味</v-card-title>
            <hobby />
            <v-card-title>興味</v-card-title>
            <interest />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <v-card class="sp-only">
      <v-card-title>高田亮介（Takata Ryosuke）</v-card-title>
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
            <div v-else-if="item.key === 'award'">
              <award />
            </div>
            <div v-else-if="item.key === 'thesis'">
              <thesis />
            </div>
            <div v-else>
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
import Award from '~/components/profile/Award.vue'
import Thesis from '~/components/profile/Thesis.vue'
import Hobby from '~/components/profile/Hobby.vue'
import Interest from '~/components/profile/Interest.vue'
export default {
  components: {
    Header,
    TitleImage,
    History,
    Award,
    Thesis,
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
          key: 'award',
          icon: 'mdi-account-details',
          tab: '活動/受賞等'
        },
        {
          key: 'thesis',
          icon: 'mdi-account-edit',
          tab: '論文'
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
