const a = 'Hello'

function hello () {
    let b = 'Hello Word'
    const c = 'Hello Word!'
    if (true) {
        let d = 'Hello Word!!'
        debugger
    }
}

hello()

const moneyBox = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myMoneyBox = moneyBox()

