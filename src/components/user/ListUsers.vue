<template>
  <div class="userList">
    <h1>Users</h1>
    <h2 style="text-align:right">Currently: {{users.length}}</h2>
    <div class="container" style="overflow:hidden">
      <div class="row" :key="user.id" v-for="user in users">
        <div class="avatar">
          <img :src="user.avatar" alt="">
        </div>
        <div class="info">
        Name: {{user.first_name}} {{user.last_name}} <br>
        e-mail: {{user.email}} 
        </div>
        <div class="btns">
          <router-link :to="{ name: 'userEdit', params: {id: user.id, first_name:user.first_name, last_name:user.last_name, email:user.email, avatar:user.avatar}}"><button class="edit">Edit</button></router-link><br>
          <button class="delete" @click="deleteUser(user.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { eventBus } from '../../main.js'


  export default {
    data () {
      return {
        users: []
      }
    },
    created () {
      
      axios.get('https://reqres.in/api/users?page=1&per_page=12')
        .then(res => {
          const users = [];
          const data = res.data.data;
          for (let user in data){
            const user = data[user]
            users.push(user)
          }
          this.users = users;
          eventBus.$on('userAdded', (newUser) => {
            this.users.push(newUser)
            console.log(this.users)
          })
        })
        .catch(error => console.log(error))
        
        
    },
    methods: {
      deleteUser(id) {
        let vm = this;
        if(confirm("This user will be deleted.")) {
        vm.users = vm.users.filter(user => user.id !== id)
        axios.delete('https://reqres.in/api/users/:id')
        .then(res =>console.log(res))
        .catch(err => console.log(err))
        }
      }
    }
  }
</script>

<style scoped>
  
  .userList {
    width: 50%;
    margin: 0 auto;
  }

  h1{
    text-align: right;
  }

  .row {
    max-width: 100%;
    display: flex;
    justify-content: center;
    background: #f3f3f3;
    margin-top: 10px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
    transition: background 0.3s ease-in-out border 0.3s;
  }

  .dark .row {
    background: #15202b;
    box-shadow: none;
    border: none;
  }

  .row:hover {
    background-color: #e2e2e2;
  }

  .dark .row:hover {
    background-color: #162431;
  }

  .avatar {
    width: 40%;
    font-size: 12px;
  }

  .info {
    width: 60%;
    align-self: center;
  }

  .btns {
    align-items: center;
    margin: auto 0px;
  }

  .edit,
  .delete {
    width: 75px;
    border: 1px solid #15202b;
    border-radius: 5px;
    color: #15202b;
    padding: 5px 10px;
    font: inherit;
    cursor: pointer;
    margin-top: 2px;
  }

  .dark .edit,
  .dark .delete {
    border: 1px solid #f3f3f352;
    border-radius: 5px;
    color: #f3f3f3;
    background-color: #17242f;
  }

  .edit:hover,
  .delete:hover {
    background: #15202b;
    color: #ffffff;
  }

  .dark .edit:hover,
  .dark .delete:hover {
    background-color: #f3f3f3;
    color: #15202b;
  }

</style>