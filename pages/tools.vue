<template>
  <v-container>
    <Header title="たかたのあしあと - Tools" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          雑多な<span class="font--primary">ツール</span
          >を置くためのページです．
        </div>
      </v-col>
    </v-row>
    <v-card>
      <v-row>
        <v-col v-for="item in items" :key="item.key" md="4" sm="6" cols="12">
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
  </v-container>
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
    Header,
    TitleImage,
    BaseNumberConvert,
    Clock,
    CommaSeparate,
    Count,
    Dice,
    Omikuji,
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
          key: 'stop-watch',
          title: 'ストップウォッチ'
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
.intro-text {
  font-size: 10px;
}
@media only screen and (min-width: 651px) {
  .intro-text {
    font-size: 16px;
  }
}
</style>
