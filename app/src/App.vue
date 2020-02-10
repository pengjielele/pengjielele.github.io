<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ui">UI</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
ul li {
  list-style-type: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
}

.nav {
  padding: 20px 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.CodeMirror {
  height: auto !important;
}
.code {
  border: 1px solid #ddd;
  margin: 15px 0;
}
</style>
