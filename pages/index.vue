<template>
  <v-layout>
    <Header title="あしあと - Home" />
    <v-flex class="text-center">
      <v-row justify="end">
        <v-col cols="6">
          <v-img width="600" class="img-title" src="/images/title.png" />
          <div>
            <span class="font--primary">研究者</span>を目指す<span
              class="font--primary"
              >情報系</span
            >の<span class="font--primary">学生</span>が気まぐれで<span
              class="font--primary"
              >あしあと</span
            >👣を残すサイトです．
          </div>
        </v-col>
        <v-col cols="3">
          <a
            class="twitter-timeline"
            data-width="250"
            data-height="400"
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
        </v-col>
      </v-row>
      <v-card>
        <v-card-title>
          更新情報（最終更新日時: {{ rows[0].date }}）
        </v-card-title>
        <v-card-text>
          <vue-good-table
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
      <v-card class="mt-2">
        <v-card-title>Github</v-card-title>
        <v-card-text>
          <a href="https://github.com/bonochof" target="_blank"
            ><v-img src="https://grass-graph.moshimo.works/images/bonochof.png"
          /></a>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import Header from '~/components/Header.vue'
export default {
  components: {
    VueGoodTable,
    Header
  },
  data() {
    return {
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
          date: '2020.02.26 14:15',
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
.img-title {
  border: solid;
}
</style>
