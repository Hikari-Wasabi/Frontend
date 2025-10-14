console.log("hello");

function setarTodosInvisiveis() {
  span_resposta1.style.display = "none";
  span_resposta2.style.display = "none";
  span_resposta3.style.display = "none";
  span_resposta4.style.display = "none";
  span_resposta5.style.display = "none";
  span_resposta6.style.display = "none";
}

setarTodosInvisiveis()

function exibirResposta1() {
    var resposta1 = span_resposta1.value;
    var display = span_resposta1.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta1.style.display = "block";
    console.log("block");
  } else {
    span_resposta1.style.display = "none";
    console.log("none", display);
  }
}

function exibirResposta2() {
    var resposta2 = span_resposta2.value;
    var display = span_resposta2.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta2.style.display = "block";
    console.log("block");
  } else {
    span_resposta2.style.display = "none";
    console.log("none", display);
  }
}

function exibirResposta3() {
    var resposta3 = span_resposta3.value;
    var display = span_resposta3.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta3.style.display = "block";
    console.log("block");
  } else {
    span_resposta3.style.display = "none";
    console.log("none", display);
  }
}

function exibirResposta4() {
    var resposta4 = span_resposta4.value;
    var display = span_resposta4.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta4.style.display = "block";
    console.log("block");
  } else {
    span_resposta4.style.display = "none";
    console.log("none", display);
  }
}

function exibirResposta5() {
    var resposta5 = span_resposta5.value;
    var display = span_resposta5.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta5.style.display = "block";
    console.log("block");
  } else {
    span_resposta5.style.display = "none";
    console.log("none", display);
  }
}

function exibirResposta6() {
    var resposta6 = span_resposta6.value;
    var display = span_resposta6.style.display;
    if (display == "none") {
      setarTodosInvisiveis();
    span_resposta6.style.display = "block";
    console.log("block");
  } else {
    span_resposta6.style.display = "none";
    console.log("none", display);
  }
}
