<template>
  <v-app>
    <v-header>
      <title>{{ appName }}</title>
      <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
    </v-header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
const appName = import.meta.env.VITE_APP_TITLE || "app"
</script>
