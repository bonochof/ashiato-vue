<template>
  <v-container>
    <Header title="高田亮介のあしあと - Products" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          このページでは試作品を含めた<span class="font--primary"
            >プロダクト</span
          >を紹介します．
        </div>
      </v-col>
    </v-row>
    <v-card>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.key"
          lg="4"
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
          key: 'lifegame',
          title: "Conway's Game of Life",
          link: './products/lifegame/index.html',
          src: '/images/products/lifegame.png',
          text: 'ブラウザで動くライフゲーム．'
        },
        {
          key: 'tea',
          title: 'お茶シミュレータ',
          link: './products/tea-simulation/index.html',
          src: '/images/products/tea.png',
          text: 'お茶が飲みやすい温度になるまでの時間を求めるシミュレータ．'
        },
        {
          key: 'p2p-chat',
          title: 'P2P Chat',
          link: './products/p2p-chat/index.html',
          src: '/images/products/p2p-chat.png',
          text: 'Peer to Peerで通信を行うチャットシステム．'
        },
        {
          key: 'zundoko',
          title: 'ズンドコキヨシプログラム',
          link: './products/zundoko/index.html',
          src: '/images/products/zundoko.png',
          text:
            '「ズン」と「ドコ」をランダム生成し，「ズン ズン ズン ズン ドコ」と並んだら「キヨシ！」を生成するプログラム．音声付き．'
        },
        {
          key: 'ginrummy',
          title: 'GinRummy InfluenceMap',
          link: './products/ginrummy-influencemap/index.html',
          src: '/images/products/ginrummy.png',
          text: 'トランプゲーム「ジンラミー」の影響マップ．'
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
