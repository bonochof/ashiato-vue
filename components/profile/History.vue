<template>
  <v-card-text>
    <vue-good-table
      class="history-table"
      :columns="columns"
      :rows="rows"
      :fixed-header="true"
      :sort-options="{
        enabled: false
      }"
    />
  </v-card-text>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
export default {
  components: {
    VueGoodTable
  },
  data() {
    return {
      columns: [
        {
          label: '年',
          field: 'year',
          type: 'string',
          thClass: 'text-center',
          tdClass: 'text-center'
        },
        {
          label: '内容',
          field: 'content',
          type: 'string',
          thClass: 'text-center',
          tdClass: 'text-left'
        }
      ],
      rows: [
        {
          year: '1997',
          content: '島根県松江市生まれ'
        },
        {
          year: '2004-2007',
          content: 'ロシア モスクワ日本人学校の児童'
        },
        {
          year: '2007-2010',
          content: '松江市立古志原小学校の児童'
        },
        {
          year: '2013-2018',
          content: '松江工業高等専門学校 情報工学科の学生(首席)'
        },
        {
          year: '2018-2020',
          content: '	静岡大学情報学部 情報科学科の学生(首席)'
        },
        {
          year: '2020-現在',
          content: '静岡大学 総合科学技術大学院の学生'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.history-table ::v-deep .vgt-table {
  font-size: 10px;
}
@media only screen and (min-width: 651px) {
  .history-table ::v-deep .vgt-table {
    font-size: 16px;
  }
}
</style>
