/*************************** Инструменты *****************************/
/*************************** Функциии  ******************************/
//проверка на Number
function checkNumber(check) {
    if (String(Number(check)) != "NaN" && check !== "") return true;
    else return false;
}
//проверка на String
function checkString(check) {
    if (String(Number(check)) == "NaN" && check !== "") return true;
    else return false;
}
// проверка на ввод 
function checkInput(check) {
    if (check != "" && check != "none" && check != "null") return true;
    else return false;
}


/////////////////////////////////////
/********* первое задание **********/

var user = {};

function infoUser() {
    var message;
    message = prompt("введите Ваше Имя", "Ваше имя");
    if (!!checkString(message)) {
        user.name = message;
        message = prompt(user.name + ", введите ваш возраст", "21");
        if (!!checkNumber(message)) {
            user.age = Number(message);
        }
        else alert("возраст указан не в том формате ");

    }
    else infoUser();
}

//infoUser();
//console.log(user);

////////////////////////////////////
/********* второе задание**********/
/************вариант №1************/

var list = [];
var i;
var quantity = list.length;

function notebook() {
    var message;

    for (i = 0; i < 5; i++) {
        message = prompt("что записать в список под номером " + (Number(quantity) + Number(1)));
        if (!!checkInput(message)) {
            list.push(message);
            quantity = list.length;
        }
        else if (message === "none") {
            i = 5;
        }
        else {
            alert("если вы не хотите ничего записывать, введите none");
            i--;
        }
    }
}

//notebook();
//console.log(list);
//console.log(list.reverse());


////////////////////////////////////
/********* второе задание**********/
/************вариант №2************/


var list_2 = [];
var message;
var quantity = list_2.length;
var i = 0;

function notebook2() {
    while (true) {
        message = prompt("что записать в список под номером " + (Number(quantity) + Number(1)))
        if (!!checkInput(message)) {
            list_2.push(message);
            quantity = list_2.length;
            i++;
        }
        else if (message == "none") {
            break;
        }

        else if (!checkInput(message)) {
            alert("если вы не хотите ничего записывать, введите none");
        }
        if (i == 5) {
            break;
        }

    }
}
//notebook2();
//console.log(list_2);

////////////////////////////////////
/********* третье задание**********/

var shopProducts = {};
var message;
var quantity;
var n;
shopProducts.products = [];

// функция определяющая название магазина 
function shopName() {
    while (true) {
        message = prompt("Как назавёте свой магазин?", "Название магазина");
        if (!!checkInput(message) && message != "noname") {
            shopProducts.nameShop = message;
            console.log(shopProducts.nameShop);
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
    for (var i = 0; i <= n; i++) {
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
function shop() {
    shopName();
    quantityProduct();
    initProduct();
}
//shop();
//console.log(shopProducts);



/////////////////////////////////////////////////////////////////////////////
/*принимает на вход текст с ошибкой после точки, выводит исправленый текст */

var pos = 0;
var arr;
var message;
function correctionArray() {

    // arr.push(message);
    // преобразовал в строку
    // arr = arr.join(); 

    arr = message;
    // поделил по точке и преобразовал в массив 
    arr = arr.split(". ");
    for (var i = 0; i < arr.length; i++) {
        //поделил предложение по символам 
        arr[i] = arr[i].split("");
        //первый символ в предложении начинается с заглавной буквы
        if (arr[i][pos] != " ") {
            arr[i][pos] = arr[i][pos].toLocaleUpperCase();
        }
        //если пустая позиция
        else if (arr[i][pos] == " ") {
            while (true) {
                if (arr[i][pos] == " ") {
                    pos++;
                }
                else if (pos != " ") {
                    arr[i][pos] = arr[i][pos].toLocaleUpperCase();
                    pos = 0;
                    break;
                }
            }
        }
        //преобразую в строку 
        arr[i] = arr[i].join("");
    }
    //склеил предложения в одну строку
    message = arr.join(". ");
    //преобразовал струку в массив 
    // arr = arr.split();
}

function correctionText() {

    message = prompt("Введите предложение которое нужно исправить");
    //обработка текста
    correctionArray();
    //выводит исправленый текст
    alert(message);
}
//correctionText()




/////////////////////
/*  третье задание */

var position = 0;
var arr;
var message;
// функция, находит позицию слова - исключения 
function stopWord(array, text) {
    position = array.indexOf(text);
}
function textCuckoo() {
    message = prompt("Введите текст, на слов  'кукушка ' текст обрежется ");
    arr = message;
    stopWord(arr, "Кукушка");
    alert(arr.slice(0, position));

}
//textCuckoo()










//создаётся магазин
//функцией init имеет поля имя и продукты
//функция поиска по цене
//функция поиска по названию ++
//функция добавления нового продукта в конец списка 
//функция удаления продута по номеру в списке 
//функция изменения цены товара по его номеру 
//функция вывода всех товаров 
//функция вывода всего магазина в консоли 
//add// find By Price  / find By Name / Delete By Index / update By Index / get All / none


var shop = {
    nameShop: "Название магазина",
    products: [
        { name: "вишня", price: 11 },
        { name: "яблоко", price: 22 },
        { name: "груша", price: 33 }
    ]
};
var position;
var index;
var counter;
var i;
console.log(shop);
// var name = "груша"

// console.log(shop.products[1].name.indexOf("3"));  

// функция которая находит продукт по названию, выводит название продукта и цену
function searchProductName(name) {
    counter = shop.products.length;
    for (i = 0; i < shop.products.length; i++) {
        position = shop.products[i].name.indexOf(name);
        if (position !== Number(-1) && !!checkInput(name)) {
            console.log("по запросу " + '"' + name + '"' + " найден продукт с названием: " + shop.products[i].name + " с ценой: " + shop.products[i].price);
        }
        else {
            counter--;
        }
    }

    if (counter === 0) {
        console.log("Такого товара нет в наличии");
    }
    else { };
}

var text = "в";
//searchProductName(text);

// function searchProductPrice(price) {
// }


var number = 11;

for (i = 0; i < shop.products.length; i++) {
    console.log(shop.products[i]);
    if (shop.products[i].price == Number(number)) {
        // console.log("нашёл " + );

    }

}

