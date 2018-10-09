function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$ropa = {
    camisetas: ['pegatina','polo','bershka mierda','myself','camisa','gstar(pica)'],
    chaquetas: ['dc verde','hollister gris','jack jones amarilla','nada'],
    pantalones: ['tejanos azul claro','tejanos azul oscuro'],
};

$(function () {
    $('part').each(function () {
        $this = $(this);
        $arrayCosas = $ropa[$this.data('type')];
        $this.html($arrayCosas[rand(0,$arrayCosas.length)]);
        console.log(rand(0,$arrayCosas.length));
        console.log($arrayCosas[rand(0,$arrayCosas.length)]);
        $arrayCosas.forEach(function(valor,key,array){

        });
        $this.css('background-color', 'rgb(' + rand(0, 255) + ',' + rand(0, 255) + ',' + rand(0, 255) + ')')

    });
});