import moment from 'moment'

/**
 * Add only week days to a moment date object
 * 
 * @param {Moment} data the moment object of the initial date
 * @param {Number} quantity number of days to add
 * @return {Moment} object
 */
export const addWeekDays = (date, quantity) => {
    let tmp = date
    let weekDays = []
    while (quantity > 0) {
        tmp = tmp.add(1, 'days')
        if (tmp.isoWeekday() !== 6 && tmp.isoWeekday() !== 7) {
            quantity -= 1
            weekDays.push(moment(tmp).format('DD/MM/YYYY'))
        }
    }

    return tmp
}

/**
 * Get the outerHtml of an element
 * 
 * @param {Element} el the element
 * @return {String} containing the element outer html
 */
export const outerHtml = el => {
    let cont = document.createElement('div')
    cont.appendChild(el.cloneNode(true))

    return cont.innerHTML
}

/**
 * Append a style tag to an element before the first child
 * 
 * @param {Element} el element to receive the style tag
 * @param {String} cssStr a string containing the css styles
 */
export const appendStyle = (el, cssStr) => {
    let styleEl = document.createElement('style')
    styleEl.setAttribute('type', 'text/css')
    styleEl.innerHTML = cssStr

    let sibling = el.children[0]
    el.insertBefore(styleEl, sibling)
}

/**
 * Create an image within the canvas context from a svg base64 url
 * then create an anchor element and download image as a png file
 * 
 * @param {Element} svgEl the svg element to download as a png image
 * @param {String} fileName the name of the file to download
 */
export const downloadSvg = (svgEl, fileName) => {
    const svgHtml = outerHtml(svgEl)
    const html = btoa(unescape(encodeURIComponent(svgHtml)))
    const svgData = `data:image/svg+xml;base64,${html}`

    let styles = getComputedStyle(svgEl)
      , width = parseInt(styles.width)
      , height = parseInt(styles.height)

    let canvas = document.createElement('canvas')
      , context = canvas.getContext('2d')
    
    canvas.width = width
    canvas.height = height

    let image = new Image()

    image.onload = function() {
        context.clearRect ( 0, 0, width, height)
        context.drawImage(image, 0, 0, width, height)

        let canvasData = canvas.toDataURL('image/png')

        let a = document.createElement('a')
        a.download = fileName
        a.href = canvasData
        a.click()
    }

    image.src = svgData
}