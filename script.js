'use strict';

let title = prompt('Как называется Ваш проект?', 'Калькулятор верстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые сложные');
let screenPrice
let adaptive = confirm('Нужен ли адаптив на сайте?');

// let service1 = prompt('Какой дополнительный тип услуги нужен?');
// let servicePrice1 = +prompt('Сколько это будет стоить?');
// let service2 = prompt('Какой дополнительный тип услуги нужен?');
// let servicePrice2 = +prompt('Сколько это будет стоить?');

let roolback =10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++){
        let input;
        do {
            input = +prompt('Сколько это будет стоить?')
        } while (isNaN(input));

        sum += input;

    }
    
    return sum    
}

const getScreenPtice = function () {
    let sum = 0;
    let input;
    do {
        input = prompt('Сколько будет стоить данная работа?', 15000);
        input = input.replace(/\s+/g, '');
    } while (isNaN(parseFloat(input)));

    sum += +input;
    return sum;
}

const showTypeof = function(variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (roolback / 100))
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
} 
const getRoolBackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price <30000) {
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }

}

screenPrice = getScreenPtice();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices()

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log(allServicePrices);
console.log(getRoolBackMessage(fullPrice));
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log("Стоимость верстки экранов" + screenPrice + " юани" + "стоимость разработки экрана" + "юани");