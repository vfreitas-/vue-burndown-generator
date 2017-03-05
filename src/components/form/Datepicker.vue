<template>
    <div>
        <md-datepicker :date="startDate" :limit="limit" :option="option"></md-datepicker>
    </div>
</template>

<script>
    import moment from 'moment'
    import MdDatepicker from 'vue-datepicker'

    const today = moment().format('DD/MM/YYYY')

    export default {
        name: 'Datepicker',
        data () {
            return {
                option: {
                    type: 'day',
                    week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    format: 'DD/MM/YYYY',
                    inputStyle: {
                        display: 'inline-block',
                        padding: '6px',
                        'line-height': '22px',
                        'font-size': '16px',
                        color: '#5F5F5F',
                        border: 'none',
                        'border-bottom': '1px solid #673ab7',
                        'margin-top': '18px'
                    },
                    color: {
                        header: '#673ab7',
                        headerText: 'white'
                    }
                },
                startDate: {
                    time: today
                },
                limit: [
                    {
                        type: 'weekday',
                        available: [1, 2, 3, 4, 5]
                    }
                    // {
                    //     type: 'fromto',
                    //     from: '2016-02-01',
                    //     to: '2016-02-20'
                    // }
                ]
            }
        },
        components: {
            MdDatepicker
        }
    }
</script>

<style lang="sass">

</style>
