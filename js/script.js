function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('image')
    var date = new Date();
    var hour = date.getHours();
    
    if (hour >= 0 && hour < 12){
        msg.innerHTML = `Agora são ${hour} horas. <br>BOM DIA!!!</br>`
        img.src = './img/morning.jpg';
        document.body.style.background = '#e2cd9f';
    } else if (hour >= 12 && hour <= 18) {
        msg.innerHTML = `Agora são ${hour} horas. <br>BOA TARDE!!!</br>`
        img.src = './img/afternoon.jpg';
        document.body.style.background = '#b9846f';
    } else {
        msg.innerHTML = `Agora são ${hour} horas. <br>BOA NOITE!!!</br>`
        img.src = './img/night.jpg';
        document.body.style.background = '#515154';
    }
}

