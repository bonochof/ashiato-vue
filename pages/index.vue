<template>
  <v-container>
    <Header title="あしあと - Home" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          <span class="font-primary">研究者</span>を目指す<span
            class="font-primary"
            >情報系</span
          >の<span class="font-primary">学生</span>が気まぐれで<span
            class="font-primary"
            >あしあと</span
          >👣を残すサイトです．
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="9" cols="12">
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                更新情報<span class="updatedAt-text"
                  >（最終更新日時: {{ rows[0].date }}）</span
                >
              </v-card-title>
              <v-card-text>
                <vue-good-table
                  class="update-table"
                  :columns="columns"
                  :rows="rows"
                  :fixed-header="true"
                  :pagination-options="{
                    enabled: true,
                    perPageDropdown: [5, 10, 30]
                  }"
                  :sort-options="{
                    enabled: false
                  }"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mt-2">
              <v-card-title>Github</v-card-title>
              <v-card-text>
                <a href="https://github.com/bonochof" target="_blank"
                  ><v-img
                    src="https://grass-graph.moshimo.works/images/bonochof.png"
                /></a>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="twitter-col" md="3" cols="12">
        <v-card class="mt-3">
          <v-card-title>Twitter</v-card-title>
          <v-card-text>
            <a
              class="twitter-timeline"
              data-width="100%"
              :data-height="twitterTimelineHeight"
              data-theme="light"
              data-link-color="#19CF86"
              href="https://twitter.com/bonochof?ref_src=twsrc%5Etfw"
              >Tweets by bonochof</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import Header from '~/components/Header.vue'
import TitleImage from '~/components/TitleImage.vue'
import DeviceUtility from '~/plugins/DeviceUtility.js'
export default {
  components: {
    VueGoodTable,
    Header,
    TitleImage
  },
  data() {
    return {
      twitterTimelineHeight: 0,
      columns: [
        {
          label: '日時',
          field: 'date',
          type: 'date',
          dateInputFormat: 'yyyy.MM.dd HH:mm',
          dateOutputFormat: 'yyyy.MM.dd',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: '内容',
          field: 'content',
          type: 'number',
          thClass: 'text-center',
          tdClass: 'text-left'
        }
      ],
      rows: [
        {
          date: '2020.03.31 18:40',
          content: 'Vue.js版に完全移行'
        },
        {
          date: '2020.03.26 02:14',
          content: 'Vue.js版を公開(右上SWITCHで変更可)'
        },
        {
          date: '2020.02.26 00:00',
          content: 'サイト全体のレイアウトを変更'
        },
        {
          date: '2020.02.03 00:00',
          content: 'サイトの説明を更新'
        },
        {
          date: '2019.12.12 00:00',
          content: 'Profile更新'
        },
        {
          date: '2019.11.30 00:00',
          content: 'GitHubの草を追加'
        },
        {
          date: '2019.11.06 00:00',
          content: 'デザイン変更'
        },
        {
          date: '2019.10.28 00:00',
          content: '新ドメインに移行'
        },
        {
          date: '2019.09.20 00:00',
          content: 'Profile更新'
        },
        {
          date: '2019.08.25 00:00',
          content: 'Profile更新'
        },
        {
          date: '2019.05.17 00:00',
          content: 'ページ「Product」追加'
        },
        {
          date: '2019.03.16 00:00',
          content: 'サブタイトル変更'
        },
        {
          date: '2019.03.09 00:00',
          content: 'Profile(ポートフォリオ)更新'
        },
        {
          date: '2019.02.23 00:00',
          content: 'Minimax探索オセロ追加'
        },
        {
          date: '2019.02.20 00:00',
          content: 'ページ「Profile」追加'
        },
        {
          date: '2019.02.19 00:00',
          content: 'ページ「Note」追加'
        },
        {
          date: '2018.10.14 00:00',
          content: 'DXOpalサンプルゲーム追加'
        },
        {
          date: '2018.07.07 00:00',
          content: 'タブ文字→スペース変換ツール追加'
        },
        {
          date: '2018.06.21 00:00',
          content: 'favicon追加'
        },
        {
          date: '2018.06.18 00:00',
          content: 'ページ「Tools」追加'
        },
        {
          date: '2018.06.17 00:00',
          content: 'タイトルデザイン変更'
        },
        {
          date: '2018.03.15 00:00',
          content: 'ページ「Blog」追加'
        },
        {
          date: '2017.12.22 00:00',
          content: 'YouTube動画#6を追加'
        },
        {
          date: '2017.12.20 00:00',
          content: 'YouTubeチャンネルのリンクを追加'
        },
        {
          date: '2017.12.19 00:00',
          content: 'YouTube動画#5を追加'
        },
        {
          date: '2017.12.16 00:00',
          content: 'YouTube動画#4を追加'
        },
        {
          date: '2017.12.15 00:00',
          content: 'YouTube動画#3を追加'
        },
        {
          date: '2017.12.10 00:00',
          content: 'YouTube動画#2を追加'
        },
        {
          date: '2017.12.09 00:00',
          content: 'ページ「Research」追加'
        },
        {
          date: '2017.12.06 00:00',
          content: 'Gamesに写真を追加'
        },
        {
          date: '2017.12.06 00:00',
          content: 'GitHubのリンクを追加'
        },
        {
          date: '2017.07.01 00:00',
          content: 'ページ「Games」追加'
        },
        {
          date: '2017.06.30 00:00',
          content: 'ページ「Links」追加'
        },
        {
          date: '2017.06.30 00:00',
          content: 'サイト開設'
        }
      ]
    }
  },
  created() {
    if (DeviceUtility.isSp()) {
      this.twitterTimelineHeight = 400
    } else {
      this.twitterTimelineHeight = 590
    }
  }
}
</script>

<style scoped lang="scss">
.font-primary {
  color: #d2691e;
}
.twitter-col {
  min-height: 100%;
}
.updatedAt-text {
  font-size: 14px;
}
.intro-text {
  font-size: 10px;
}
.update-table ::v-deep .vgt-table {
  font-size: 10px;
}
@media only screen and (min-width: 651px) {
  .updatedAt-text {
    font-size: 1.25rem;
  }
  .intro-text {
    font-size: 16px;
  }
  .update-table ::v-deep .vgt-table {
    font-size: 16px;
  }
}
</style>
