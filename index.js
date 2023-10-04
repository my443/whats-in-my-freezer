function move(current, direction){
    return current + direction;
}

function setDirection(direction){
    let returnValue = 0;

    if (direction == 'left'){
        returnValue = -1; 
    }
    else if (direction == 'right'){
        returnValue = 1;
    }

    return returnValue;
}

// module.exports = {move, setDirection};