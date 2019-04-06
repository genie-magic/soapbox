<template>
    <div class="login-form">
        <h1 class="title">Soapbox</h1>
        <div class="position-relative">
            <b-form-input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Name"
            ></b-form-input>
            <div class="position-absolute span-container">
                <span class="fa fa-cog"></span>
            </div>
        </div>
        <div class="position-relative">
            <b-form-input
                    v-model="form.email"
                    type="Email"
                    required
                    placeholder="Enter email"
            ></b-form-input>
            <div class="position-absolute span-container">
                <span class="fa fa-cog"></span>
            </div>
        </div>

        <b-button variant="primary" class="continue-btn" size="lg">
            Continue
        </b-button>
    </div>
</template>

<script>

  export default {
    name: "LoginForm",
    data() {
      return {
        form: {
          name: '',
          email: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .login-form {
        background: #1E1B52;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        padding: 0 5rem;
        color: white;

        .title {
            margin-bottom: 3.0rem;
        }

        .continue-btn {
            margin-top: 10rem;
            width: 10rem;
            color: black;
        }

        .span-container {
            right: 0;
            top: 0;
            padding-right: 0.5rem;
            color: #C45BED;
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
</style>