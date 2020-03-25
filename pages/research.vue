<template>
  <v-container>
    <Header title="あしあと - Research" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          このページでは私の<span class="font--primary">研究</span
          >を紹介します．
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in items" :key="item.title" md="6" sm="6" cols="12">
        <research-video :title="item.title" :src="item.src" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from '~/components/Header.vue'
import TitleImage from '~/components/TitleImage.vue'
import ResearchVideo from '~/components/research/ResearchVideo.vue'
export default {
  components: {
    Header,
    TitleImage,
    ResearchVideo
  },
  data() {
    return {
      items: [
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
