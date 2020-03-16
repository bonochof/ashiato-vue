<template>
  <v-layout>
    <Header title="あしあと - Links" />
    <v-flex class="text-center">
      <v-row justify="center">
        <v-col cols="6">
          <title-image />
          <div>
            このページでは<span class="font--primary">リンク</span
            >を貼っています．
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col v-for="item in items" :key="item.key">
          <a class="link" :href="item.link" target="_blank">
            <v-icon large>{{ item.icon }}</v-icon>
          </a>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
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
          key: 'github',
          icon: 'mdi-github',
          link: 'https://github.com/bonochof/'
        },
        {
          key: 'twitter',
          icon: 'mdi-twitter',
          link: 'https://twitter.com/bonochof/'
        },
        {
          key: 'scrapbox',
          icon: 'mdi-alpha-s-circle',
          link: 'https://scrapbox.io/ashiato-note/'
        },
        {
          key: 'youtube',
          icon: 'mdi-youtube',
          link: 'https://www.youtube.com/channel/UCF8ViNqQffiG0WvSjP-bfNQ'
        },
        {
          key: 'cloud',
          icon: 'mdi-cloud-download',
          link: 'http://ux.getuploader.com/ashiato01/'
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
.link {
  text-decoration: none;
}
</style>
