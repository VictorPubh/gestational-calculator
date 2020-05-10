var last_day = 0;
var last_month = 0;
var last_year = 0;

const current_year = new Date().getFullYear();


function refreshYear(current_year){

}
((current_year) => {
  const option = [0, 1];
  const dom_year = document.querySelector('#year');

  for(var i = 0; i < option.length; i++){
    const value = current_year - option[i];
    option[i] = new Option(value, value);
    dom_year.append(option[i]);
  }
  
})(current_year);

// Function
function getFill(){
  last_day = document.getElementById('day').value;
  last_month = document.getElementById('month').value;
  last_year = document.getElementById('year').value;

  const date = new Date();
  date.setMonth(last_month); 
  date.setFullYear(last_year);
  date.setDate(last_day);

  var last_date = formatDate(0, last_day + '/' + last_month + '/' + last_year);
  
  // + 280 days
  date.setDate(date.getDate() + 280);
  var current_day = date.getDate();
  var current_month = date.getMonth();
  var current_year = date.getFullYear();

  var birth = formatDate(0, current_day + '/' + current_month + '/' + current_year);
  // Definir Signo
  var sign = getSign(current_day, current_month);

  var fertilization = addDate(14);
  var reliable_test = addDate(28);
  var first_quarter = addDate(84);
  var second_quarter = addDate(189);
  
  /*
  console.log('Parabéns! Seu nenem vai nascer perto do dia ' + birth
  + ' no signo de ' + sign);
  console.log('Sua última menstruação começou no dia ' + last_date);
  console.log('A fecundação ocorreu por volta do dia ' + fertilization
  + ' e um teste de gravidez confiável pode ser feito a partir do dia ' + reliable_test);
  console.log("==== Informações úteis baseadas em sua seleção: ====");
  console.log("O fim do primeiro trimestre foi no dia "+ first_quarter);
  console.log("O fim do segundo trimestre foi no dia "+ second_quarter);
  */
  
  var content_result = document.getElementsByClassName('result')[0];
  content_result.style.display = 'block';

  document.getElementById('birth').innerText = birth;
  document.getElementById('sign').innerText = sign;
  document.getElementById('last_date').innerText = last_date;
  document.getElementById('fertilization').innerText = fertilization;
  document.getElementById('reliable_test').innerText = reliable_test;
  document.getElementById('first_quarter').innerText = first_quarter;
  document.getElementById('second_quarter').innerText = second_quarter;
}

function formatDate(n, str) {
  var partes = str.split('/').map(Number);
  var data = new Date(partes[2], partes[1] - n, partes[0]);
  return data.toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric' })
    .replace("janeiro", "Janeiro")
    .replace("fevereiro", "Fevereiro")
    .replace("março", "Março")
    .replace("abril", "Abril")
    .replace("maio", "Maio")
    .replace("junho", "Junho")
    .replace("julho", "Julho")
    .replace("agosto", "Agosto")
    .replace("setembro", "Setembro")
    .replace("outubro", "Outubro")
    .replace("novembro", "Novembro")
    .replace("dezembro", "Dezembro");
}
  
function addDate(additional){
  var data = new Date();
  data.setMonth(last_month); 
  data.setFullYear(last_year);
  data.setDate(last_day);

  data.setDate(data.getDate() + additional);
  var current_day_fun = data.getDate();
  var current_month_fun = data.getMonth();
  var current_year_fun = data.getFullYear();

  return formatDate(0, current_day_fun + '/' + current_month_fun + '/' + current_year_fun);
}

function getSign(current_day, current_month){
  switch(current_month){
    case 0:
      sign = current_day > 20 ? "Aquário" : "Capricórnio";
    break; 
    case 1:
      sign = current_day > 18 ? "Peixes" : "Aquário";
    break; 
    case 2:
      sign = current_day > 20 ? "Áries" : "Peixes";
    break; 
    case 3:
      sign = current_day > 20 ? "Touro" : "Áries";
    break;
    case 4:
      sign = current_day > 20 ? "Gêmeos" : "Touros";
    break;
    case 5:
      sign = current_day > 20 ? "Câncer" : "Gêmeos";
    break;
    case 6:
      sign = current_day > 22 ? "Leão" : "Câncer";
    break;
    case 7:
      sign = current_day > 22 ? "Virgem" : "Leão";
    break;
    case 8:
      sign = current_day > 22 ? "Libra" : "Virgem";
    break;
    case 9:
      sign = current_day > 22 ? "Escorpião" : "Libra";
    break;
    case 10:
      sign = current_day > 21 ? "Sagitário" : "Escorpião";
    break;
    case 11:
      sign = current_day > 21 ? "Capricórnio" : "Sagitário";
    break;
  }

  return sign;
}