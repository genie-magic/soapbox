<template>
    <b-container fluid style="height: 100vh">
        <b-row no-gutters class="h-100">
            <b-col col md="4">
                <login-form/>
            </b-col>
            <b-col>
                <login-header/>
                <b-img :src="loginImage" />
                <login-footer/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  import LoginForm from './LoginForm'
  import loginImage from '@/assets/images/login_image.png'
  import LoginHeader from "./LoginHeader";
  import LoginFooter from "./LoginFooter";

  export default {
    name: "Login",
    components: {LoginFooter, LoginHeader, LoginForm},
    data: function () {
      return {
        loginImage
      };
    }
  }
</script>

<style scoped>

</style>