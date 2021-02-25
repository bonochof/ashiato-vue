<template>
  <v-container>
    <Header title="高田亮介のあしあと - Videos" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          このページでは私が制作した<span class="font--primary">動画</span
          >を紹介します．
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in items" :key="item.title" md="6" sm="6" cols="12">
        <embedded-videos :title="item.title" :src="item.src" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from '~/components/Header.vue'
import TitleImage from '~/components/TitleImage.vue'
import EmbeddedVideos from '~/components/videos/EmbeddedVideos.vue'
export default {
  components: {
    Header,
    TitleImage,
    EmbeddedVideos
  },
  data() {
    return {
      items: [
        {
          title: '缶蹴りを強化学習させてtoioに搭載してみた',
          src: 'https://www.youtube.com/embed/K_u8gzbbgoA'
        },
        {
          title: '【Unity ML-Agents】導入からサンプル学習まで',
          src: 'https://www.youtube.com/embed/ef5TA2wE92c'
        },
        {
          title:
            'Can the Mario AI discover the secret trick? (Infinite 1-Up) #1',
          src: 'https://www.youtube.com/embed/sF8uBh3f5yM'
        },
        {
          title:
            'Can the Mario AI discover the secret trick? (Infinite 1-Up) #2',
          src: 'https://www.youtube.com/embed/6HZMFxSzYIM'
        },
        {
          title:
            'Can the Mario AI discover the secret trick? (Infinite 1-Up) #3',
          src: 'https://www.youtube.com/embed/QLOQN-NZIhk'
        },
        {
          title:
            'Can the Mario AI discover the secret trick? (Infinite 1-Up) #4',
          src: 'https://www.youtube.com/embed/SkY6eophLZU'
        },
        {
          title:
            'Can the Mario AI discover the secret trick? (Infinite 1-Up) #5',
          src: 'https://www.youtube.com/embed/ORVNDisugQg'
        },
        {
          title:
            'Can the Mario AI discover the secret trick? (Infinite 1-Up) #6',
          src: 'https://www.youtube.com/embed/TTuVrxQk2Cs'
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
