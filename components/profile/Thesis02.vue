<template>
  <v-card-text>
    <v-list-item v-for="item in items" :key="item.title">
      <v-list-item-content class="text-left">
        <v-list-item-title v-text="item.title" />
        <v-list-item-subtitle
          v-for="content in item.content"
          :key="content"
          v-text="content"
        />
      </v-list-item-content>
    </v-list-item>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title:
            'Design of Cooperative Interaction between Humans and AI Creatures through Reinforcement Learning',
          content: [
            'Proceedings of the 7th International Conference on Human-Agent Interaction, pp.220-222, Oct. 2019',
            'Ryosuke TAKATA, Yugo TAKEUCHI',
            '(査読あり, ポスター発表)'
          ]
        },
        {
          title:
            'Design of Cooperative Interaction between Humans and Agents through Reinforcement Learning',
          content: [
            'Next Generation Human-Agent Interaction Workshop, Oct. 2019',
            'Ryosuke TAKATA, Yugo TAKEUCHI',
            '(査読なし, 口頭発表)'
          ]
        },
        {
          title:
            'Learning Method to Discover Secret Tricks Using Reinforcement Learning',
          content: [
            'NIT-NUU Bilateral Academic Conference, Jul. 2018',
            'Tsuyoshi HASHIMOTO, Ryosuke TAKATA',
            '(査読あり, 口頭発表)'
          ]
        }
      ]
    }
  }
}
</script>
