<template>
<v-card>

  <v-toolbar dark color="primary">
    <v-btn icon dark @click.native="close">
      <v-icon>close</v-icon>
    </v-btn>
    <v-toolbar-title>Register and Start Shopping!</v-toolbar-title>
  </v-toolbar>

  <v-divider></v-divider>

  <v-container fluid>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :rules="nameRules" :counter="255" label="Name" required append-icon="person"></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required append-icon="email"></v-text-field>
      <v-text-field v-model="password" :append-icon="showPassword ? 'visibility' : 'visibility_off'" :rules="passwordRules" :type="showPassword ? 'text' : 'password'" label="Password" hint="At least 6 characters" counter @click:append="showPassword = !showPassword"></v-text-field>
      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do You agree with our Privacy Policy?" required></v-checkbox>
      <div class="text-xs-center">
        <v-btn color="primary" :disabled="!valid" @click="submit">
          submit
          <v-icon right dark>person_add</v-icon>
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </div>
    </v-form>
  </v-container>

</v-card>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  name: 'register',
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 255) || 'Name must be less than 255 characters'
      ],
      showPassword: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password required.',
        v => (v && v.length >= 6) || 'Min 6 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /([a-zA-Z0-9_]{1,})(@)([a-zA-Z0-9_]{2,}).([a-zA-Z0-9_]{2,})+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    ...mapActions({
      setAlert: 'alert/set',
      setStatusDialog: 'dialog/setStatus',
      setAuth: 'auth/set',
    }),
    close() {
      this.setStatusDialog(false)
    },
    submit() {
      if (this.$refs.form.validate()) {
        let formData = new FormData()
        formData.set('name', this.name)
        formData.set('email', this.email)
        formData.set('password', this.password)

        this.axios.post('/register', formData)
          .then((response) => {
            let data_user = response.data.data
            this.setAuth(data_user)
            this.setAlert({
              status: true,
              text: 'register success',
              type: 'success',
            })
            this.close()
          })
          .catch((error) => {
            console.log(error)
            let responses = error.response
            this.setAlert({
              status: true,
              text: responses.data.message,
              type: 'error',
            })
          })

      }
    },
    clear() {
      this.$refs.form.reset()
    }
  },
}
</script>
