const add =(no1, no2) => {
    let sum =no1+no2;
    console.log('Sum is:' , sum);
}
const mul =(no1, no2) => {
    let mul =no1*no2;
    console.log('Multiplication is:' , mul);
}
const Calculator =() => {
    console.log("total number of arguments:" +process.argv.length);
    for ( let i = 0; i < process.argv.length; i++) {
        console.log("argv[" + i + "] is:" + process.argv[i]);
    }
    add(54, 87);
    mul(43, 22);
}
Calculator();