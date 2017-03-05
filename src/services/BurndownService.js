import * as d3 from 'd3'

export default class Burndown {

    constructor (svg, data, options) {
        this.svg = d3.select(svg)

        this.opts = Object.assign({
            padding: 50
        }, options)

        this.data = data.map(d => {
            d.date = this.parseTime(d.date)
            d.value = +d.value
            return d
        })
    }

    get parseTime () {
        return d3.timeParse('%d/%m/%Y')
    }

    get xDomain () {
        return d3.extent(this.data, d => parseTime(d.date))
    }

    get yDomain () {
        return d3.extent(this.data, d => parseInt(d.value * 1.2))
    }

    get xScale () {
        return d3.scaleTime().domain(this.xDomain).range(0, 800)
    }

    get yScale () {
        return d3.scaleLinear().domain(this.yDomain).range(0, 500)
    }

    get linePath () {
        return d3.line()
            .x(d => this.xScale(d.date))
            .y(d => this.yScale(d.value))
    }

    render () {
        const mainGroup = this.svg.append('g')
            .attr('transform', this.t(this.opts.padding))
    }

    /**
     * Return a string for the transform property
     * Example: t(200, 300) returns
     * translate(200, 300)
     */
    t (width, height) {
        if (!height) {
            height = width
        }
        
        return `translate(${width}, ${height})`
    }

}