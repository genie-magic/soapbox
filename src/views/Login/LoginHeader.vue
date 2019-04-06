<template>
    <div class="login-header">
        <p class="text-muted"> Download the</p>
        <b-button variant="primary" class="account-btn">
            Get an account
        </b-button>
    </div>
</template>

<script>
  export default {
    name: "LoginHeader"
  }
</script>

<style scoped lang="scss">
.login-header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 2.0rem 2.0rem;

    .account-btn {
        float: right;
    }
}
</style>