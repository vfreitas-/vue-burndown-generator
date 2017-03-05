/* Bind the function to an event
 * 
 * @param fn   {function} function you want to debounce
 * @param wait {number}   interval wait in ms
 */
export function debounce(fn, wait) {
    let timeout
    return function() {
        let args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, wait || 100)
    }
}