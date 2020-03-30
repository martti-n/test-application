<template>
  <header class="header">
    <Toggle :mode="mode" @toggle="$emit('toggle')"/>
    <nav>
      <ul>
        <li v-if="!token">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li>
          <router-link to="/listUsers">Users</router-link>
        </li>
        <li>
          <router-link to="/createUser">Create User</router-link>
        </li>
        <li>
          <a href="" @click.prevent="logout()">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import Toggle from './Toggle.vue'

export default {
  props: ['mode'],
  components: {
    Toggle
  },
  data() {
      return {
        token: localStorage.token
      }
    },
    methods: {
      logout() {
        if(localStorage.token) {
          if(confirm("Are you sure?")) {
          localStorage.clear();
          this.$router.push('/signin')
          }
        }
      }
    }
  } 
</script>
<style scoped>
  .header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background: #f3f3f3;
    padding: 0 20px;
    transition: background 0.3s ease-in-out;
  }

  .dark .header {
    background: #15202b;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: #15202b;
    font-weight: 600;
  }

  .dark li a {
    color: #f3f3f3;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #15202b;
    border-bottom: 2px solid #15202b;
  }

  .dark li a:hover,
  .dark li a:active,
  .dark li a.router-link-active {
    color: #f3f3f3;
    border-bottom:2px solid #f3f3f3
  }
</style>