function findOps(s) {
    for (var i = 0; i < s.length; i++) {
      if (s[i] == "+")
        return "+";
      if (s[i] == "-")
        return "-";
      if (s[i] == "*")
        return "*";
      if (s[i] == "/")
        return "/";
    }
  }
  var input = '';
  function calc() {
    var dom = $("#input");
    input = dom.val();
    try {
      switch (findOps(input)) {
        case "+":
          var a = input.split("+");
          var x = parseFloat(a[0]);
          var y = parseFloat(a[1]);
          var res = x + y;
          if (!isNaN(res)) {
            setTimeout(function() {
              dom.val(res.toFixed(3));
              dom.get(0).setSelectionRange(0, 0);
            }, 150);
  
          }
          break;
        case "-":
          var a = input.split("-");
          var x = parseFloat(a[0]);
          var y = parseFloat(a[1]);
          var res = x - y;
          if (!isNaN(res)) {
            setTimeout(function() {
              dom.val(res.toFixed(3));
              dom.get(0).setSelectionRange(0, 0);
            }, 150);
  
          }
          break;
        case "*":
          var a = input.split("*");
          var x = parseFloat(a[0]);
          var y = parseFloat(a[1]);
          var res = x * y;
          if (!isNaN(res)) {
            setTimeout(function() {
              dom.val(res.toFixed(3));
              dom.get(0).setSelectionRange(0, 0);
            }, 150);
  
          }
          break;
        case "/":
          var a = input.split("/");
          var x = parseFloat(a[0]);
          var y = parseFloat(a[1]);
          var res = x / y;
          if (!isNaN(res)) {
            setTimeout(function() {
              dom.val(res.toFixed(3));
              dom.get(0).setSelectionRange(0, 0);
            }, 150);
  
          }
          break;
      }
  
    } catch (err) {
      alert("catched¡");
    }
  
  }