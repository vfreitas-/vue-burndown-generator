
/**
 * Add only week days to a moment date object
 */
export const addWeekDays = (date, quantity) => {
    let tmp = date
    // console.log(tmp)
    while (quantity > 0) {
        tmp = tmp.add(1, 'days')
        // console.log(tmp)
        if (tmp.isoWeekday() !== 6 && tmp.isoWeekday() !== 7) {
            quantity -= 1
        }
    }
    return tmp
}