<template>
    <div>
        <svg ref="svg" class="chart"></svg>
    </div>
</template>

<script>
    import BurndownService from '_services/BurndownService'

    export default {
        name: 'Chart',
        data () {
            return  {
                testData: [
                    {
                        date: '15/02/2017',
                        value: 20
                    },
                    {
                        date: '17/02/2017',
                        value: 17
                    },
                    {
                        date: '18/02/2017',
                        value: 15
                    },
                    {
                        date: '19/02/2017',
                        value: 6
                    },
                    {
                        date: '20/02/2017',
                        value: 3
                    },
                    {
                        date: '21/02/2017',
                        value: 0
                    },
                ]
            }
        },
        mounted () {
            this.service = new BurndownService(
                this.$refs.svg, 
                JSON.parse(JSON.stringify(this.testData))
            )

            this.service.render()
        },
        methods: {

        }
    }
</script>

<style lang="sass">
    .chart {
        width: 100%;
        height: 100%;
        min-height: 400px;
    }

    .line {
        fill: none;
        stroke: steelblue;
        stroke-width: 2px;
    }

    .line-ideal {
        fill: none;
        stroke: black;
        stroke-width: 3px;
    }
</style>
