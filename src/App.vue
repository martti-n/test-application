<template>
  <div class="app" :class="mode">
    <app-header :mode="mode" @toggle="toggle"/>
    <transition name="slide">
      <keep-alive include="userList">
        <router-view includes="ListUsers.vue"></router-view>
      </keep-alive>
    </transition>
    
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  
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
    mounted() {
      this.mode = JSON.parse(localStorage.mode)
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

  .slide-enter-active {
    animation: slide-fade 0.4s ease-in;
  }


  @keyframes slide-fade{
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  body, html {
    margin: 0;
    font-family: 'Roboto', sans-serif;
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
    border: 1px solid rgb(133, 130, 130);
    border-radius: 5px;
  }

  .dark .input input {
    border: 1px solid #808080;
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
    background-color: #223446;
  }

  .submit button {
    border: 1px solid #15202b;
    border-radius: 6px;
    color: #15202b;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }

  .dark .submit button {
    border: 1px solid #808080;
    background-color: #15202b;
    color: #f3f3f3;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #192734;
    color: #f3f3f3;
  }

  

</style>