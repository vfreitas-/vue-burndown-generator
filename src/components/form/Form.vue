<template>
    <div>
        <p>Fill the below form to generate the burndown chart</p>
        <md-layout md-gutter="16" md-column-xsmall>
            <md-layout>
                <md-input-container>
                    <label>Burndown Title</label>
                    <md-input></md-input>
                </md-input-container>
            </md-layout>
            <md-layout>
                <md-subheader>Start date</md-subheader>
                <datepicker></datepicker>
            </md-layout>
        </md-layout>
        <md-layout md-gutter="16" md-column-xsmall>
            <md-layout>
                <md-input-container>
                    <label>Work Days</label>
                    <md-input type="number"></md-input>
                </md-input-container>
            </md-layout>
            <md-layout>
                <md-input-container>
                    <label>Points</label>
                    <md-input type="number"></md-input>
                </md-input-container>
            </md-layout>
        </md-layout>
        <md-layout md-align="center">
            <md-button class="md-raised md-primary">Generate</md-button>
        </md-layout>
    </div>
</template>

<script>
    import Datepicker from './Datepicker.vue'

    export default {
        name: 'Form',
        components: {
            Datepicker
        }
    }
</script>

<style lang="sass" scoped>
    
</style>
