<?php
/*
* Plugin Name: 	Calculadora Gestacional
* Plugin URI: 	http//github.com/victorpubh/gestational-calculator
* Description: 	Este plugin foi desenvolvido para facilitar a utilização do Widget Calculadora Gestacional, que agora pode ser incorporado através de Shortcode.
* License:		GPL v2 or later
* License URI:  https://www.gnu.org/licenses/gpl-2.0.html
* Author: 		Studio OtBox
* Author URI: 	http://instagram.com/studio_otbox
* Version: 		1.0
*/

wp_register_script('calculator', plugin_dir_url(__FILE__) . './js/calculator.js', null, '1.0', true);
wp_enqueue_script('calculator');

function gestationalCalculator(){
?>

<p id="title"> Qual foi o primeiro dia da sua última menstruação? <p>
  <select id="day">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="30">31</option>
  </select>
  <select id="month">
    <option value="0">Janeiro</option>
    <option value="1">Fevereiro</option>
    <option value="2">Março</option>
    <option value="3">Abril</option>
    <option value="4">Maio</option>
    <option value="5">Junho</option>
    <option value="6">Julho</option>
    <option value="7">Agosto</option>
    <option value="8">Setembro</option>
    <option value="9">Outubro</option>
    <option value="10">Novembro</option>
    <option value="11">Dezembro</option>
  </select>
  <select id="year">
  </select>

<input type="button" value="Calcular" onclick="getFill()">

<div class="result" style="display: none;">
  <ul>
    <li>Parabéns! Seu nenem vai nascer perto do dia <b id="birth"></b> no signo de <b id="sign"></b></li>
    <li>Sua última menstruação começou no dia <b id="last_date"></b></li>
    <li>A fecundação ocorreu por volta do dia <b id="fertilization"></b> e um teste de gravidez confiável
    pode ser feito a partir do dia <b id="reliable_test"></b></li>
  </ul>
  <b> Informações úteis baseadas em sua seleção: </b>
  <ul>
    <li>O fim do primeiro trimestre foi no dia <b id="first_quarter"></b></li>
    <li>O fim do segundo trimestre foi no dia <b id="second_quarter"></b></li>
  </ul>
</div>

<?php
}

add_shortcode('gestationalCalculator', 'gestationalCalculator');