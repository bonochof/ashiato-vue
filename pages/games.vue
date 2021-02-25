<template>
  <v-container>
    <Header title="高田亮介のあしあと - Games" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          このページでは<span class="font--primary">自作ゲーム</span
          >を紹介します．
        </div>
      </v-col>
    </v-row>
    <v-card>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.key"
          lg="3"
          md="4"
          sm="6"
          cols="12"
        >
          <v-card-title>{{ item.title }}</v-card-title>
          <a :href="item.link" target="_blank">
            <v-img :src="item.src" class="img-game" />
          </a>
          <v-card-text class="text-left">{{ item.text }}</v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Header from '~/components/Header.vue'
import TitleImage from '~/components/TitleImage.vue'
export default {
  components: {
    Header,
    TitleImage
  },
  data() {
    return {
      items: [
        {
          key: 'othello',
          title: 'Minimax探索オセロ',
          link: './games/minimax-othello/index.html',
          src: '/images/games/othello.PNG',
          text:
            '高専4年(19歳)のときに授業で作成したオセロをDXOpalに移植した．Web上で遊べる．Minimax探索するコンピュータを実装している．'
        },
        {
          key: 'apple',
          title: 'りんご拾い',
          link: './games/apple-catch/index.html',
          src: '/images/games/apple.PNG',
          text:
            'DXOpalを構ってみた．るびまを参考にして作ったゲーム．Web上で遊べる．'
        },
        {
          key: 'messtory',
          title: '♀tory (メストーリー)',
          link: 'http://ux.getuploader.com/ashiato01/download/2/messtory1.zip',
          src: '/images/games/messtory.PNG',
          text:
            '高専1年(16歳)のときに作成した初めてのゲーム．アクションゲームを作りたかったが当時はCUIものしか作れなかったため人型によく似た「♀」を主人公に見立てた．ソースコードがひどい．'
        },
        {
          key: 'messtory2',
          title: '♀tory改 (メストーリー改)',
          link: 'http://ux.getuploader.com/ashiato01/download/3/messtory2.zip',
          src: '/images/games/messtory2.PNG',
          text:
            '高専2年(17歳)のときに作成したゲーム．GUIを学び，♀toryの続編を作った．DXライブラリを使用した．'
        },
        {
          key: 'kbdefence',
          title: 'KeaBoarDefence (キーボーディフェンス)',
          link:
            'http://ux.getuploader.com/ashiato01/download/4/KeaBoarDefence.zip',
          src: '/images/games/kbdefence.PNG',
          text:
            '高専3年(18歳)のときに作成したゲーム．ディフェンスゲーム(自分の城を守りつつ相手の城を攻めるタイプのゲーム)を作りたいと思い，キーボードの英字キーを兵士に見立てたディフェンスゲームを作成した．DXライブラリを使用した．'
        },
        {
          key: 'tm',
          title: 'THREE.MAZE',
          link: '',
          src: '/images/games/tm.png',
          text:
            '大学3年(21歳)のときに作成したゲーム．3次元空間上で対戦可能な迷路ゲーム．'
        },
        {
          key: 'hiyoko',
          title: 'ひよこ流し',
          link: 'https://farewell-party.herokuapp.com/',
          src: '/images/games/hiyoko.png',
          text:
            '大学4年(22歳)のときに作成したスマホゲーム．Web上で遊べる．水泳部の追いコンの為に作った．'
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
.img-game {
  border: black solid;
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
