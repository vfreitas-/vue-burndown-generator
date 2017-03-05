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
            // this.service.render()
        },
        watch: {
            formData: {
                handler (val) {
                    this.service.render(
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
