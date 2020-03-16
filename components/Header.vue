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
  props: ['title'],
  data() {
    return {
      clipped: false,
      drawer: false,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-home',
          color: 'red lighten-1',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account',
          color: 'green',
          title: 'Profile',
          to: '/profile'
        },
        {
          icon: 'mdi-toolbox',
          color: 'purple darken-1',
          title: 'Tools',
          to: '/tools'
        },
        {
          icon: 'mdi-gamepad-variant',
          color: 'blue',
          title: 'Games',
          to: '/games'
        },
        {
          icon: 'mdi-text-box-search-outline',
          color: 'grey darken-3',
          title: 'Research',
          to: '/research'
        },
        {
          icon: 'mdi-link-variant',
          color: 'green accent-3',
          title: 'Links',
          to: '/links'
        }
      ]
    }
  }
}
</script>
