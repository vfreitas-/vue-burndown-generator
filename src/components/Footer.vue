<template>
    <div class="footer md-primary">
        <div class="container">
            <!--<md-layout md-gutter="16" md-column-xsmall md-align="center">-->
                <p>Current browser support: Chrome, Edge and Firefox  <b>:not(.safari)</b></p>
                <p>Made with Vue and D3.js</p>
            <!--</md-layout>-->
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
    }
</style>
