function pow() {
    let number = +prompt('Введите число');
    let degree = +prompt('Введите степень');
    alert(number**degree);    
    main();
}
//НОД
function gcd() {
    let number_1 = +prompt('Введите первое число');
    let number_2 = +prompt('Введите второе число');
    let answer = 1;
    if(number_1 > 0 && number_2 > 0){
    while (number_1 > 0 && number_2 > 0) {
      if (number_1 > number_2) {
        number_1 %= number_2;
      }
      else {
        number_2 %= number_1;
      }
    }
    answer = number_1 + number_2;
    alert(answer); 
    }
    else{
        alert('Вы ввели отрицательное число или 0'); 
    }      
    main();
}
//наименьшая цифра
function minDigit() {
    let number = +prompt('Введите число');
    let array = Array.from(number.toString(), Number)
    console.log(array);
    bubbleSortConcept(array);
}

function bubbleSortConcept(array) {
    for (let j = array.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
        }
      }
    }
    console.log(array);
    alert(array[0]);
    main();
}
//окончания
function pluralizeRecords() {
    let number = +prompt('Введите кол-во записей');
    var string = number.toString();
    var lastChar_two_symbols = string.slice(string.length - 2);
    console.log(lastChar_two_symbols);

    if(lastChar_two_symbols != 11 && lastChar_two_symbols != 12 && lastChar_two_symbols != 13 && lastChar_two_symbols != 14
        && lastChar_two_symbols != 15 && lastChar_two_symbols != 16 
        && lastChar_two_symbols != 17 && lastChar_two_symbols != 18
        && lastChar_two_symbols != 19 && lastChar_two_symbols != 0){
    var lastChar_one_symbols = string.slice(string.length - 1);

    if(lastChar_one_symbols == 1){
        alert('В результате выполнения запроса было найдено '+number+' запись');
    }

    if(lastChar_one_symbols == 2 || lastChar_one_symbols == 3 || lastChar_one_symbols == 4){
        alert('В результате выполнения запроса было найдено '+number+' записи');
    }
    if(lastChar_one_symbols == 5 || lastChar_one_symbols == 6 || lastChar_one_symbols == 7 || lastChar_one_symbols == 8 || lastChar_one_symbols == 9 || lastChar_one_symbols == 0){
        alert('В результате выполнения запроса было найдено '+number+' записей');
    }  
    }else{
        var lastChar_one_symbols = string.slice(string.length - 1);
        if(lastChar_two_symbols => 11 && lastChar_two_symbols <= 19 && lastChar_two_symbols == 0){
            alert('В результате выполнения запроса было найдено '+number+' записей');
            }
    }
    main();
}
//Числа фиб
function  fibb(){
    let number = +prompt('Введите число');
    if(number > 0 && number <= 1000){
    var fibonacci = [0, 1]; // Первые два элемента последовательности Фибоначчи
    number = number + 1;
    for (i = 2; i < number; i ++) {
      // Получаем i-й элемент последовательности как сумму предыдущих двух
      fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    alert(fibonacci.slice(0,number));
    }else{
    alert('Неправильный ввод');  
    }
    main(); 
}

function main() {
    let number_function = +prompt('Введите функцию: 1 - возведение в степень, 2 - НОД, 3 - наименьшая цифра, 4 - Pluralization, 5 - числа Фибоначчи');
    if(number_function == 1){
        pow();
    }
    if(number_function == 2){
        gcd();
    }
    if(number_function == 3){
        minDigit();
    }
    if(number_function == 4){
        pluralizeRecords();
    }
    if(number_function == 5){
        fibb();
    }
    if(number_function > 5 || number_function < 1){
        alert('Неправильный ввод');  
        main();
    }
}
main();