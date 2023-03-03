<template>
    <h1>SignUp</h1>
    <div>
        <label for="name">Adresse Mail</label>
        <input type="text" v-model="email" placeholder="E-mail"/>
    </div>
    <div>
        <label for="name">Mot de passe</label>
        <input type="password" v-model="password" placeholder="Entrer votre mot de passe" required />
    </div>
    <button id="register" class="log" v-on:click="register">S'inscrire</button>
</template>

<script lang="ts">
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth';

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        register: function() {
            console.log('register : ' + this.email);
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                this.$router.push("/signin");
            })
            .catch((error) => { console.log('error : ' + error.message);})
        }
    }
}; 

</script>