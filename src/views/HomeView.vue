<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Vue3 Social Sign In App</h1>
  </div>
  <!-- si l'utilisateur est connecté, ce message apparaît -->
  <h2 v-if="user">Signed In User: {{ user }}</h2>

  <!-- si l'utilisateur est connecté (isSignedIn is true), un bouton logout apparait -->
  <div id="logout" v-if="isSignedIn">
    <button @click="handleSignOut">Logout</button>
  </div>

  <!-- Google -->
  <!-- si isSignedIn est true, le bouton login est apparent -->
  <div id="GoogleSignIn" v-if="!isSignedIn">
    <h3>Google Sign In</h3>
    <button @click="handleSignInGoogle">Login</button>
  </div>

  <!-- Twitter -->
  <!-- si isSignedIn est true, le bouton login est apparent -->
  <div id="TwitterSignIn" v-if="!isSignedIn">
    <h3>Twitter Sign In</h3>
    <button @click="handleSignInTwitter">Login</button>
  </div>

  <!-- Github -->
  <!-- si isSignedIn est true, le bouton login est apparent -->
  <div id="GitHubSignIn" v-if="!isSignedIn">
    <h3>GitHub Sign In</h3>
    <button @click="handleSignInGitHub">Login</button>
  </div>
</template>

<script>
import firebaseApp from "@/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

firebaseApp;

export default {
  name: "HomeView",

  data() {
    return {
      user: "",
      isSignedIn: false,
    };
  },

  methods: {
    // fonction pour se connecter avec Google
    handleSignInGoogle() {
      const providerGoogle = new GoogleAuthProvider();
      const authGoogle = getAuth();
      signInWithPopup(authGoogle, providerGoogle)
        .then((result) => {
          const user = result.user;
          console.log(result.user.displayName);
          this.result = result.user.displayName;
          this.isSignedIn = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // fonction pour se déconnecter
    handleSignOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.user = "";
          this.isSignedIn = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //fonction pour se connecter avec Twitter
    handleSignInTwitter() {
      const providerTwitter = new TwitterAuthProvider();
      const authTwitter = getAuth();
      signInWithPopup(authTwitter, providerTwitter)
        .then((result) => {
          const user = result.user;
          console.log(result.user.displayName);
          this.result = result.user.displayName;
          this.isSignedIn = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //fonction pour se connecter avec GitHub
    handleSignInGitHub() {
      const providerGitHub = new GithubAuthProvider();
      const authGitHub = getAuth();
      signInWithPopup(authGitHub, providerGitHub)
        .then((result) => {
          const user = result.user;
          console.log(result.user.displayName);
          this.result = result.user.displayName;
          this.isSignedIn = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
