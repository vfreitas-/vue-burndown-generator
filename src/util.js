
/**
 * Add only week days to a moment date object
 */
export const addWeekDays = (date, quantity) => {
    let tmp = date
    while (quantity > 0) {
        tmp = tmp.add(1, 'days')
        if (tmp.isoWeekday() !== 6 && tmp.isoWeekday() !== 7) {
            quantity -= 1
        }
    }
    return tmp
}