export const BooksComponent = {
    data() {
      return {
        books: [{
            id: 99,
            title: 'C++ High Performance',
            description: 'Write code that scales across CPU registers, multi-core, and machine clusters',
            authors: 'Viktor Sehr, Björn Andrist',
            publish_year: 2018,
            price: 100000,
            image: '../spider1.jpg'
          },
          {
            id: 100,
            title: 'Mastering Linux Security and Hardening',
            description: 'A comprehensive guide to mastering the art of preventing your Linux system from getting compromised',
            authors: 'Donald A. Tevault',
            publish_year: 2018,
            price: 125000,
            image: '../spider2.jpg'
            },
            {
            id: 101,
            title: 'Mastering PostgreSQL 10',
            description: 'Master the capabilities of PostgreSQL 10 to efficiently manage and maintain your database',
            authors: 'Hans-Jürgen Schönig',
            publish_year: 2016,
            price: 90000,
            image: '../spider3.jpg'
            },
          ]
        }
      },
      computed: {
        book(){
          return this.books.filter((book) => {
            return book.id === parseInt(this.$route.params.id)
          })[0]
        }
      },
      template:
      `
      <div>
        <h1>Daftar Buku</h1>
        <ul>
          <li v-for="book of books">
            <router-link :to="'/book/'+book.id">
              {{ book.title }}
            </router-link>
          </li>
        </ul>
      </div>
      `
    }
