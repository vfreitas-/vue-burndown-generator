<template>
    <div class="main-wrapper">
        <app-header></app-header>
        <div class="container">
            <app-form></app-form>
            <chart></chart>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from './Header.vue'
    import AppFooter from './Footer.vue'
    import AppForm from './form/Form.vue'
    import Chart from './chart/Chart.vue'

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppFooter,
            AppForm,
            Chart
        }
    }
</script>

<style lang="sass">
    *, *:after, *:before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        font-family: 'Roboto', 'Helvetica', sans-serif;
    }

    .main-wrapper {
        @media screen and (min-width: 600px) {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
    }

    .container {
        margin: 0 auto;
        padding: 15px;

        @media screen and (min-width: 768px) {
            width: 750px;
        }

        @media screen and (min-width: 992px) {
                width: 970px;
        }
        
        @media screen and (min-width: 1200px) {
                width: 1170px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
