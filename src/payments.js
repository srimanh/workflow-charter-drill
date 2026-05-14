function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

function processPayment(amount, method) {
    console.log("Processing payment for amount: " + amount);
    // TODO: Connect to gateway
    return {
        success: true,
        transactionId: "TXN_" + Math.random().toString(36).substr(2, 9)
    };
}

module.exports = { calculateTotal, processPayment };
// changes
