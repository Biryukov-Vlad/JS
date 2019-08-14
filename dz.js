// VAR
var message,
    position,
    counter,
    quantity,
    clone,
    arr,
    i,
    n;
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
    if (check != "" && check != "none" && check != "null" && check != null) return true;
    else return false;
}


/////////////////////////////////////
/********* первое задание **********/

var user = {};

function infoUser() {
    message = prompt("введите Ваше Имя", "Ваше имя");
    if (checkString(message)) {
        user.name = message;
        message = prompt(user.name + ", введите ваш возраст", "21");
        if (checkNumber(message)) {
            user.age = Number(message);
            console.log(user);
        }
        else alert("возраст указан не в том формате "), infoUser();

    }
    else infoUser();
}

// infoUser();


////////////////////////////////////
/********* второе задание**********/
/************вариант №1************/

var list = [];
quantity = list.length;

function notebook() {
    for (i = 0; i < 5; i++) {
        message = prompt("что записать в список под номером " + (Number(i) + Number(1)));
        if (checkInput(message)) {
            list.push(message);
        }
        else if (message === "none") {
            i = 5;
        }
        else {
            alert("если вы не хотите ничего записывать, введите none");
            i--;
        }
    }
    console.log(list);
    console.log(list.reverse());
}

// notebook();



////////////////////////////////////
/********* второе задание**********/
/************вариант №2************/


var list_2 = [];
var message;
quantity = list_2.length;

function notebook2() {
    i = 0;
    while (true) {
        message = prompt("что записать в список под номером " + (Number(i) + Number(1)))
        if (checkInput(message)) {
            list_2.push(message);
            // quantity = list_2.length;
            i++;
            if (i == 5) {
                console.log(list_2);
                console.log(list_2.reverse());
                break;
            }
        }
        else if (message == "none") {
            break;
        }

        else if (!checkInput(message)) {
            alert("если вы не хотите ничего записывать, введите none");
        }    
    }
}

// notebook2();


/////////////////////////////////////////////////////////////////////////////
/*принимает на вход текст с ошибкой после точки, выводит исправленый текст */




function correctionArray() {
    position = 0;
    arr = message;
    // поделил по точке и преобразовал в массив 
    arr = arr.split(". ");
    for (i = 0; i < arr.length; i++) {
        //поделил предложение по символам 
        arr[i] = arr[i].split("");
        //первый символ в предложении начинается с заглавной буквы
        if (arr[i][position] != " ") {
            arr[i][position] = arr[i][position].toLocaleUpperCase();
        }
        //если пустая позиция
        else if (arr[i][position] == " ") {
            while (true) {
                if (arr[i][position] == " ") {
                    position++;
                }
                else if (position != " ") {
                    arr[i][position] = arr[i][position].toLocaleUpperCase();
                    break;
                }
            }
        }
        //преобразую в строку 
        arr[i] = arr[i].join("");
    }
    //склеил предложения в одну строку
    message = arr.join(". ");
}

function correctionText() {
    message = prompt("Введите предложение которое нужно исправить");
    //обработка текста
    correctionArray();
    //выводит исправленый текст
    alert(message);
}
// correctionText()



/////////////////////
/*  третье задание */

position = 0;
// функция, находит позицию слова - исключения 
function stopWord(array, text) {
    position = array.indexOf(text);
}
function textCuckoo() {
    message = prompt("Введите текст, на слове  'Кукушка ' текст обрежется ");
    arr = message;
    stopWord(arr, "Кукушка");
    alert(arr.slice(0, position));

}
// textCuckoo()


