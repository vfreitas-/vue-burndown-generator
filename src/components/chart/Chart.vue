<template>
    <div>
        <svg ref="svg" class="chart"></svg>
    </div>
</template>

<script>
    import BurndownService from '_services/BurndownService'

    export default {
        name: 'Graph',
        data () {
            return  {
                testData: [
                    {
                        x: '15/02/2017',
                        y: 20
                    },
                    {
                        x: '17/02/2017',
                        y: 17
                    },
                    {
                        x: '18/02/2017',
                        y: 15
                    },
                    {
                        x: '19/02/2017',
                        y: 6
                    },
                    {
                        x: '20/02/2017',
                        y: 3
                    },
                    {
                        x: '21/02/2017',
                        y: 0
                    },
                ]
            }
        },
        mounted () {
            this.service = new BurndownService(this.$refs.svg, this.testData)

            this.service.render()
        },
        methods: {

        }
    }
    [{
		'x': 0,
		'y': 200
	}, {
		'x': 10,
		'y': 50
	}, {
		'x': 20,
		'y': 180
	}, {
		'x': 30,
		'y': 60
	}, {
		'x': 40,
		'y': 120
	}, {
		'x': 50,
		'y': 30
	}]
</script>

<style lang="sass" scoped>
    .chart {
        width: 100%;
        height: 100%;
        min-height: 400px;
    }
</style>
