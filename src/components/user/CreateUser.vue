<template>
    <div class="createUser">
        <h1 style="text-align:center; font-weight:500;">Create user</h1>
        <form class="create-form" @submit.prevent="addUser">
            <div class="input">
                <label for="firstname">First name:</label>
                <input type="text" placeholder="John" id="firstname"  v-model="userData.first_name">
            </div>
            <div class="input">
                <label for="lastname">Last name:</label>
                <input class="input" type="text" placeholder="Doe" id="lastname" v-model="userData.last_name">
            </div>
            <div class="input">
                <label for="email">Mail:</label>
                <input class="input" type="email" placeholder="johndoe@doe.com" id="email" v-model="userData.email"> 
            </div>
            <div class="input">
                <label for="avatar">Profile picture:</label>
                <input class="input" type="text" placeholder="URL" id="avatar" v-model="userData.avatar">
            </div>     
            <div class="submit">
                <button type="submit">Create</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import { eventBus } from '../../main.js'


export default {
    
    data() {
        return {
            userData: {
                first_name:'',
                last_name:'',
                email:'',
                avatar:''
            }
        }
    },
    methods: {
        addUser() {

            const newUser = {
                first_name:this.userData.first_name,
                last_name: this.userData.last_name,
                email: this.userData.email,
                avatar: this.userData.avatar
            }

            axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
                const newUser = {
                    id:parseInt(res.data.id),
                    email:res.data.email,
                    first_name:res.data.first_name,
                    last_name:res.data.last_name,
                    avatar:res.data.avatar
                }
                eventBus.$emit('addUser', newUser)
                this.$router.push('/listUsers')
            })
            .catch(err => console.log(err))
                
        }
    }
}
</script>
<style scoped>
    .create-form {
        width: 400px;
        margin: 30px auto;
        border: 1px solid #eee;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 2px 3px #ccc;
    }

    .dark .create-form {
        background: #15202b;
        border: none;
        box-shadow: none;
    }

</style>