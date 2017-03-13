import * as d3 from 'd3'
import { scaleDiscontinuous, discontinuitySkipWeekends } from 'd3fc-discontinuous-scale'

export default class Burndown {

    constructor (svg, options) {
        this.svg = d3.select(svg)

        this.opts = Object.assign({
            padding: 75
        }, options)
    }

    get parseTime () {
        return d3.timeParse('%d/%m/%Y')
    }

    get xDomain () {
        return d3.extent(this.data, d => d.date)
    }

    get yDomain () {
        return d3.extent(this.data, d => d.value)
    }

    get xScale () {
        return scaleDiscontinuous(d3.scaleTime())
            .discontinuityProvider(discontinuitySkipWeekends())
            .domain(this.xDomain)
            .range([
                0, (this.width - (2 * this.opts.padding))
            ])
    }

    get yScale () {
        return d3.scaleLinear().domain(this.yDomain).range([
            this.height - (2 * this.opts.padding), 0
        ]).nice()
    }

    get linePath () {
        return d3.line()
            .x(d => this.xScale(d.date))
            .y(d => this.yScale(d.value))
    }

    render (title, data) {
        this.width = parseInt(this.svg.style('width')) 
        this.height = parseInt(this.svg.style('height'))

        //parse the data
        this.data = data.map(d => {
            d.date = this.parseTime(d.date)
            d.value = parseInt(d.value)
            return d
        })

        //remove the old svg content
        this.clean()

        //create a main svg group element
        //and add a padding to it
        const mainGroup = this.svg.append('g')
            .attr('transform', this.t(this.opts.padding))
        
        //create the burndown 'ideal' line
        //passing the data through and setting de path - d - 
        //as the output of the linePath function
        mainGroup.append('path')
            .data([this.data])
            .attr('class', 'line')
            .attr('d', this.linePath)

        //add grid lines
        mainGroup.append('g')
            .attr('class', 'grid')
            .call(
                d3.axisLeft(this.yScale)
                    .tickSize(-(this.width - (2 * this.opts.padding)))
                    .tickFormat('')
            )

        mainGroup.append('g')
            .attr('class', 'grid')
            .call(
                d3.axisBottom(this.xScale)
                    .tickSize((this.height - (2 * this.opts.padding)))
                    .tickFormat('')
            )

        //add the x axis
        mainGroup.append('g')
            .attr('class', 'axis x')
            .attr('transform', this.t(0, this.height - (2 * this.opts.padding)))
            .call(
                d3.axisBottom(this.xScale)
                    .tickArguments([d3.timeDay.every(1)])
                    .tickFormat(d3.timeFormat("%d/%m"))
            )

        //add the y axis
        mainGroup.append('g')
            .attr('class', 'axis y')
            .call(d3.axisLeft(this.yScale))

        //add the title
        mainGroup.append('text')
            .attr('class', 'title')
            .attr('x', (this.width / 2) - this.opts.padding)
            .attr('y', -15)
            .attr('text-anchor', 'middle')
            .text(title)

        //add y axis label
        mainGroup.append('text')
            .attr('class', 'label')
            .attr('y', -40)
            .attr('x', -((this.height / 2) - this.opts.padding))
            .attr('text-anchor', 'middle')
            .attr('transform', 'rotate(-90)')
            .text('Tasks')
        
        //add x axis label
        mainGroup.append('text')
            .attr('class', 'label')
            .attr('x', (this.width / 2) - this.opts.padding)
            .attr('y', this.height - this.opts.padding - 30)
            .attr('text-anchor', 'middle')
            .text('Days')
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

    clean () {
        this.svg.select('g').remove()
    }
}