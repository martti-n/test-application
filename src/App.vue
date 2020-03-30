<template>
  <div class="app" :class="mode">
    <app-header :mode="mode" @toggle="toggle"/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  
  export default {
    name: 'app',
    components: {
      'app-header': Header
     
    },
    data() {
      return {
        mode: 'light'
      }
    },
    watch: {
      mode(newMode){
        localStorage.mode = JSON.stringify(newMode)
      }
    },
    methods: {
      toggle() {
        if(this.mode === 'dark') {
          this.mode = 'light'
        } else {
          this.mode = 'dark'
        }
      }
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .app {
    height: 100vh;
    width: auto;
    background: #fff;
    color:#15202b;
    transition: background 0.3s ease-in-out;
    overflow:auto;
  }

  .dark {
    background: #192734;
    color: #f3f3f3;
  }
  
  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .dark .input label {
    color: #f3f3f3;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .dark .input input {
    border: 1px solid #f3f3f3;
    background-color: #192734;
    color: #f3f3f3;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #15202b;
    background-color: #eee;
  }

  .dark .input input:focus {
    border: 1px solid #f3f3f3;
    background-color: #1e2f3f;
  }

  .submit button {
    border: 1px solid #15202b;
    color: #15202b;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .dark .submit button {
    border: 1px solid #f3f3f3;
    background-color: #15202b;
    color: #f3f3f3;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #192734;
    color: #f3f3f3;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }

  .dark .submit button[disabled],
  .dark .submit button[disabled]:hover,
  .dark .submit button[disabled]:active {
    background-color: #15202b;
  }

</style>