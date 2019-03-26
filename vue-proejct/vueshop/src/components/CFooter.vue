<template>
  <v-footer dark height="auto">
    <v-flex xs12>
      <v-card flat tile class="secondary darken-1 white--text text-xs-center">

        <!-- menu icon media social -->
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <!-- deskripsi aplikasi -->
        <v-card-text v-if="isHome" class="white--text pt-0">
          Lorem ipsum sit dolor amet ...
        </v-card-text>

        <v-layout justify-center row wrap>
          <!-- link menu halaman aplikasi -->
          <v-btn v-for="link in links" :key="link" color="white" flat round>
            {{ link }}
          </v-btn>

          <!-- teks copyright -->
          <v-flex secondary darken-2 py-3 text-xs-center white--text xs12>
            &copy;2018 — Vueshop powered by <strong>Vuetify</strong>
          </v-flex>
        </v-layout>

      </v-card>
    </v-flex>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      // variabel icon social media yang ingin ditampilkan
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      // variabel link halaman yangingin ditampilkan
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    }),
  }
</script>
