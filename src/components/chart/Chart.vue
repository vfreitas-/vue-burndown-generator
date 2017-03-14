<template>
    <div ref="wrapper" class="chart-wrapper">
        <md-button @click.native="download" class="download md-raised md-primary">
            <md-icon>get_app</md-icon>
        </md-button>
        <svg ref="svg" class="chart" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>
    </div>
</template>

<script>
    import BurndownService from '_services/BurndownService'
    import { appendStyle, downloadSvg } from '_app/util'

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
                        background-color: #fff;
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

                    .title {
                        font-size: 18px;
                    }

                    .label {
                        font-size: 16px;
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
                if (!this.$refs.svg.children.length) {
                    //set the chart styles on a style tag inside the svg element
                    //better than keepping all styles on d3 queries?
                    appendStyle(this.$refs.svg, this.chartStyles)
                }

                this.service.render(
                    data.title,
                    JSON.parse(JSON.stringify(data.data))
                )
            },
            download () {
                downloadSvg(this.$refs.svg, 'burndown.png')
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

        .download {
            display: block;
            margin: 5px auto;
        }
    }

    .chart {
        overflow: hidden;
    }
</style>