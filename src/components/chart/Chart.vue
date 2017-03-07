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
                
            }
        },
        computed: {
            formData () {
                return this.$store.state.form
            }
        },
        mounted () {
            this.service = new BurndownService(this.$refs.svg)
        },
        watch: {
            formData: {
                handler (val) {
                    this.service.render(
                        val.title,
                        JSON.parse(JSON.stringify(val.data))
                    )
                },
                deep: true
            }
        }
    }
</script>

<style lang="sass">
    .chart {
        width: 100%;
        height: 100%;
        min-height: 400px;

        & > .axis path,
        & > .axis line {
            fill: none;
            stroke: #eee;
            stroke-width: 2;
            shape-rendering: crispEdges;
        }

        .axis {
            text {
                font-size: 15px;
            }
        }

        .grid .tick {
            stroke: #eee;
            opacity: 0.1;
        }
    }

    .line {
        fill: none;
        stroke: #91E500;
        stroke-width: 5;
        stroke-linecap: round;
    }

    .line-ideal {
        fill: none;
        stroke: black;
        stroke-width: 3px;
    }

</style>
