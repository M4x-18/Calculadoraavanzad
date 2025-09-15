
    function calcular(op) {
      let input = document.getElementById("numero");
      let n = parseFloat(input.value);
      let res;

      // Validación: si no hay número ingresado
      if (isNaN(n)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese un número válido.";
        return;
      }

      switch(op) {
        case "factorial":
          res = 1;
          for (let i = 1; i <= n; i++) res *= i;
          break;
        case "inverso":
          res = n !== 0 ? 1 / n : "No definido (división por 0)";
          break;
        case "log":
          res = n > 0 ? Math.log(n).toFixed(4) : "No definido (n ≤ 0)";
          break;
        case "negacion":
          res = -n;
          break;
      }

      document.getElementById("resultado").textContent = "Resultado: " + res;
    }

    // Efecto extra: limpiar resultado si se borra el input
    document.getElementById("numero").addEventListener("input", function() {
      if (this.value === "") {
        document.getElementById("resultado").textContent = "Resultado: ";
      }
    });