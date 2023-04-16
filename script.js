'use strict';
let title = prompt('Как называется Ваш проект?', 'Калькулятор верстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые сложные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 150000);
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let roolback =10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

const showTypeof = function(variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPice + allServicePrices
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

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices()

showTypeof(title);
showTypeof(scrrenPrice);
showTypeof(adaptiv);

console.log("allServicePrices", allServicePrices);

console.log(allServicePrices);
console.log(getRoolBackMessage(fullPrice));
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(typeof title);
console.log(typeof scrrenPrice);
console.log(typeof adaptiv);