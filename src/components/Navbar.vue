<template>
  <v-card class="mx-auto overflow-hidden" tile flat>
    <v-app-bar
      app
      flat
      class="blue darken-1 white--text"
    >
      <v-app-bar-nav-icon
        v-on:click="drawer = !drawer"
        class="white--text"
      >
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <span >Logo</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <Login v-bind:textColor="`white--text`"/>
      
      <Registration v-bind:text-color="`white--text`"/>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="grey darken-4 overflow-hidden"
      
    >
      <v-list
        rounded
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="text-center"
            >
              <v-avatar size="100">
                <img src="/avatar5.png" alt="">
              </v-avatar>
              <p class="white--text heading mt-1">
                Jepm16
              </p>
            </v-col>
          </v-row>
        </v-container>
        <v-divider color="white"></v-divider>

        <v-list-item
          v-for="link in links"
          :key="link.label"
          class="mt-3"
          router
          :to="link.route"
          link
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">{{ link.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
  </v-card>
</template>

<script>

import Login from './auth/Login'
import Registration from './auth/Register'

export default {
  name: "Navbar",
  components: {
    Login,
    Registration
  },
  data() {
    return {
      drawer: true,
      links: [
        { label: "Dashboard", icon: 'mdi-tablet-dashboard', route: '/' },
        { label: "Users", icon: 'mdi-account', route: '/users' },
        { label: "Projects", icon: 'mdi-folder', route: '/projects' },
        { label: "Services", icon: 'mdi-briefcase', route: '/services' },
        { label: "About Us", icon: 'mdi-information', route: '/about-us' },
        { label: "Setting", icon: 'mdi-cogs', route: '/settings' },
      ]
    }
  }

}
</script>

<style>


</style>