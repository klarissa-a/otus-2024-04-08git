const kolobok = (name) => {
    //если имя = дедушка, то выполняем код внутри фигурных скобоок//
    if (name === 'дедушка') {
        return 'Я от дедушки ушёл';
    }

    if (name === 'лиса') {
        return 'Меня съели';
    }
    if (name === 'заяц') {
        return 'Я укатился';
    }
}
//вызываем функцию и выводим ее результат в консоль
console.log(kolobok('дедушка'));
console.log(kolobok('лиса'));
console.log(kolobok('заяц'));





const newYear = (name) => {

    return `${name}! ${name}! ${name}!`;

}
//вызываем функцию и выводим ее результат в консоль
console.log(newYear('Снегурочка'));
console.log(newYear('Дед Мороз'));



