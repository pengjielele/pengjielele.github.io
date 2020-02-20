<template>
  <div class="page-home">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/ui">UI</router-link></li>
      <li><router-link to="/code">Code</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
