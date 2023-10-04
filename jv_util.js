function print(value, header){
    if (header != null){
        console.log(header + ' -- ' + value);
    }
    else if (value == undefined){
        console.log('\n');
    }
    else {
        console.log(value);
    }
}

module.exports = print;

// print('hello world');
// print('hello world', 'header')
