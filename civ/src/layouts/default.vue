<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon href="/"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>{{ appName }}</v-app-bar-title>
      <template v-slot:append>
        <v-btn elevation="0" href="/map">
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  computed: {
    appName() {
      return import.meta.env.VITE_APP_TITLE
    }
  }
}
</script>
