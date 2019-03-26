<template>
<v-app>
  <!-- componen header -->
  <c-header />

  <!-- componen sidebar -->
  <c-side-bar />

  <!-- konten utama -->
  <v-content>
    <v-slide-y-transition mode="out-in">
      <router-view></router-view>
    </v-slide-y-transition>
  </v-content>

  <!-- component footer -->
  <c-footer />

  <!-- component alert -->
  <c-alert />

  <!-- <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <search />
    </v-dialog> -->

  <keep-alive>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <component :is="currentComponent"></component>
    </v-dialog>
  </keep-alive>


</v-app>
</template>

<script>
import CHeader from '@/components/CHeader.vue'
import CFooter from '@/components/CFooter.vue'
import CSideBar from '@/components/CSideBar.vue'
import CAlert from '@/components/CAlert.vue'
import Register from '@/views/Register.vue'
import Cart from '@/views/Cart.vue'

import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'App',
  components: {
    CHeader,
    CFooter,
    CSideBar,
    CAlert,
    Search: () => import( /* webpackChunkName: "search" */
      '@/views/Search.vue'),
    Login: () => import( /* webpackChunkName: "login" */
      '@/views/Login.vue'), // <= ini
    Register,
    Cart,
  },
  methods: {
    ...mapActions({
      setStatusDialog: 'dialog/setStatus',
    }),
  },
  computed: {
    ...mapGetters({
      statusDialog: 'dialog/status',
      currentComponent: 'dialog/component' // <= ini
    }),
    dialog: {
      get() {
        return this.statusDialog
      },
      set(value) {
        this.setStatusDialog(value)
      }
    },
  },
}
</script>
