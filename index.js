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


if (typeof window === 'undefined') {
    // If the window is defined, then it is being used on the web. 
    // Otherwise, do the exports so that you can do testing, ect. 
    module.exports = {move, setDirection};
}