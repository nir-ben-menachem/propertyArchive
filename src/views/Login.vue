<template>
    <div>
        <amplify-sign-in hideSignUp header-text="Sign in"></amplify-sign-in>
<!--        <amplify-authenticator  > </amplify-authenticator>-->

    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    amplify-sign-in {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 4;
        height: 100vh;
        color: purple;

    }

</style>