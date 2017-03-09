<template>
    <div>
        <p>Fill the below form to generate the burndown chart</p>
        <md-layout md-gutter="16" md-column-xsmall>
            <md-layout>
                <md-input-container>
                    <label>Burndown Title</label>
                    <md-input v-model="title"></md-input>
                </md-input-container>
            </md-layout>
            <md-layout>
                <md-subheader>Start date</md-subheader>
                <datepicker :start-date="startDate"></datepicker>
            </md-layout>
        </md-layout>
        <md-layout md-gutter="16" md-column-xsmall>
            <md-layout>
                <md-input-container>
                    <label>Work Days</label>
                    <md-input v-model="days" type="number"></md-input>
                </md-input-container>
            </md-layout>
            <md-layout>
                <md-input-container>
                    <label>Points</label>
                    <md-input v-model="points" type="number"></md-input>
                </md-input-container>
            </md-layout>
        </md-layout>
        <md-layout md-align="center">
            <md-button @click.native="generate" class="md-raised md-primary">
                Generate
            </md-button>
        </md-layout>
    </div>
</template>

<script>
    import moment from 'moment'
    import Datepicker from './Datepicker.vue'
    import { addWeekDays } from '_app/util'

    export default {
        name: 'Form',
        data () {
            return {
                title: '',
                days: 0,
                points: 0,
                startDate: {
                    time: moment().format('DD/MM/YYYY')
                }
            }
        },
        methods: {
            generate () {
                let endDate = addWeekDays(
                    moment(this.startDate.time, 'DD/MM/YYYY'),
                    this.days - 1
                )

                let data = [
                    {
                        date: this.startDate.time,
                        value: this.points
                    },
                    {
                        date: endDate.format('DD/MM/YYYY'),
                        value: 0
                    }
                ]

                this.$store.dispatch('updateForm', {
                    title: this.title,
                    data
                })
            }
        },
        components: {
            Datepicker
        }
    }
</script>

<style lang="sass" scoped>

</style>
