let a = +prompt('Введите число');

function pal(num, count){
    count = count || 0;
    let str = num.toString();

    let strReverse = str.split('').reverse().join('');


if(str === strReverse){
    return{
        result:num,
        steps:count,
    };
}

return pal(num + Number(strReverse), count + 1);
}

console.log(pal(a));