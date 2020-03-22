<template>
  <v-layout>
    <Header title="あしあと - Research" />
    <v-flex class="text-center">
      <v-row justify="center">
        <v-col cols="6">
          <title-image />
          <div>
            このページでは私の<span class="font--primary">研究</span
            >を紹介します．
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="item in items" :key="item.title" cols="6">
          <research-video :title="item.title" :src="item.src" />
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
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
</style>
