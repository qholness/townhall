<template>
  <v-app>
    <v-header>
      <title>{{ appName }}</title>
    </v-header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
const appName = import.meta.env.VITE_APP_TITLE
</script>
