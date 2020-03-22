<template>
  <v-layout>
    <Header title="あしあと - Tools" />
    <v-flex class="text-center">
      <v-row justify="center">
        <v-col cols="6">
          <title-image />
          <div>
            雑多な<span class="font--primary">ツール</span
            >を置くためのページです．
          </div>
        </v-col>
      </v-row>
      <v-card>
        <v-row>
          <v-col v-for="item in items" :key="item.key" cols="4">
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text v-if="item.key === 'clock'">
              <clock />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'stop-watch'">
              <stop-watch />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'omikuji'">
              <omikuji />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'dice'">
              <dice />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'repeat'">
              <repeat />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'comma-separate'">
              <comma-separate />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'base-number-convert'">
              <base-number-convert />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'count'">
              <count />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'tab-to-space-convert'">
              <tab-to-space-convert />
            </v-card-text>
            <v-card-text v-else-if="item.key === 'tokaido53'">
              <tokaido53 />
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '~/components/Header.vue'
import TitleImage from '~/components/TitleImage.vue'
import BaseNumberConvert from '~/components/tools/BaseNumberConvert.vue'
import Clock from '~/components/tools/Clock.vue'
import CommaSeparate from '~/components/tools/CommaSeparate.vue'
import Count from '~/components/tools/Count.vue'
import Dice from '~/components/tools/Dice.vue'
import Omikuji from '~/components/tools/Omikuji.vue'
import Repeat from '~/components/tools/Repeat.vue'
import StopWatch from '~/components/tools/StopWatch.vue'
import TabToSpaceConvert from '~/components/tools/TabToSpaceConvert.vue'
import Tokaido53 from '~/components/tools/Tokaido53.vue'
export default {
  components: {
    TitleImage,
    BaseNumberConvert,
    Clock,
    CommaSeparate,
    Count,
    Dice,
    Omikuji,
    Header,
    Repeat,
    StopWatch,
    TabToSpaceConvert,
    Tokaido53
  },
  data() {
    return {
      items: [
        {
          key: 'clock',
          title: '現在時刻'
        },
        {
          key: 'timer',
          title: 'タイマー'
        },
        {
          key: 'omikuji',
          title: 'おみくじ'
        },
        {
          key: 'dice',
          title: 'サイコロ'
        },
        {
          key: 'repeat',
          title: '文字繰り返し'
        },
        {
          key: 'comma-separate',
          title: 'カンマ区切り'
        },
        {
          key: 'base-number-convert',
          title: '進数変換'
        },
        {
          key: 'count',
          title: '文字数カウント'
        },
        {
          key: 'tab-to-space-convert',
          title: 'タブ→スペース変換'
        },
        {
          key: 'tokaido53',
          title: '東海道五十三次'
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
