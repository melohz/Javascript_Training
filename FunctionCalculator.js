window.onload = function() {
  var userValue = document.getElementById("userValue");
  var display = document.getElementById("display");
  var btnabs = document.getElementById("abs");
  btnabs.onclick = abs;
  var btnacos = document.getElementById("acos");
  btnacos.onclick = acos;
  var btnasin = document.getElementById("asin");
  btnasin.onclick = asin;
  var btnasinh = document.getElementById("asinh");
  btnasinh.onclick = asinh;
  var btnatan = document.getElementById("atan");
  btnatan.onclick = atan;
  var btnatan2 = document.getElementById("atan2");
  btnatan2.onclick = atan2;
  var btnatanh = document.getElementById("atanh");
  btnatanh.onclick = atanh;
  var btncbrt = document.getElementById("cbrt");
  btncbrt.onclick = cbrt;
  var btnceil = document.getElementById("ceil");
  btnceil.onclick = ceil;
  var btnclz32 = document.getElementById("clz32");
  btnclz32.onclick = clz32;
  var btncos = document.getElementById("cos");
  btncos.onclick = cos;
  var btncosh = document.getElementById("cosh");
  btncosh.onclick = cosh;
  var btnexp = document.getElementById("exp");
  btnexp.onclick = exp;
  var btnexpm1 = document.getElementById("expm1");
  btnexpm1.onclick = expm1;
  var btnfloor = document.getElementById("floor");
  btnfloor.onclick = floor;
  var btnfround = document.getElementById("fround");
  btnfround.onclick = fround;
  var btnhypot = document.getElementById("hypot");
  btnhypot.onclick = hypot;
  var btnimul = document.getElementById("imul");
  btnimul.onclick = imul;
  var btnlog = document.getElementById("log");
  btnlog.onclick = log;
  var btnlog10 = document.getElementById("log10");
  btnlog10.onclick = log10;
  var btnlog1p = document.getElementById("log1p");
  btnlog1p.onclick = log1p;
  var btnmax = document.getElementById("max");
  btnmax.onclick = max;
  var btnmin = document.getElementById("min");
  btnmin.onclick = min;
  var btnpow = document.getElementById("pow");
  btnpow.onclick = pow;
  var btnrandom = document.getElementById("random");
  btnrandom.onclick = random;
  var btnround = document.getElementById("round");
  btnround.onclick = round;
  var btnsign = document.getElementById("sign");
  btnsign.onclick = sign;
  var btnsin = document.getElementById("sin");
  btnsin.onclick = sin;
  var btnsinh = document.getElementById("sinh");
  btnsinh.onclick = sinh;
  var btnsqrt = document.getElementById("sqrt");
  btnsqrt.onclick = sqrt;
  var btntan = document.getElementById("tan");
  btntan.onclick = tan;
  var btntanh = document.getElementById("tanh");
  btntanh.onclick = tanh;
  var btntrunc = document.getElementById("trunc");  
  btntrunc.onclick = trunc;

  function abs() {
    var rslt = Math.abs(userValue.value);
    display.innerHTML = rslt;
  }
  function acos() {
    var rslt = Math.acos(userValue.value);
    display.innerHTML = rslt;
  }
  function asin() {
    var rslt = Math.asin(userValue.value);
    display.innerHTML = rslt;
  }
  function asinh() {
    var rslt = Math.asinh(userValue.value);
    display.innerHTML = rslt;
  }
  function atan() {
    var rslt = Math.atan(userValue.value);
    display.innerHTML = rslt;
  }
  function atan2() {
    var rslt = Math.atan2(userValue.value);
    display.innerHTML = rslt;
  }
  function atanh() {
    var rslt = Math.atanh(userValue.value)
    display.innerHTML = rslt;
  }
  function cbrt() {
    var rslt = Math.cbrt(userValue.value);
    display.innerHTML = rslt;
  }
  function ceil() {
    var rslt = Math.ceil(userValue.value);
    display.innerHTML = rslt;
  }
  function clz32() {
    var rslt = Math.clz32(userValue.value);
    display.innerHTML = rslt;
  }
  function cos() {
    var rslt = Math.cos(userValue.value);
    display.innerHTML = rslt;
  }
  function cosh() {
    var rslt = Math.cosh(userValue.value);
    display.innerHTML = rslt;
  }
  function exp() {
    var rslt = Math.exp(userValue);
    display.innerHTML = rslt;
  }
  function expm1() {
    var rslt = Math.expm1(userValue.value);
    display.innerHTML = rslt;
  }
  function floor() {
    var rslt = Math.floor(userValue.value);
    display.innerHTML = rslt;
  }
  function fround() {
    var rslt = Math.fround(userValue.value);
    display.innerHTML = rslt;
  }
  function hypot() {
    var rslt = Math.hypot(userValue.value);
    display.innerHTML = rslt;
  }
  function imul() {
    var rslt = Math.imul(userValue.value);
    display.innerHTML = rslt;
  }
  function log() {
    var rslt = Math.log(userValue.value);
    display.innerHTML = rslt;
  }
  function log10() {
    var rslt = Math.log10(userValue.value);
    display.innerHTML = rslt;
  }
  function log1p() {
    var rslt = Math.log1p(userValue.value);
    display.innerHTML = rslt;
  }
  function max() {
    var rslt = Math.max(userValue.value);
    display.innerHTML = rslt;
  }
    function min() {
      var rslt = Math.min(userValue.value);
    display.innerHTML = rslt;
    }
    function pow() {
    var rslt = Math.pow(userValue, secondValue)
    display.innerHTML = rslt;
    }
    function random() {
    var rslt = Math.random()
    display.innerHTML = rslt;
    }
    function round() {
    var rslt = Math.round(userValue.value);
    display.innerHTML = rslt;
    }
    function sign() {
    var rslt = Math.sign(userValue.value);
    display.innerHTML = rslt;
    }
    function sin() {
    var rslt = Math.sin(userValue.value);
    display.innerHTML = rslt;
    }
    function sinh() {
    var rslt = Math.sinh(userValue.value)
    display.innerHTML = rslt;
    }
    function sqrt() {
    var rslt = Math.sqrt(userValue.value);
    display.innerHTML = rslt;
    }
    function tan() {
    var rslt = Math.tan(userValue);
    display.innerHTML = rslt;
    }
    function tanh() {
    var rslt = Math.tanh(userValue);
    display.innerHTML = rslt;
    }
    function trunc() {
    var rslt = Math.trunc(userValue.value);
    display.innerHTML = rslt;
    }
}