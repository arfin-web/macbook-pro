//set value for no amount add
function setValue0(cost0) {
    const cost = document.getElementById(cost0);
    parseInt(cost.innerText);

    cost.innerText = 0;
}

//set value for amount add
function increasevalue(cost1, amount) {
    const increaseCost = document.getElementById(cost1);
    parseInt(increaseCost.innerText);

    increaseCost.innerText = amount;
}


//update amount
function increaseCost() {
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostValue = parseInt(memoryCost.innerText);

    const storageCost = document.getElementById('storage-cost');
    const storageCostValue = parseInt(storageCost.innerText);

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostValue = parseInt(deliveryCost.innerText);

    const bestCost = document.getElementById('best-price');
    const bestCostValue = parseInt(bestCost.innerText);

    const totalPrice = document.getElementById('total-price');
    parseInt(totalPrice.innerText);
    totalPrice.innerText = bestCostValue + memoryCostValue + storageCostValue + deliveryCostValue;

    const total = document.getElementById('total');
    total.innerText = totalPrice.innerText;
}


//add click event to buttons and calculate
document.getElementById('memory0').addEventListener('click', function () {
    setValue0('memory-cost');
    const increaseAmount = increaseCost();
    const increaseAmountValue = parseInt(increaseAmount.innerText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostValue = parseInt(memoryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    parseInt(totalPrice.innerText);
    totalPrice.innerText = increaseAmountValue - memoryCostValue;
    const total = document.getElementById('total');
    total.innerText = totalPrice.innerText;
})

document.getElementById('storage0').addEventListener('click', function () {
    setValue0('storage-cost');
    const increaseAmount = increaseCost();
    const increaseAmountValue = parseInt(increaseAmount.innerText);
    const storageCost = document.getElementById('storage-cost');
    const storageCostValue = parseInt(storageCost.innerText);
    const totalPrice = document.getElementById('total-price');
    parseInt(totalPrice.innerText);
    totalPrice.innerText = increaseAmountValue - storageCostValue;
    const total = document.getElementById('total');
    total.innerText = totalPrice.innerText;
})

document.getElementById('delivery0').addEventListener('click', function () {
    setValue0('delivery-cost');
    const increaseAmount = increaseCost();
    const increaseAmountValue = parseInt(increaseAmount.innerText);
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostValue = parseInt(deliveryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    parseInt(totalPrice.innerText);
    totalPrice.innerText = increaseAmountValue - deliveryCostValue;
    const total = document.getElementById('total');
    total.innerText = totalPrice.innerText;
})

document.getElementById('memory16').addEventListener('click', function () {
    increasevalue('memory-cost', 180);
    increaseCost();
})

document.getElementById('storage512').addEventListener('click', function () {
    increasevalue('storage-cost', 100);
    increaseCost();
})

document.getElementById('storage1').addEventListener('click', function () {
    increasevalue('storage-cost', 180);
    increaseCost();
})

document.getElementById('delivery20').addEventListener('click', function () {
    increasevalue('delivery-cost', 20);
    increaseCost();
})


//promo code calculate
document.getElementById('apply').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const totalPrice = document.getElementById('total-price');
    const total = document.getElementById('total');
    const totalValue = parseInt(total.innerText);
    if (promoInput.value == 'stevekaku') {
        const discount = 20 / 100;
        const discountCount = totalValue * discount;

        total.innerText = totalValue - discountCount;
        totalPrice.innerText = total.innerText;
    }
    promoInput.value = '';
})