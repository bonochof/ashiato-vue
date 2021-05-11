<template>
  <v-container>
    <Header title="たかたのあしあと - Links" />
    <v-row justify="center">
      <v-col md="6" cols="12">
        <title-image />
        <div class="text-center intro-text">
          このページでは<span class="font--primary">リンク</span
          >を貼っています．
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="item in items" :key="item.key" cols="4" class="text-center">
        <a class="link" :href="item.link" target="_blank">
          <v-icon large>{{ item.icon }}</v-icon>
        </a>
      </v-col>
    </v-row>
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
          key: 'facebook',
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/ryosuke.takata.9'
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
.intro-text {
  font-size: 10px;
}
@media only screen and (min-width: 651px) {
  .intro-text {
    font-size: 16px;
  }
}
</style>
