export default class Practicas {
  static Ejercicio1() {
    console.log("Ejercicio 01");

    {
      const a = 1;
      let b = 2;
      var c = 3;
    }

    console.log(typeof a);
    console.log(typeof b);
    console.log(c); // 3 ← var “escapa” del bloque
  }

  static Ejercicio2() {
    console.log("Ejercicio 02");

    console.log(x);
    let x = 10;

    console.log(y);
    var y = 10;
  }

  static Ejercicio3() {
    console.log("Ejercicio 03");

    const user = { id: 1, name: "Ana" };
    user.name = "Ana María";
    // user = { id: 2 } // No puedes reasignar la referencia

    const nums = [1, 2, 3];
    nums.push(4);
    // nums = [] // No puedes reasignar
  }

  static Ejercicio4() {
    console.log("Ejercicio 04");

    const a = 1;
    // const a = 2; // redeclaración

    let b = 1;
    b = 2;
    // let b = 3; // redeclaración en el mismo bloque

    var c = 1;
    var c = 2;
  }

  static Ejercicio5() {
    console.log("Ejercicio 05");

    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log("var i =", i), 0);
    }

    for (let j = 0; j < 3; j++) {
      setTimeout(() => console.log("let j =", j), 0);
    }
  }
}
