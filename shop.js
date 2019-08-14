//VAR
var message,
    position,
    counter,
    index,
    clone,
    i,
    shop,
    newName,
    newPrice;
////////////////////////////////////////////
/**************** магазин *****************/

init();


function init() {
    shop = {
        products: [],
        shopName: shopName,
        quantityProduct: quantityProduct,
        initProduct: initProduct,
        shopFunction: shopFunction,

        // функции магазина
        searchProductPrice: searchProductPrice, //функция поиска по цене 
        searchProductName: searchProductName,   //функция поиска по названию
        showProducts: showProducts,             //функция вывода всех товаров
        updateByIndex: updateByIndex,           //функция изменения цены товара по его номеру 
        addProduct: addProduct,                 //функция добавления нового продукта в конец списка
        deleteByIndex: deleteByIndex,           //функция удаления продута по номеру в списке
        exitStore: exitStore                    //функция выхода из магазина и вывода всего магазина в консоли
    };
    // имя
    shop.shopName();
    // количество продуктов
    shop.quantityProduct();
    // добавление продукта
    shop.initProduct();
    // функции магазина
    shop.shopFunction()
}
// функция определяющая название магазина 
function shopName() {
    while (true) {
        message = prompt("Как назавёте свой магазин?", "Название магазина");
        if (checkInput(message) && message != "noname") {
            shop.name = message;
            break;
        }
        else if (message == "noname") {
            shop.name = "";
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
        if (checkNumber(n) && n >= 0) {
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
        shop.products[i] = {};
        message = prompt("Название продукта " + (i + 1), "Название продукта");

        if (checkInput(message)) {
            shop.products[i].name = message;
            message = prompt("Укажите цену продукта: " + shop.products[i].name, "123");
            if (checkNumber(message) && Number(message) >= 0.1) {
                shop.products[i].price = Number(message);
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
        // выйти и вывести в консоль весь магазин 
        if (message == "none") {
            alert("All the best!)");
            shop.exitStore();
            break;
        }

        // ищет продукт по названию
        else if (message == "searchProductName") {
            message = prompt("Введите название продукта который вы ищете");
            if (checkInput(message)) {
                shop.searchProductName(message);
            }
            else {
                alert("Вы не ввели название продукта");
            }
        }
        // ищет продукт по цене
        else if (message == "searchProductPrice") {
            message = prompt("Введите цену продукта который вы ищете");
            if (checkNumber(message) && checkInput(message)) {
                shop.searchProductPrice(message);
            }

            else {
                alert("Вы не назвали цену");
            }
        }
        // добавляет новый продукт
        else if (message == "addProduct") {
            while (true) {
                message = prompt("Введите название продукта");

                if (checkInput(message)) {
                    newName = message;
                    message = prompt("Введите цену продукта", "11");
                    if (checkNumber(message)) {
                        newPrice = message;
                        shop.addProduct(newName, newPrice);
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
            shop.showProducts();
        }
        // меняет цену продукта по индексу
        else if (message == "updateByIndex") {
            message = prompt("Укажите позицию продукта");
            if (shop.products[message]) {
                index = message;
                message = prompt("Введите новую цену продукта: " + '"' + shop.products[message].name + '"');
                if (checkNumber(message)) {
                    newPrice = message;
                    shop.updateByIndex(index, newPrice);
                    alert("Вы успешно изменили цену продукта");
                }
                else {
                    alert("Вы не ввели новую цену продукта, изменение отменено");
                }
            }
            else if (!shop.products[message]) {
                alert("Такого продукта нет");
            }
        }
        // Удалить продукт по индексу
        else if (message == "deleteByIndex") {
            message = prompt("Укажите позици продукта который нужно удалить");
            if (shop.products[message]) {
                index = Number(message);
                clone = shop.products[index].name;
                shop.deleteByIndex(index);
                alert("Продукт " + '"' + clone + '"' + " удалён");
            }
            else if (!shop.products[message]) {
                alert("Такого продукта нет");
            }
        }
    }
}


/////////////////////////////////////////////
//функция удаления продута по номеру в списке 
function deleteByIndex(index) {
    shop.products.splice(index, 1);
}

///////////////////////////////////////////////////
//функция добавления нового продукта в конец списка 
function addProduct(name, price) {
    shop.products.push({ name: name, price: Number(price) });
}

/////////////////////////////////////////
//функция вывода всего магазина в консоли 
function exitStore() {
    var show = "";
    for (i = 0; i < shop.products.length; i++) {
        position = i;
        show += "продукт №:" + position + " " + shop.products[i].name + ", стоит " + shop.products[i].price + "\n";
    }
    console.log("Название магазина: " + shop.name);
    if (show != "") console.log("В вашем магазение есть следующие продуты \n" + show);
    else console.log("В магазине нету продуктов");
    console.log(shop);
}

/////////////////////////////////////////////
//функция изменения цены товара по его номеру 
function updateByIndex(index, newPrice) {
    shop.products[index].price = newPrice;
}

////////////////////////////////
// функция вывода всех продуктов
function showProducts() {
    var show = "";
    for (i = 0; i < shop.products.length; i++) {
        position = i;
        show += "продукт №:" + position + " " + shop.products[i].name + ", стоит " + shop.products[i].price + "\n";
    }
    if (show != "") alert("В вашем магазение есть следующие продуты \n" + show);
    else alert("В магазине нету продуктов");
}

////////////////////////////////////////////////////////////////////////////////
// функция которая находит продукт по названию, выводит название продукта и цену
function searchProductName(name) {
    counter = shop.products.length;
    for (i = 0; i < shop.products.length; i++) {
        position = shop.products[i].name.indexOf(name);
        if (position !== Number(-1) && checkInput(name)) {
            alert("по запросу " + '"' + name + '"' + " найден продукт:\n " + shop.products[i].name + " с ценой: " + shop.products[i].price);
        }
        else {
            counter--;
        }
    }

    if (counter === 0) {
        alert("Такого товара нет в наличии");
    }
}

////////////////////////////////////////////////////////////////////////////
// функция которая находит продукт по цене, выводит название продукта и цену
function searchProductPrice(price) {
    var found;
    for (i = 0; i < shop.products.length; i++) {
        if (shop.products[i].price === Number(price)) {
            alert("найден товар с названием: " + '"' + shop.products[i].name + '"' + " с ценой: " + shop.products[i].price);
            found = true;
        }
    }
    if (!found) {
        alert("Товар с ценой " + '"' + price + '"' + " нет в наличии");
    }
}

