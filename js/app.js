function setValue0(cost0) {
    const cost = document.getElementById(cost0);
    parseInt(cost.innerText);

    cost.innerText = 0;
}

function increasevalue(cost1, amount) {
    const increaseCost = document.getElementById(cost1);
    parseInt(increaseCost.innerText);

    increaseCost.innerText = amount;
}

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
}

document.getElementById('memory0').addEventListener('click', function () {
    setValue0('memory-cost');
    const increaseAmount = increaseCost();
    const increaseAmountValue = parseInt(increaseAmount.innerText);
    const memoryCost = document.getElementById('memory-cost');
    const memoryCostValue = parseInt(memoryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    parseInt(totalPrice.innerText);
    totalPrice.innerText = increaseAmountValue - memoryCostValue;
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