console.log("в данном случае null преобразуется в строку и сравнивается как строка, при строгом неравенсте  String(null) === 'null' выводит ", String(null) === "null");
console.log("если узнать тип данных null с помощью typeof, выведет", typeof null, "но при любом сравнении null с object выведет", null === Object(null), "это общепризнаная ошибка js, которую нельзя исправлять так как изменение этой ошибки сломает множество сайтов");
console.log("при не строгом сравнении", undefined == null);
console.log("в данном случае при сравнении разных тип в данных выводит (числа 1 и строки '1' ) выводит ", 1 === +"1", "потому что перед строкой стоит +, и js автоматически пытается привести то что стот после + к числу ");
console.log("при не строгом сравнении числа и строки с идентичным значением выводит ", 11 == "11", " потому что не сравниваются типы данных,при строгом выводит", 11 === "11", "потому что при строгом сравниваются типы данных в том числе");


var message,
    value_1,
    value_2,
    check_1,
    check_2;

message = prompt("какие типы данных вам нужно сравнить между собой? \nможно сравнивать: \nчисла \nстроки \nвыведет наибольшее ");

if (message === "") {
    console.log("вы ничего не ввели");
}
else if (message == "числа") {
    message = prompt("Введите первое значение");
    value_1 = message;
    message = prompt("Введите второе значение");
    value_2 = message;
    check_1 = + value_1;
    check_2 = + value_2;


    if (check_1 === Number(check_1) && check_2 === Number(check_2)) {
        if (check_1 == "" && check_2 == "") {
            console.log("вы ничего не ввели")
        }
        else if (check_1 == "" || check_2 == "") {
            console.log("вы не ввели один из аргументов")
        }
        else if (check_1 !== Number(check_1) && check_2 === Number(check_2)) {
            console.log("первый аргумент строка, а второй аргумент - число, приведите идентичные типы данных")
        }
        else if (check_1 === Number(check_1) && check_2 !== Number(check_2)) {
            console.log("первый аргумент число, а второй аргумент - строка, приведите идентичные типы данных")
        }
        else if (check_1 > check_2) {
            console.log(value_1)
        }
        else if (check_1 < check_2) {
            console.log(value_2)
        }
        else if (check_1 == check_2) {
            console.log("числа ровны")
        }
        else {
            console.log("что то не так")
        }
    }
}
else if (message == "строки") {
    message = prompt("введите первую строку");
    value_1 = message;
    message = prompt("введите вторую строку");
    value_2 = message;
    check_1 = + value_1;
    check_2 = + value_2;
    // фильтр
    if (check_1 == "" && check_2 == "") {
        console.log("вы ничего не ввели")
    }
    else if (check_1 == "" || check_2 == "") {
        console.log("вы не ввели один из аргументов")
    }
    else if (check_1 !== Number(check_1) && check_2 === Number(check_2)) {
        console.log("первый аргумент строка, а второй аргумент - число, приведите идентичные типы данных")
    }
    else if (check_1 === Number(check_1) && check_2 !== Number(check_2)) {
        console.log("первый аргумент число, а второй аргумент - строка, приведите идентичные типы данных")
    }
    else if (check_1 === Number(check_1) && check_2 === Number(check_2)) {
        console.log("тут мы сравниваем строки")
    }
    //сравнение букв
    else if (value_1 !== Number(value_1) && value_2 !== Number(value_2)) {

        if (value_1 > value_2) {
            console.log(value_1);
        }
        else if (value_1 < value_2) {
            console.log(value_2)
        }
        else if (value_1 === value_2) {
            console.log("буквы равны")
        }
        else {
            console.log("что то не так")
        }
    }
    else {
        console.log("что то  пошло не так")
    }
}