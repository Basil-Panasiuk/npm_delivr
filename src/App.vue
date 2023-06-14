<template>
  <div id="app">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-data-table td {
  max-width: 200px;
}

.f-12 {
  font-size: 12px;
}

.pointer {
  cursor: pointer;
}
</style>
