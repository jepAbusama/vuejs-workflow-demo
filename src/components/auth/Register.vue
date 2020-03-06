<template>
  <v-dialog
    v-model="registerDialog"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        text
        :class="textColor"
        v-on="on"
        v-on:click="openDialog"
      >
        <span>REGISTER</span>
        
      </v-btn>
    </template>
    <v-card tile >
      <v-toolbar
        flat
        dark
        color="primary"
      >
        <v-btn 
          icon
          class="write--text"
          v-on:click="registerDialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer></v-spacer>      
        <v-btn text class="success" v-on:click="submit">
          Save
        </v-btn>
      </v-toolbar>
      <v-card
        width="600"
        class="mx-auto mt-5"
      >
        <v-card-title>Register</v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
          >
            <v-row>
              <v-col>
                <v-text-field
                  v-model="firstname"
                  label="Firstname"
                  type="text"
                  prepend-icon=""
                  :counter="50"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="lastname"
                  label="Lastname"
                  type="text"
                  prepend-icon=""
                  :counter="50"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
            <v-divider class="my-5"></v-divider>

            <v-text-field
              v-model="username"
              label="Username"
              type="text"
              prepend-icon=""
              :counter="20"
              :rules="usernameRules"
              required
            >
            </v-text-field>

            <v-text-field
              v-model="email"
              label="Email"
              type="text"
              prepend-icon=""
              :counter="50"
              :rules="emailRules"
              required
            >
            </v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              prepend-icon=""
              :counter="20"
              :rules="passwordRules"
              required
            > 
            </v-text-field>

            <v-text-field
              v-model="rePassword"
              label="Confirm Password"
              type="password"
              prepend-icon=""
              :counter="20"
              :rules="rePasswordRules"
            >
            </v-text-field>

            <div class="d-flex justify-end my-4">
              
            </div>
            
          </v-form>
          <v-divider></v-divider>
        </v-card-text>
        
        <v-card-actions class="d-flex justify-center">
         <span>Already have an acount?</span>
         <Login v-bind:textColor="loginColor"/>
        </v-card-actions>
      </v-card>
    </v-card>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

  </v-dialog>
</template>

<script>

import { mapActions } from 'vuex'
import Login from './Login'

export default {
  name: 'Register',
  props: [
    "textColor"
  ],
  components: {
    Login
  },
  data() {
    return {
      loginColor: 'red--text',
      registerDialog: false,
      valid: true,
      lazy: false,
      overlay: false,
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      rePassword: '',
      nameRules: [
        v => !!v || "Firstname and Lastname in required",
      ],
      usernameRules: [
        v => !!v || "Username is required"
      ],
      emailRules: [
        v => !!v || "Email is required",
        v => /.+@.+\..+./.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      rePasswordRules: [
        v => v === this.password || 'Comfirm password must be the same with password'
      ]
    }
  },
  
  methods: {
    ...mapActions(['register']),
    submit(e) {
      e.preventDefault()
      if(this.$refs.form.validate()) {
        const newUser = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        }
        this.register(newUser)
        this.overlay = !this.overlay
      }
    },
    openDialog() {
      this.registerDialog = !this.registerDialog
      this.$emit('close-dialog')
    }
  },
  watch: {
    overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 3000)
      }
  }
}
</script>

<style>

</style>