function duplicar(n) {
    console.log(n * 2);

    function triplicar() {
        console.log(n * 3);
        function quadruplicar() {
            console.log(n * 4);

        }
        return quadruplicar;
    }
    return triplicar;
}

var triplicar = duplicar(8);
var quadruplicar = triplicar(2);
quadruplicar(2);