<template>
  <div>
    <!-- bagian pertama yaitu category -->
    <v-container grid-list-md>
      <v-subheader>
        Random Category
        <v-spacer></v-spacer>
        <!-- link ke route categories yang nantinya akan kita definisikan routeing dan componentnya -->
        <router-link to="/categories">See All</router-link>
      </v-subheader>

      <v-layout row wrap>
        <!-- variabel catagories ini nantinya akan kita isi dengan data dari endpoint category -->
        <v-flex v-for="category in categories" xs6 :key="category.id">
          <v-card :to="'/category/' + category.slug">
            <!-- untuk load image supaya lebih rapi akan kita buatkan method  getImage -->
            <v-card-media :src="getImage('/categories/' + category.image)" height="150px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <!-- nama category-nya akan ditampilkan disini -->
                    <span class="title white--text text-block" v-text="category.name"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>

            <!-- icon dummy saja, nantinya kamu bisa sesuaikan  -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- bagian kedua yaitu book -->
    <v-container grid-list-md>
      <v-subheader>
        Top Books
        <v-spacer></v-spacer>
        <!-- link ke route books yang nantinya akan kita definisikan routing dan componentnya -->
        <router-link to="/books">See All</router-link>
      </v-subheader>

      <v-layout row wrap>
        <!-- data buku kita tampilkan dalam dua kolom (xs6) -->
        <v-flex v-for="(book, index) in books" xs6 :key="index">
          <v-card :to="'/book'+book.slug">
            <v-card-media :src="getImage('/books/'+book.cover)" height="150px">
              <v-container fill-height fluid pa-2>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="title white--text text-block" v-text="book.title"></span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>

            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>
<style scoped>
/* mengatur posisi judul */
.text-block {
position: absolute;
bottom: 5px;
left: 5px;
background-color: black;
padding-left: 5px;
padding-right: 5px;
opacity: 0.7;
width:100%;
}
</style>

<script>
  export default {
    data: () => ({
      categories: [], // kita definisikan sebagai array kosong
      books: [],
    }),
    methods: {
      // getImage(image) {
      //   if(image!=null && image.length>0)
      //   {
      //       // return "http://larashop-api.test/images" + image
      //       return process.env.VUE_APP_BACKEND_URL+"/images"+ image
      //
      //   }
        // default image jika tidak ditemukan ,
        // letakkan image ini pada folder /public/img di project vue
        // return "/img/unavailable.png"
      // },
    },
    created() {
      let count = 4
      // request ke endpoint category random dengan parameter count = 4
      this.axios.get('/categories/random/' + count)
        .then((response) => {
          let categories = response.data.data
          // ketika dapat datanya maka nilainya dimasukan ke dalam properti data categories
          this.categories = categories
        })
        .catch((error) => {
          let responses = error.reponse
          console.log(responses);
        })

        count = 4
        // request ke endpoint top book dengan parameter count = 8
        this.axios.get('/books/top/' + count)
        .then((response) => {
          let books = response.data.data
          this.books = books
        })
        .catch((error) => {
          let responses = error.reponse
          console.log(responses);
        })
    }
  }

// }
</script>
