<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-on=" on "
        :class="textColor"
        text
      >
        <span>LOGIN</span>  
      </v-btn>
    </template>
    <v-card
    class="grey lighten-4"
    >
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
        >
          <v-text-field
            v-model="username"
            :counter='50'
            :rules="usernameRules"
            label="Username/Email"
            prepend-icon="mdi-shield-check"
            type="text"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="password"
            :counter="20"
            :rules="passwordRules"
            label="Password"
            prepend-icon="mdi-key"
            type="password"
            required
          >
          </v-text-field>
          <div class="d-flex justify-end my-4">
            <v-btn v-on:click="submit" text class="success">Login</v-btn>
          </div>
          
        </v-form>

        <v-divider></v-divider>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <span>Already have an acount? </span>
        <Register v-bind:textColor="`grey--text`" v-on:close-dialog=" dialog = false"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapActions } from 'vuex'
import Register from './Register'

export default {
  name: 'Login',
  props: [
    'textColor'
  ],
  data() {
    return {
      dialog: false,
      lazy: false,
      valid: true,
      username: '',
      password: '',
      usernameRules: [
        v => !!v || 'Username is reqired',
        v => v.length <= 50 || 'Username must be less than 50 char'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 50 || 'Password must be less than 20 char'
      ]
    }
  },
  components: {
    Register,
  },
  methods: {
    ...mapActions(['login']),
    async submit(e) {
      e.preventDefault()
      if(this.$refs.form.validate()){
        const user = {
          username: this.username,
          password: this.password
        }
        const res = await this.login(user)
        console.log(res)
        
      }
    }
  }

}
</script>

<style>

</style>