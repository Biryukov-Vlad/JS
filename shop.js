// VAR
var message;
var position;
var counter;
var index;
var clone;
var i;
var shopProducts;
var newName;
var newPrice;
////////////////////////////////////////////
/**************** магазин *****************/
//функция поиска по цене +++ searchProductPrice
//функция поиска по названию +++ searchProductName
//функция вывода всех товаров  +++ showProducts
//функция изменения цены товара по его номеру  +++ updateByIndex
//функция добавления нового продукта в конец списка +++ addProduct
//функция удаления продута по номеру в списке +++ deleteByIndex
//функция выхода из магазина и вывода всего магазина в консоли +++ none

init();

function init() {
    // имя
    shopName();
    // количество продуктов
    quantityProduct();
    // добавление продукта
    initProduct();
    // функции магазина
    shopFunction()
}
// функция определяющая название магазина 
function shopName() {
    shopProducts = {};
    shopProducts.products = [];
    while (true) {
        message = prompt("Как назавёте свой магазин?", "Название магазина");
        if (!!checkInput(message) && message != "noname") {
            shopProducts.nameShop = message;
            break;
        }
        else if (message == "noname") {
            shopProducts.nameShop = "";
            break;
        }
        else if (message == "") {
            alert("Если вы хотите что бы магазан был без названия, напишени noname");
        }
    }
}
//  функция определяющая количество продуктов
function quantityProduct() {
    while (true) {
        quantity = prompt("Введите количество продуктов", "2");
        n = quantity - 1;
        if (!!checkNumber(n) && n >= 0) {
            break;
        }
        else if (quantity == "none") {
            n = -1;
            break;
        }
        else if (!checkNumber(n)) {
            alert("Введите пожалуйста количество цифрами");
        }

        else {
            alert("Вы не ввели количество продуктов, если вы хотите отменить ввод,  введите none");
        }
    }
}

// функция определяющая цену и название продукта
function initProduct() {
    for (i = 0; i <= n; i++) {
        shopProducts.products[i] = {};
        message = prompt("Название продукта " + (i + 1), "Название продукта");

        if (!!checkInput(message)) {
            shopProducts.products[i].name = message;
            message = prompt("Укажите цену продукта: " + shopProducts.products[i].name, "123");
            if (!!checkNumber(message) && Number(message) >= 0.1) {
                shopProducts.products[i].price = Number(message);
            }
            else if (!checkNumber(message)) {
                alert("Вы ввели не число");
                i--;
            }
            else if (message < 0.1) {
                alert("Не менее 0.1 рублей за продукт");
                i--;
            }

            else {
                ("Что то пошло не так попробуйте ещё раз");
            }
        }
        else if (!checkInput(message)) {
            alert("Введите пожалуйста название продукта");
            i--;
        }
        else {
            alert("Что то не так попробуйте ещё раз");
        }
    }
}

//функции магазина


