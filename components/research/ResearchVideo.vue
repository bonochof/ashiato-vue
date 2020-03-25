<template>
  <v-card>
    <v-card-title class="research--title">{{ title }}</v-card-title>
    <v-card-subtitle class="reserch--movie-wrap">
      <iframe
        class="reserch--movie"
        :src="src"
        allow="encrypted-media"
        allowfullscreen
      />
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.research--title {
  border-style: double;
  font-size: 20px;
  font-family: 'CRPＣ＆Ｇれいしっく', fantasy;
}
.reserch--movie-wrap {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
}
.reserch--movie {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
