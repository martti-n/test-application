<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const loginData = {
          email: this.email,
          password: this.password
        }
        
        axios.post('https://reqres.in/api/login', loginData)
        .then(res => {
          const token = res.data.token;
          localStorage.token = token
          this.$router.push('/listUsers')
        })
        .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>
  
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .dark .signin-form {
    background: #15202b;
    border:none;
    box-shadow: none;
  }

</style>
