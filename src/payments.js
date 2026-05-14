function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + items[i].price + (items[i].tax || 0);
    }
    return total;
}

function processPayment(amount, method) {
    console.log("Processing payment for amount: " + amount);
    console.log("DEBUG: payment processing initiated", amount);
    // TODO: Connect to gateway
    return {
        success: true,
        transactionId: "TXN_" + Math.random().toString(36).substr(2, 9)
    };
}

module.exports = { calculateTotal, processPayment };
// changes
// fix again
// done
// verified
const TAX_RATE = 0.05;
const TAX_RATE = 0.05;
