import moment from 'moment'

/**
 * Add only week days to a moment date object
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
 * 
 */
export const outerHtml = el => {
    let cont = document.createElement("div")
    cont.appendChild(el.cloneNode(true))

    return cont.innerHTML
}

/**
 * Create an image within the canvas context from a svg base64 url
 * then create an anchor element and download image as a png file
 */
export const createImage = (svgHtml, fileName) => {
    const html = btoa(unescape(encodeURIComponent(svgHtml)))
    const svgData = `data:image/svg+xml;base64,${html}`

    let canvas = document.createElement('canvas')
      , context = canvas.getContext('2d')
      , image = new Image()

    image.onload = function() {
        console.log('dsadsasdadsads')
        context.drawImage(image, 0, 0)

        canvas.toBlob(blob => {
            let a = document.createElement('a')
            a.download = fileName
            a.href = blob
            a.click()
        })

        let canvasData = canvas.toDataURL('image/png')

        
    }

    image.src = svgData
}