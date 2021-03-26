Saikoro = new Array("saikoro1.png", "saikoro2.png", "saikoro3.png",
    "saikoro4.png", "saikoro5.png", "saikoro6.png");

function change() {
    change = Math.random() * 6;
    Change = Math.floor(change) + 1;
    document.saikoro.src = Saikoro[Change];
} 