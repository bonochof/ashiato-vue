<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-home',
          color: 'grey darken-3',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          color: 'grey darken-3',
          title: 'Profile',
          to: '/profile'
        },
        {
          icon: 'mdi-text-box-search-outline',
          color: 'grey darken-3',
          title: 'Research',
          to: '/research'
        },
        {
          icon: 'mdi-lightbulb-on',
          color: 'grey darken-3',
          title: 'Products',
          to: '/products'
        },
        {
          icon: 'mdi-gamepad-variant',
          color: 'grey darken-3',
          title: 'Games',
          to: '/games'
        },
        {
          icon: 'mdi-movie',
          color: 'grey darken-3',
          title: 'Videos',
          to: '/videos'
        },
        {
          icon: 'mdi-toolbox',
          color: 'grey darken-3',
          title: 'Tools',
          to: '/tools'
        },
        {
          icon: 'mdi-link-variant',
          color: 'grey darken-3',
          title: 'Links',
          to: '/links'
        }
      ]
    }
  }
}
</script>
