export  function formateDateTime(timeStamp) {
    
    const date = new Date(timeStamp);

    const y =addZero(date.getFullYear()),
        m = addZero(date.getMonth()),
        d = addZero(date.getDate()),
        h = addZero(date.getHours()),
        i = addZero(date.getMinutes()),
        s = addZero(date.getSeconds());
    
    return `${y}.${m}.${d} ${h}:${i}:${s}`;
}

function addZero(value) {
    value = value < 10 ? ('0' + value) : value;
    return value;
}