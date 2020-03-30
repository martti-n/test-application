<template>
    <div class="editUser">
        <h1>Edit user: {{$route.params.first_name}}</h1>
        <form class="edit-form">
            <div class="input">
                <label for="firstname">First name:</label>
                <input type="text" placeholder="John" id="firstname" v-model="userData.first_name">
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
                <label for="avatar">Profile picture URL:</label>
                <input class="input" type="text" placeholder="URL" id="avatar" v-model="userData.avatar">
            </div>     
            <div class="submit" @click.prevent="updateUser()">
                <button type="submit">Update</button>
            </div>
            
        </form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            userData: {
                first_name: this.$route.params.first_name,
                last_name:this.$route.params.last_name,
                email:this.$route.params.email,
                avatar:this.$route.params.avatar
            }
        }
    },
    methods: {
        updateUser() {
            const updatedUser = {
                first_name:this.userData.first_name,
                last_name: this.userData.last_name,
                email: this.userData.email,
                avatar: this.userData.avatar
            }

            axios.put('https://reqres.in/api/users', updatedUser)
            .then(res => {
                console.log(res)
                this.$router.push('/listUsers')
            })
            .catch(err => console.log(err))
        }
    }
}
</script>
<style scoped>
    h1 {
        text-align: center;
        
    }

    .editUser {
        width: 50%;
        margin: 0 auto;
    }

    .edit-form {
        width: 400px;
        margin: 30px auto;
        border: 1px solid #eee;
        padding: 20px;
        box-shadow: 0 2px 3px #ccc;
    }


    .dark .edit-form {
        box-shadow: none;
    }

</style>