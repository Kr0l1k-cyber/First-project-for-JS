'use strict';
let title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let scrrenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptiv = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let roolback =10;
let fullPrice = Number(scrrenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = fullPrice - (fullPrice * (roolback / 100));

const showTypeof = function(variable) {
    console.log(variable, typeof variable);
}
const getRoolBackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}
// Решаем задачки
// возвращает сумму всех доп услуг
const getAllServicePrices = function(dopPrice1, dopPrice2) {
    return dopPrice1 + dopPrice2
};
// меняет фулпрайс
function getFullPrice(a, b) {
    return a + b
};
// меняет титл
function getTitle(title) {
    if (typeof title !== 'string') {
        return title;
        }
    
        title = title.trim();
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    };

const getServicePercentPrices = function(price, discountPercentage) {
    if (discountPercentage < 0 || discountPercentage > 100) {
        throw new Error('Неверное значение');
      }
      
      const discountAmount = price * (discountPercentage / 100);
      const discountedPrice = price - discountAmount;
      
      return discountedPrice;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(scrrenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, roolback)

showTypeof(title);
showTypeof(scrrenPrice);
showTypeof(adaptiv);

console.log(allServicePrices);
console.log(getRoolBackMessage(fullPrice));
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(typeof title);
console.log(typeof scrrenPrice);
console.log(typeof adaptiv);