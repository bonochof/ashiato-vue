<template>
  <v-card-text>
    <vue-good-table
      class="award-table"
      :columns="columns"
      :rows="rows"
      :fixed-header="true"
      :pagination-options="{
        enabled: true,
        perPageDropdown: [10]
      }"
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
          label: '年月日',
          field: 'date',
          type: 'string',
          thClass: 'text-center',
          tdClass: 'text-left'
        },
        {
          label: '内容',
          field: 'content',
          type: 'string',
          html: true,
          thClass: 'text-center',
          tdClass: 'text-left'
        }
      ],
      rows: [
        {
          date: '2021.09.03-05',
          content:
            '<b>日本認知科学会 第38回大会</b><br>口頭発表（オンライン）．'
        },
        {
          date: '2021.06.08-11',
          content:
            '<b>第35回 人工知能学会全国大会</b><br>口頭発表（オンライン）．'
        },
        {
          date: '2021.03.17-05.28',
          content:
            '<b>toioの「Do!コン」</b><br>キューブ型ロボットtoioとビジュアルプログラミングtoio Doを使った作品コンテスト．第一次審査（アイデア公募），第二次審査（作品応募）を通過して，最終審査会で<span style="color:maroon;font-weight:bold">審査員特別賞</span>を受賞．受賞した作品は<a href="https://protopedia.net/prototype/2249" target="_blank">こちら</a>．審査の様子は<a href="https://www.youtube.com/watch?v=cExEaZXYN9M&t=5262" target="_blank">こちら</a>．'
        },
        {
          date: '2021.03.09-10',
          content:
            '<b>HAIシンポジウム2021</b><br>口頭発表（オンライン）．<span style="color:maroon;font-weight:bold">Student Encouragement Award</span>を受賞．'
        },
        {
          date: '2020.12.03',
          content:
            '<b>ロボットやろうぜ！ - toio & Unity 作品動画コンテスト -</b><br>YouTubeに投稿した動画が<span style="color:maroon;font-weight:bold">審査員特別賞</span>を受賞．受賞した動画は<a href="https://youtu.be/K_u8gzbbgoA" target="_blank">こちら</a>．'
        },
        {
          date: '2020.11.07',
          content:
            '<b>第3回 静岡テックプラングランプリ</b><br>HAI-NE（ハイネ）チームで出場．<span style="color:maroon;font-weight:bold">最優秀賞</span>（賞金30万円），<span style="color:maroon;font-weight:bold">ヤマハ発動機賞</span>（賞金10万円），<span style="color:maroon;font-weight:bold">浜松いわた信用金庫賞</span>（賞金10万円）のトリプル受賞．記事は<a href="https://www.inf.shizuoka.ac.jp/news/detail.html?CN=154496" target="_blank">こちら</a>．'
        },
        {
          date: '2020.10.17-18',
          content:
            '<b>ヒューマンインタフェースサイバーコロキウム</b><br>口頭発表（オンライン）．<span style="color:maroon;font-weight:bold">優秀発表賞</span>を受賞．'
        },
        {
          date: '2020.09.17-19',
          content:
            '<b>日本認知科学会 第37回大会</b><br>ポスター発表（オンライン）．'
        },
        {
          date: '2020.06.09-12',
          content:
            '<b>第34回 人工知能学会全国大会</b><br>ポスター発表（オンライン）．'
        },
        {
          date: '2020.03.06-07',
          content:
            '<b>HAIシンポジウム2020</b><br>口頭発表（新型コロナウイルスの影響で本大会は中止，有志によるオンライン発表会で発表）．'
        },
        {
          date: '2020.02.29-03.01',
          content:
            '<b>第9回 サイエンス・インカレ</b><br>ファイナリストとして口頭発表（新型コロナウイルスの影響で本大会は中止，有志によるオンライン発表会で発表）．'
        },
        {
          date: '2019.12.12',
          content:
            '<b>成績優秀者 表彰式</b><br>静岡大学における<span style="color:maroon;font-weight:bold">成績優秀者賞</span>を受賞し，後期授業料が全額免除．記事は<a href="https://www.shizuoka.ac.jp/news/detail.html?CN=6136" target="_blank">こちら</a>．'
        },
        {
          date: '2019.10.06-10',
          content: '<b>HAI2019</b><br>国際会議にて口頭発表及びポスター発表．'
        },
        {
          date: '2019.08.21',
          content:
            '<b>Hack U 2019 NAGOYA</b><br>Yahoo!JAPAN主催の学生ハッカソンに参加．'
        },
        {
          date: '2019.03.02-03',
          content:
            '<b>第8回 サイエンス・インカレ</b><br>ファイナリストとして口頭発表．<span style="color:maroon;font-weight:bold">審査員特別賞</span>（賞金5万円）を受賞．記事は<a href="http://www.inf.shizuoka.ac.jp/news/detail.html?CN=154274" target="_blank">こちら</a>．'
        },
        {
          date: '2018.12.15',
          content:
            '<b>地域づくりin静岡～アプリで実現する地方創生～ ハッカソン</b><br>静岡大学にてハッカソンに参加．<span style="color:maroon;font-weight:bold">審査員特別賞</span>を受賞．記事は<a href="http://www.inf.shizuoka.ac.jp/news/detail.html?CN=154258" target="_blank">こちら</a>．'
        },
        {
          date: '2018.09.29',
          content:
            '<b>地域づくりin静岡～アプリで実現する地方創生～ アイデアソン</b><br>静岡大学にてアイデアソンに参加．<span style="color:maroon;font-weight:bold">ユニーク・アイデア賞</span>を受賞．記事は<a href="http://www.inf.shizuoka.ac.jp/news/detail.html?CN=154235" target="_blank">こちら</a>．'
        },
        {
          date: '2018.03.16',
          content:
            '<b>松江高専 卒業式</b></br><span style="color:maroon;font-weight:bold">電気情報学会賞</span>，<span style="color:maroon;font-weight:bold">功労賞</span>，<span style="color:maroon;font-weight:bold">優秀成績賞</span>，及び<span style="color:maroon;font-weight:bold">優秀卒業学生表彰</span>．'
        },
        {
          date: '2018.03.02-03',
          content:
            '<b>第39回 ゲーム情報学研究会</b><br>東京大学にて口頭発表．<span style="color:maroon;font-weight:bold">若手奨励賞</span>を受賞．記事は<a href="http://www.matsue-ct.jp/it/index.php/48-topics/topics2017b/311-topics20180327" target="_blank">こちら</a>．'
        },
        {
          date: '2017.03.25',
          content:
            '<b>第2回 スモウルビー・プログラミング甲子園 トークセッション</b><br>まつもとゆきひろさん，池澤あやかさんとのトークセッションに参加．'
        },
        {
          date: '2017.01.06-08',
          content:
            '<b>第58回 プログラミング・シンポジウム</b><br>ラフォーレ倶楽部伊東にてポスター発表．'
        },
        {
          date: '2016.11.26-27',
          content:
            '<b>RESAS-APIでチャレンジ！島根の地方創生ハッカソン</b><br>RESAS-APIを用いたハッカソンに参加．機械学習に触れる．'
        },
        {
          date: '2016.09.24',
          content:
            '<b>オープンソースカンファレンス2016 Shimane</b><br>学生ゾーン展示ブースにて個人出展及び団体出展．'
        },
        {
          date: '2016.09.17',
          content:
            '<b>スモウルビー・プログラミング甲子園 体験セミナー</b><br>松江オープンソースラボにて講演．'
        },
        {
          date: '2016.09.10-11',
          content:
            '<b>ひやおろしGO ハッカソン</b><br>古民家「風神坊」にて開催のRailsを用いたハッカソンに参加．'
        },
        {
          date: '2016.08.29-09.09',
          content:
            '<b>NaCl インターンシップ</b><br>ネットワーク応用通信研究所のインターンシップに参加．'
        },
        {
          date: '2016.08.21',
          content:
            '<b>第51回 全国高専大会</b><br>100m平泳ぎ1位，200m平泳ぎ1位．100m平泳ぎ3年連続優勝により<span style="color:maroon;font-weight:bold">全国高等専門学校体育大会特別表彰</span>．'
        },
        {
          date: '2016.03.26',
          content:
            '<b>第1回 スモウルビー・プログラミング甲子園</b><br>決勝大会に出場し，<span style="color:maroon;font-weight:bold">優勝</span>．記事は<a href="https://www.matsue-ct.jp/it/index.php/44-topics/topics2015b/277-topics20160327" target="_blank">こちら</a>．'
        },
        {
          date: '2016.02.29-03.04',
          content:
            '<b>Ruby合宿 2016春</b><br>Arduinoを用いたゲームを開発し，発表．'
        },
        {
          date: '2016.02.21',
          content:
            '<b>第164回 中国室内水泳競技大会</b><br>高校最後の水泳大会．<span style="color:maroon;font-weight:bold">優秀選手賞</span>を受賞．'
        },
        {
          date: '2016.01.11',
          content:
            '<b>松江市 選手表彰式</b><br>松江市における水泳の<span style="color:maroon;font-weight:bold">優秀選手賞</span>を受賞．'
        },
        {
          date: '2015.08.30',
          content:
            '<b>第50回 全国高専大会</b><br>100m平泳ぎ1位，200m平泳ぎ1位．'
        },
        {
          date: '2015.07.12',
          content:
            '<b>平成27年度 島根県選手権水泳競技大会</b><br>100m平泳ぎ，及び200m平泳ぎで県選手権（県内1位）を獲得．記事は<a href="http://shimane-suiren.jp/publics/index/1/detail=1/b_id=5/r_id=129#block5-129" target="_blank">こちら</a>．'
        },
        {
          date: '2014.08.24',
          content:
            '<b>第49回 全国高専大会</b><br>100m平泳ぎ1位，200m平泳ぎ2位．'
        },
        {
          date: '2014.07.13',
          content:
            '<b>平成26年度 島根県選手権水泳競技大会</b><br>100m平泳ぎで県選手権（県内1位）を獲得．記事は<a href="http://shimane-suiren.jp/publics/index/1/detail=1/b_id=5/r_id=90#block5-90" target="_blank">こちら</a>．'
        },
        {
          date: '2012.11.28',
          content:
            '<b>しまね調べ学習プレゼンテーションコンテスト</b><br>中学校代表で口頭発表し，<span style="color:maroon;font-weight:bold">優秀賞</span>を受賞．'
        },
        {
          date: '2011.09.02',
          content:
            '<b>平成23年度 少年の主張 松江大会</b><br>中学校代表で口頭発表し，<span style="color:maroon;font-weight:bold">優秀賞</span>を受賞．'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.award-table ::v-deep .vgt-table {
  font-size: 10px;
}
@media only screen and (min-width: 651px) {
  .award-table ::v-deep .vgt-table {
    font-size: 16px;
  }
}
</style>