function shopFunction() {
    while (true) {
        message = prompt("можно выполнить следующие действия \n searchProductName - найти продукт по названию \n searchProductPrice - найти продукт по цене \n addProduct - добавить новый продукт \n updateByIndex - изменить цену товара по его номеру \n showProducts - Показать все продукты \n deleteByIndex - удалить продукт по номеру \n none - выти из магазина и вывести магазин в консоль");
        if (message == "none") {
            alert("All the best!)");
            showShop();
            break;
        }

        // ищет продукт по названию
        else if (message == "searchProductName") {
            message = prompt("Введите название продукта который вы ищете");
            if (!!checkInput(message)) {
                searchProductName(message);
            }
            else {
                alert("Вы не ввели название продукта");
            }
        }
        // ищет продукт по цене
        else if (message == "searchProductPrice") {
            message = prompt("Введите цену продукта который вы ищете");
            if (!!checkNumber(message) && !!checkInput(message)) {
                searchProductPrice(message);
            }

            else {
                alert("Вы не назвали цену");
            }
        }
        // добавляет новый продукт
        else if (message == "addProduct") {
            while (true) {
                message = prompt("Введите название продукта");

                if (!!checkInput(message)) {
                    newName = message;
                    message = prompt("Введите цену продукта", "11");
                    if (!!checkNumber(message)) {
                        newPrice = message;
                        addProduct(newName, newPrice);
                        alert("продукт " + '"' + newName + '"' + " с ценой " + newPrice + " успешно добавлен");
                        break;
                    }
                    else alert("если вы передумали добавлять продукт - введите none");
                }

                else if (message == "none") break;
                else alert("если вы передумали добавлять продукт - введите none");
            }
        }
        // выводит все продукты
        else if (message == "showProducts") {
            showProducts();
        }
        // меняет цену продукта по индексу
        else if (message == "updateByIndex") {
            message = prompt("Укажите позицию продукта");
            if (!!shopProducts.products[message]) {
                index = message;
                message = prompt("Введите новую цену продукта: " + '"' + shopProducts.products[message].name + '"');
                if (!!checkNumber(message)) {
                    newPrice = message;
                    updateByIndex(index, newPrice);
                    alert("Вы успешно изменили цену продукта");
                }
                else {
                    alert("Вы не ввели новую цену продукта, изменение отменено");
                }
            }
            else if (!shopProducts.products[message]) {
                alert("Такого продукта нет");
            }
        }

        else if (message == "deleteByIndex") {
            message = prompt("Укажите позици продукта который нужно удалить");
            if (!!shopProducts.products[message]) {
                index = Number(message);
                clone = shopProducts.products[index].name;
                deleteByIndex(index);
                alert("Продукт " + '"' + clone + '"' + " удалён");
            }
            else if (!shopProducts.products[message]) {
                alert("Такого продукта нет");
            }
        }
        else { };
    }
}


/////////////////////////////////////////////
//функция удаления продута по номеру в списке 
function deleteByIndex(index) {
    shopProducts.products.splice(index, 1);
}

///////////////////////////////////////////////////
//функция добавления нового продукта в конец списка 
function addProduct(name, price) {
    shopProducts.products.push({ name: name, price: Number(price) });
}

/////////////////////////////////////////
//функция вывода всего магазина в консоли 
function showShop() {
    console.log(shopProducts);
}

/////////////////////////////////////////////
//функция изменения цены товара по его номеру 
function updateByIndex(index, newPrice) {
    shopProducts.products[index].price = newPrice;
}

////////////////////////////////
// функция вывода всех продуктов
function showProducts() {
    var show = "";
    for (i = 0; i < shopProducts.products.length; i++) {
        position = i;
        show += "продукт №" + position + " " + shopProducts.products[i].name + " стоит " + shopProducts.products[i].price + "\n";
    }
    if (show != "") alert("В вашем магазение есть следующие продуты \n" + show);
    else alert("В магазине нету продуктов");
}

////////////////////////////////////////////////////////////////////////////////
// функция которая находит продукт по названию, выводит название продукта и цену
function searchProductName(name) {
    counter = shopProducts.products.length;
    for (i = 0; i < shopProducts.products.length; i++) {
        position = shopProducts.products[i].name.indexOf(name);
        if (position !== Number(-1) && !!checkInput(name)) {
            alert("по запросу " + '"' + name + '"' + " найден продукт:\n " + shopProducts.products[i].name + " с ценой: " + shopProducts.products[i].price);
        }
        else {
            counter--;
        }
    }

    if (counter === 0) {
        alert("Такого товара нет в наличии");
    }
    else { };
}

////////////////////////////////////////////////////////////////////////////
// функция которая находит продукт по цене, выводит название продукта и цену
function searchProductPrice(price) {
    var found;
    for (i = 0; i < shopProducts.products.length; i++) {
        if (shopProducts.products[i].price === Number(price)) {
            alert("найден товар с названием: " + '"' + shopProducts.products[i].name + '"' + " с ценой: " + shopProducts.products[i].price);
            found = true;
        }
        else { }
    }
    if (found != true) {
        alert("Товар с ценой " + '"' + price + '"' + " нет в наличии");
    }
    else { }
}




