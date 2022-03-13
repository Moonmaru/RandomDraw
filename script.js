var hw = document.getElementById('hw');
var c, n;
hw.addEventListener('click', function () {
    c = Math.floor(Math.random() * 8) + 1;
    switch(c){
        case 1:
        case 2:
        case 3:
            n = 24;
            break;
        case 4:
            n = 23;
            break;
        case 5:
            n = 28;
            break;
        case 6:
            n = 30;
            break;
        case 7:
            n = 32;
            break;
        case 8:
            n = 29;
    }
    num = Math.floor(Math.random() * n) + 1;
    number = 2000 + 100 * c + num;
    alert(number);
})