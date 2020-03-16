<template>
  <v-layout>
    <Header title="あしあと - Tools" />
    <v-flex class="text-center">
      <v-row justify="center">
        <v-col cols="6">
          <v-img width="600" class="img-title" src="/images/title.png" />
          <div>
            雑多な<span class="font--primary">ツール</span
            >を置くためのページです．
          </div>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.font--primary {
  color: #d2691e;
}
</style>
