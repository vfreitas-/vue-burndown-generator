<template>
    <div class="footer md-primary">
        <div class="container">
            <p>Download browser support: Chrome, Edge and Firefox  <b>:not(.safari)</b></p>
            <p>Made with Vue and D3.js by <a href="https://github.com/vfreitas-">Vitor Freitas</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="sass" scoped>
    .footer {
        margin-top: auto;

        color: #fff;
        background-color: #673ab7;
        font-size: 16px;

        p {
            text-align: center;

            &:first-child {
                 margin-bottom: 10px;
            }
        }

        a:not(.md-button) {
            color: #fff;

            &:hover {
                color: darken(#fff, 10%);
            }
        }
    }
</style>
