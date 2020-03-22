<template>
  <div>
    <p class="research--title">{{ title }}</p>
    <iframe
      width="560"
      height="315"
      :src="src"
      allow="encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
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
</style>
