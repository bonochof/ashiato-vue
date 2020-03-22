<template>
  <v-layout>
    <Header title="あしあと - Profile" />
    <v-flex class="text-center">
      <v-row justify="center">
        <v-col cols="6">
          <title-image />
          <div>
            このページでは私の<span class="font--primary">プロフィール</span
            >を載せています．
          </div>
        </v-col>
      </v-row>
      <v-card>
        <v-card-title>高田亮介（Takata Ryosuke）</v-card-title>
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
    </v-flex>
  </v-layout>
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

<style scoped>
.font--primary {
  color: #d2691e;
}
</style>
