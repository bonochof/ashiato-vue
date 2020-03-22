<template>
  <div>
    <v-row>
      <v-img :src="imgSrc" />
    </v-row>
    <v-row>
      <v-btn @click="prev()">Prev</v-btn>
      <v-btn @click="next()">Next</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      items: [
        'http://www.e-subaru.jp/j24simada1.jpg',
        'http://www.e-subaru.jp/j29mituke1.jpg',
        'http://www.e-subaru.jp/j27kakegawa1.jpg',
        'http://www.e-subaru.jp/j28fukuroi1.jpg',
        'http://www.e-subaru.jp/j30hamamatu1.jpg',
        'http://www.e-subaru.jp/j31maisaka1.jpg',
        'http://www.e-subaru.jp/j25kanaya1.jpg',
        'http://www.e-subaru.jp/j26nissaka1.jpg',
        'http://www.e-subaru.jp/j23fujieda1.jpg',
        'http://www.e-subaru.jp/j22okabe1.jpg',
        'http://www.e-subaru.jp/j21mariko1.jpg',
        'http://www.e-subaru.jp/j20fuchu1.jpg',
        'http://www.e-subaru.jp/j19ejiri1.jpg',
        'http://www.e-subaru.jp/j18okitu1.jpg',
        'http://www.e-subaru.jp/j55keisi1.jpg',
        'http://www.e-subaru.jp/j17yui1.jpg',
        'http://www.e-subaru.jp/j54ootu1.jpg',
        'http://www.e-subaru.jp/j52isibe2.jpg',
        'http://www.e-subaru.jp/j51minakuti1.jpg',
        'http://www.e-subaru.jp/j53kusatu1.jpg',
        'http://www.e-subaru.jp/j49sakanosita1.jpg',
        'http://www.e-subaru.jp/j48seki1.jpg',
        'http://www.e-subaru.jp/j50tutiyama1.jpg',
        'http://www.e-subaru.jp/j47kameyama1.jpg',
        'http://www.e-subaru.jp/j46syouno1.jpg',
        'http://www.e-subaru.jp/j45isiyakusi.jpg',
        'http://www.e-subaru.jp/j44yokkaiti1.jpg',
        'http://www.e-subaru.jp/j43kuwana1.jpg',
        'http://www.e-subaru.jp/j42miya1.jpg',
        'http://www.e-subaru.jp/j41narumi.jpg',
        'http://www.e-subaru.jp/j40tirifu1.jpg',
        'http://www.e-subaru.jp/j39okazaki.jpg',
        'http://www.e-subaru.jp/j38fujikawa1.jpg',
        'http://www.e-subaru.jp/j37akasaka1.jpg',
        'http://www.e-subaru.jp/j36goyu1.jpg',
        'http://www.e-subaru.jp/j35yosida1.jpg',
        'http://www.e-subaru.jp/j34futagawa1.jpg',
        'http://www.e-subaru.jp/j33sirasuka1.jpg',
        'http://www.e-subaru.jp/j32arai1.jpg',
        'http://www.e-subaru.jp/j16kanbara2bmp.jpg',
        'http://www.e-subaru.jp/j15yosiwara1.jpg',
        'http://www.e-subaru.jp/j14hara1.jpg',
        'http://www.e-subaru.jp/j13numazu1.jpg',
        'http://www.e-subaru.jp/j12misima1.jpg',
        'http://www.e-subaru.jp/j11hakone1.jpg',
        'http://www.e-subaru.jp/j10odawara1.jpg',
        'http://www.e-subaru.jp/j9ooiso1.jpg',
        'http://www.e-subaru.jp/j3kawasaki1.jpg',
        'http://www.e-subaru.jp/j2sinagawa3.jpg',
        'http://www.e-subaru.jp/1nihonbasi142050b.jpg',
        'http://www.e-subaru.jp/j6totuka1.jpg',
        'http://www.e-subaru.jp/j8hiratuka1.jpg',
        'http://www.e-subaru.jp/j4kanagawa1.jpg',
        'http://www.e-subaru.jp/j7fujisawa1.jpg'
      ]
    }
  },
  computed: {
    imgSrc() {
      return this.items[this.index]
    }
  },
  methods: {
    prev() {
      if (this.index === 0) {
        this.index = this.items.length - 1
      } else {
        this.index -= 1
      }
    },
    next() {
      if (this.index === this.items.length - 1) {
        this.index = 0
      } else {
        this.index += 1
      }
    }
  }
}
</script>
