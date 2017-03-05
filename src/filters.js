export const currency = value => {
    try {
        return (value) ? value.toFixed(2) : '0.00'
    } catch (e) {
        return '0.00'
    }
}