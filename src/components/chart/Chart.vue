<template>
    <div ref="wrapper" class="chart-wrapper">
        <svg ref="svg" class="chart" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>
        <md-button @click.native="download" class="md-fab md-primary md-fab-top-center">
            <md-icon>get_app</md-icon>
        </md-button>
    </div>
</template>

<script>
    import BurndownService from '_services/BurndownService'
    import { appendStyle, createImage } from '_app/util'

    export default {
        name: 'Chart',
        data () {
            return  {
                rendered: false,
                chartStyles: `
                    .chart {
                        width: 100%;
                        min-height: 595px;
                        min-width: 842px;
                    }

                    .axis text {
                        font-size: 15px;
                    }

                    .grid .tick {
                        stroke: #eee;
                        opacity: 0.1;
                    }

                    .line {
                        fill: none;
                        stroke: #91E500;
                        stroke-width: 5;
                        stroke-linecap: round;
                    }
                `
            }
        },
        computed: {
            formData () {
                return this.$store.state.form
            }
        },
        mounted () {
            this.service = new BurndownService(this.$refs.svg)
            appendStyle(this.$refs.svg, this.chartStyles)
        },
        watch: {
            formData: {
                handler (val) {
                    this.render(val)

                    if (!this.rendered) {
                        window.addEventListener('resize', () => this.render(val))
                        this.rendered = true
                    }
                },
                deep: true
            }
        },
        methods: {
            render (data) {
                this.service.render(
                    data.title,
                    JSON.parse(JSON.stringify(data.data))
                )
            },
            download () {
                createImage(this.$refs.svg, 'burndown.png')
            }
        }
    }
</script>

<style lang="sass">
    .chart-wrapper {
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        position: relative;
    }

    .chart {
        overflow: hidden;
    }
</style>