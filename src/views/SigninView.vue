<template>
        <h1>SignIn</h1>
        <div>
            <label for="name">Adresse Mail</label>
            <input type="text" v-model="email" placeholder="E-mail"/>
        </div>
        <div>
            <label for="name">Mot de passe</label>
            <input type="password" v-model="password" placeholder="Entrer votre mot de passe" required />
        </div>
        <button id="register" class="log" v-on:click="login">Login</button>
</template>

<script lang="ts">
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth';

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login: function() {
            console.log('login: ' + this.email);
            signInWithEmailAndPassword(auth,this.email, this.password)
            .then(() => {
                this.$router.push("/member");
             })
            .catch((error) => { console.log('error : ' + error.message);})
        }
    }
}; 

</script>
 