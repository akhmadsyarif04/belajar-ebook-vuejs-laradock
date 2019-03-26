<template>
<!-- toolbar vuetify dengan warna primary -->
<v-toolbar dark color="primary">
  <!-- header bagian kiri -->
  <v-toolbar-side-icon v-if="isHome" @click="setSideBar(!sideBar)"></v-toolbar-side-icon>
  <v-btn v-if="!isHome" icon @click="$router.go(-1)">
    <v-icon>arrow_back</v-icon>
  </v-btn>

  <!-- header bagian tengah -->
  <v-toolbar-title class="white--text">{{ appName }}</v-toolbar-title>

  <!-- separator supaya header bagaian kanan posisinya rata kanan -->
  <v-spacer></v-spacer>

  <!-- header bagian kanan -->
  <v-btn @click="cart()" icon>
    <v-badge left overlap color="orange">
      <span slot="badge" v-if="countCart>0">{{ countCart }}</span>
      <v-icon>shopping_cart</v-icon>
    </v-badge>
  </v-btn>

  <!-- kolom pencarian di bawah header -->
  <v-text-field v-if="isHome" @click="search()" slot="extension" hide-details append-icon="mic" flat label="Search" prepend-inner-icon="search" solo-inverted></v-text-field>
</v-toolbar>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'c-header',
  methods: {
    ...mapActions({
      setSideBar: 'setSideBar',
      setStatusDialog: 'dialog/setStatus',
      setComponent: 'dialog/setComponent', // <= ini
    }),
    search() {
      this.setStatusDialog(true)
      this.setComponent('search') // <= ini
      this.setSideBar(false)
    },
    cart() {
      this.setStatusDialog(true)
      this.setComponent('cart') // <= ini
      this.setSideBar(false)
    }
  },
  computed: {
    ...mapGetters({
      sideBar: 'sideBar',
      countCart: 'cart/count',
    }),
    isHome() {
      return (this.$route.path === '/')
    },
  }
}
</script>
