const numberWithCommas = (num) => {
    return num.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    })
}

export default numberWithCommas
