import * as d3 from 'd3'

export default class Burndown {

    constructor (svg, data, options) {
        this.svg = d3.select(svg)
        this.width = parseInt(this.svg.style('width')) 
        this.height = parseInt(this.svg.style('height'))

        this.opts = Object.assign({
            padding: 50
        }, options)

        this.data = data.map(d => {
            d.date = this.parseTime(d.date)
            d.value = +d.value
            return d
        })

        this.idealLine = [
            {
                date: this.xDomain[0],
                value: this.yDomain[1]
            },
            {
                date: this.xDomain[1],
                value: this.yDomain[0]
            }
        ]
    }

    get parseTime () {
        return d3.timeParse('%d/%m/%Y')
    }

    get xDomain () {
        return d3.extent(this.data, d => d.date)
    }

    get yDomain () {
        return d3.extent(this.data, d => d.value * 1.2)
    }

    get xScale () {
        return d3.scaleTime().domain(this.xDomain).range([
            0, (this.width - (2 * this.opts.padding))
        ])

    }

    get yScale () {
        return d3.scaleLinear().domain(this.yDomain).range([
            this.height - (2 * this.opts.padding), this.opts.padding
        ])
    }

    get linePath () {
        return d3.line()
            .x(d => this.xScale(d.date))
            .y(d => this.yScale(d.value))
    }

    render () {
        this.svg.attr('width', this.width)
            .attr('height', this.height)

        const mainGroup = this.svg.append('g')
            .attr('transform', this.t(this.opts.padding))

        mainGroup.append('path')
            .data([this.data])
            .attr('class', 'line')
            .attr('d', this.linePath)

        mainGroup.append('path')
            .data([this.idealLine])
            .attr('class', 'line-ideal')
            .attr('d', this.linePath)

        mainGroup.append('g')
            .attr('transform', this.t(0, this.height - (2 * this.opts.padding)))
            .call(d3.axisBottom(this.xScale))

        mainGroup.append('g')
            .call(d3.axisLeft(this.yScale))
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