var ExtratoHistoricoSaidas = [];
var ExtratoHistoricoDepositos = [];

var boasvindas;
var serviços = document.querySelector('div#ContainerPrincipal');
var SaldoDaConta = 300;
var ValorDaOperação = 0;

function iniciarbanco() {
  var NomeUsuario = document.querySelector('input[name="nome"]').value;
  if (NomeUsuario === "") {
    document.querySelector('p#NomeNaoInserido').innerHTML = 'Por favor, insira seu nome!';
    document.querySelector('p#NomeNaoInserido').style.color = 'red';
  } else {
    serviços.innerHTML = `

    <div id="TituloDoMenuAtual">
      <h1 id="TextoDoMenuAtual"></h1>
    </div>

    <div id="MenuDeOpções1">
      <div id="OperaçãoDeSaque" class="OpçõesMenus" onclick="IniciarSaque()">Saque</div>
      <div id="OpçãoExtratoeSaldo" onclick="iniciarExtratoeSaldo()" class="OpçõesMenus">Saldo e Extrato</div>
      <div id="IniciarDeposito" class="OpçõesMenus" onclick="IniciarDeposito()">Depósito</div>
    </div>

    <div id="MenuDeOpções2">
      <div id="OpçãoTransferir" class="OpçõesMenus" onclick="IniciarTransferência()">Transferência</div>
      <div id="OpçãoCredito" class="OpçõesMenus">Crédidto</div>
      <div id="OpçãoSuporte" class="OpçõesMenus">Suporte</div>
    </div>
    <div id="VoltarAoCampoNome">
    <input type="button" value="Voltar" id="BtVoltaAoCampoNome" onclick="VoltarAoCampoNome()">
    </div>
    <input type="button" value="Sair" id="Sair1" onclick="Sair()">
    `;

    boasvindas = document.querySelector('h1#TextoDoMenuAtual').innerHTML = `Olá, ${NomeUsuario}! Qual é o serviço desejado?`;
  }
};


function VoltarAoCampoNome() {

  serviços.innerHTML = `
  
  <div id="PrimeiroBloco">
              <h1>Banco Passos</h1> 
              <p id="NomeNaoInserido"></p>
              <input type="text" placeholder="Digite seu nome" name="nome" id="campo-nome">
              <br> <br>
              <input type="button" value="Começar" id="ServiçosDoBanco" onclick="iniciarbanco()">
              <div id="VisualDoBanco2"><img src="imgs/ArteBanco2.png"></div>
              <div id="VisualDoBanco"><img src="imgs/3.png"></div>
          </div>
          <input type="button" value="Sair" id="Sair" onclick="Sair()">
  
  `
};

// Função pra tetornar às opções de serviços

function RetornarAoMenu() {
  

  serviços.innerHTML = `

    <div id="TituloDoMenuAtual">
      <h1 id="TextoDoMenuAtual"></h1>
    </div>

    <div id="MenuDeOpções1">
      <div id="OperaçãoDeSaque" class="OpçõesMenus" onclick="IniciarSaque()">Saque</div>
      <div id="OpçãoExtratoeSaldo" onclick="iniciarExtratoeSaldo()" class="OpçõesMenus">Saldo e Extrato</div>
      <div id="IniciarDeposito" class="OpçõesMenus" onclick="IniciarDeposito()">Depósito</div>
    </div>

    <div id="MenuDeOpções2">
      <div id="OpçãoTransferir" class="OpçõesMenus" onclick="IniciarTransferência()">Transferência</div>
      <div id="OpçãoCredito" class="OpçõesMenus">Crédidto</div>
      <div id="OpçãoSuporte" class="OpçõesMenus">Suporte</div>
    </div>
    <div id="VoltarAoCampoNome">
    <input type="button" value="Voltar" id="BtVoltaAoCampoNome" onclick="VoltarAoCampoNome()">
    </div>
    <input type="button" value="Sair" id="Sair1" onclick="Sair()">
    `;
  document.querySelector('h1#TextoDoMenuAtual').innerHTML = boasvindas;
};




// inicio das funções pro serviço de saque

function IniciarSaque() {
  serviços.innerHTML = `

<div id="MenuDaOperação">

<h1 id="TituloDoMenuDaOperação">Qual o valor desejado?</h1>
<div id="ConfirmaçãoDaOperação">
  <div id="PopUpDaOperação">
      <H3>Deseja confirmar o operação?</h3>
        <p id="ValorValido"></p>
        <p id="ValorNaoValido"></p>
        <p id="TextoValorDaOperação"></p>
        <p id="TextoSaldoAtual"></p>
        <p id="TextoSaldoAposOperação"></p>
      <div id="bttsDaOperação">
        <input type="button" value="Cancelar" id="CancelarOperação" onclick="CancelandoSaque()">
        <input type="button" value="Confirmar" id="ConfirmarOperação" onclick="ConfirmandoSaque()">
      </div>
  </div>
</div>

<input type="number" name="ValorDaOperação" id="ValorDaOperação" placeholder="Valor personalizado">
<div id="BtsDeValoresPadrões">
  <div class="ValoresPadrões" id="VinteReais" onclick="OperaçãoDeSaque(20)">20 R$</div>
  <div class="ValoresPadrões" id="CinquentaReais" onclick="OperaçãoDeSaque(50)">50 R$</div>
  <div class="ValoresPadrões" id="CemReais" onclick="OperaçãoDeSaque(100)">100 R$</div>
</div>
<div id="BtsDeValoresPadrões">
  <div class="ValoresPadrões" id="DuzentosReais" onclick="OperaçãoDeSaque(200)">200 R$</div>
  <div class="ValoresPadrões" id="QuinhentosReais" onclick="OperaçãoDeSaque(500)">500 R$</div>
  <div class="ValoresPadrões" id="MilReais" onclick="OperaçãoDeSaque(1000)">1000 R$</div>
</div>
    <div id="BtsOperação">
      <input type="button" value="Retornar ao menu" id="BtVoltarMenu" onclick="RetornarAoMenu()">
      <input type="button" value="Realizar operação" id="Bt-Realizar-Operação" onclick="OperaçãoDeSaque()">
    </div>
</div>
<div id="ArteSaque1"><img src="imgs/ArteSaque1.png"></div>
<div id="ArteSaque2"><img src="imgs/ArteSaque2.png"></div>
<input type="button" value="Sair" id="Sair2" onclick="Sair()">
`
};

function OperaçãoDeSaque(ValorDaOperaçãoPadrãoSelecionado) {
  var ValorDaOperação;
  if (ValorDaOperaçãoPadrãoSelecionado) {
    ValorDaOperação = ValorDaOperaçãoPadrãoSelecionado;
  } else {
    ValorDaOperação = Number(document.querySelector('input#ValorDaOperação').value);
  }

   document.getElementById('ConfirmaçãoDaOperação').style.display = 'block';
  document.getElementById('TextoValorDaOperação').innerHTML = `Valor de Saque: <span class="CorDasVariáveis">R$ ${ValorDaOperação}</span>`;
  document.getElementById('TextoSaldoAtual').innerHTML = `Seu saldo: <span class="CorDasVariáveis">R$ ${SaldoDaConta}</span>`;
  var SaldoPosOperação = Number(SaldoDaConta - ValorDaOperação);
  document.getElementById('TextoSaldoAposOperação').innerHTML = `Saldo após operação: <span class="CorDasVariáveis">R$ ${SaldoPosOperação}</span>`;

  var btConfirmar = document.getElementById('ConfirmarOperação');
  btConfirmar.onclick = function () {
    ConfirmandoSaque(ValorDaOperação);
  };
}


function CancelandoSaque() {
  document.getElementById('ConfirmaçãoDaOperação').style.display = 'none';
  document.querySelector('input#ValorDaOperação').value = '';
  IniciarSaque();
};


function ConfirmandoSaque(ValorDaOperação) {
  if (ValorDaOperação <= 0 || ValorDaOperação > SaldoDaConta || ValorDaOperação === '') {
    document.getElementById('ValorNaoValido').innerHTML = `Operação não autorizada!`;
    document.getElementById('bttsDaOperação').innerHTML = `<input type="button" value="Fechar" id="FecharSaque" onclick="FecharSaque()">`;

  } else {
    document.getElementById("PopUpDaOperação").innerHTML = `
    
        <H3>Digite sua senha</h3>
        <p id="ValorValido"></p>
        <p id="ValorNaoValido"></p>
        <br>
      <div id="CampoSenha">
        <label for"SenhaDoUsuário"> Digite sua senha: </label>
        <input type="number" name="SenhaDoUsuário" id="SenhaDoUsuário" placeholder=" Digite sua senha">
      </div>
      <div id="bttsDaOperação">
        <input type="button" value="Cancelar" id="CancelarOperação" onclick="CancelandoSaque()">
        <input type="button" value="Confirmar" id="ConfirmarOperação">
      </div>
    
    `
    var btConfirmar = document.getElementById("ConfirmarOperação")
    btConfirmar.onclick = function () {
      VerificandoSenhaSaque(ValorDaOperação)}
  };
};

function VerificandoSenhaSaque(ValorDaOperação){
  var SenhaDoUsuário = Number(document.getElementById('SenhaDoUsuário').value)
  if (SenhaDoUsuário == 3589) {
    SaldoDaConta -= Number(ValorDaOperação);
    document.querySelector('p#ValorValido').innerHTML = `Saque realizado!<br> Seu saldo atual é: <span class="CorDasVariáveis">R$ ${SaldoDaConta}</span>`;
    document.getElementById('SenhaDoUsuário').value = ``;
    document.querySelector('p#ValorNaoValido').innerHTML = ``;
    document.getElementById('bttsDaOperação').innerHTML = `<input type="button" value="Fechar" id="FecharSaque" onclick="FecharSaque()">`;
    document.querySelector(`div#CampoSenha`).innerHTML = ``;
    ExtratoHistoricoSaidas.push(Number(ValorDaOperação));
  } else {
  document.querySelector('p#ValorNaoValido').innerHTML = `Senha inválida!`;
  document.querySelector('p#ValorValido').innerHTML = ``;
  document.querySelector('input[name="SenhaDoUsuário"]').value = ``;
  document.getElementById('bttsDaOperação').innerHTML = `<input type="button" value="Fechar" id="FecharSaque" onclick="FecharSaque()">`;
  document.querySelector(`div#CampoSenha`).innerHTML = ``

}
};


function FecharSaque() {
  document.getElementById('ConfirmaçãoDaOperação').style.display = 'none';
  document.querySelector('input#ValorDaOperação').value = '';
  IniciarSaque();
};


// Fim do trecho das funções pro Deposito






// Inicio das funções pro serviço de Deposito

function IniciarDeposito() {
serviços.innerHTML = `

<div id="MenuDaOperação">

<h1 id="TituloDoMenuDaOperação">Qual o valor desejado?</h1>
<div id="ConfirmaçãoDaOperação">
  <div id="PopUpDaOperação">
      <H3>Deseja confirmar o operação?</h3>
        <p id="ValorValido"></p>
        <p id="ValorNaoValido"></p>
        <p id="TextoValorDaOperação"></p>
        <p id="TextoSaldoAtual"></p>
        <p id="TextoSaldoAposOperação"></p>
      <div id="bttsDaOperação">
        <input type="button" value="Cancelar" id="CancelarOperação" onclick="CancelandoDeposito()">
        <input type="button" value="Confirmar" id="ConfirmarOperação" onclick="ConfirmandoDeposito()">
      </div>
  </div>
</div>

<input type="number" name="ValorDaOperação" id="ValorDaOperação" placeholder="Valor personalizado">
<div id="BtsDeValoresPadrões">
  <div class="ValoresPadrões" id="VinteReais" onclick="OperaçãoDeDeposito(20)">20 R$</div>
  <div class="ValoresPadrões" id="CinquentaReais" onclick="OperaçãoDeDeposito(50)">50 R$</div>
  <div class="ValoresPadrões" id="CemReais" onclick="OperaçãoDeDeposito(100)">100 R$</div>
</div>
<div id="BtsDeValoresPadrões">
  <div class="ValoresPadrões" id="DuzentosReais" onclick="OperaçãoDeDeposito(200)">200 R$</div>
  <div class="ValoresPadrões" id="QuinhentosReais" onclick="OperaçãoDeDeposito(500)">500 R$</div>
  <div class="ValoresPadrões" id="MilReais" onclick="OperaçãoDeDeposito(1000)">1000 R$</div>
</div>
    <div id="BtsOperação">
      <input type="button" value="Retornar ao menu" id="BtVoltarMenu" onclick="RetornarAoMenu()">
      <input type="button" value="Realizar operação" id="Bt-Realizar-Operação" onclick="OperaçãoDeDeposito()">
    </div>
</div>
<div id="ArteDepósito1"><img src="imgs/ArteDepósito1.png"></div>
<div id="ArteDepósito2"><img src="imgs/ArteDepósito2.png"></div>
<input type="button" value="Sair" id="Sair2" onclick="Sair()">
`


}

function OperaçãoDeDeposito(ValorDaOperaçãoPadrãoSelecionado) {
  var ValorDaOperação;
  if (ValorDaOperaçãoPadrãoSelecionado) {
    ValorDaOperação = ValorDaOperaçãoPadrãoSelecionado;
  } else {
    ValorDaOperação = Number(document.querySelector('input#ValorDaOperação').value);
  }

   document.getElementById('ConfirmaçãoDaOperação').style.display = 'block';
  document.getElementById('TextoValorDaOperação').innerHTML = `Valor de Depósito: <span class="CorDasVariáveis"> R$ ${ValorDaOperação}</span>`;
  document.getElementById('TextoSaldoAtual').innerHTML = `Seu saldo: <span class="CorDasVariáveis">R$ ${SaldoDaConta}</span>`;
  var SaldoPosOperação = Number(SaldoDaConta + ValorDaOperação);
  document.getElementById('TextoSaldoAposOperação').innerHTML = `Saldo após operação: <span class="CorDasVariáveis"> R$ ${SaldoPosOperação}</span>`;

  var btConfirmar = document.getElementById('ConfirmarOperação');
  btConfirmar.onclick = function () {
    ConfirmandoDeposito(ValorDaOperação);
  };
}


function CancelandoDeposito() {
  document.getElementById('ConfirmaçãoDaOperação').style.display = 'none';
  document.querySelector('input#ValorDaOperação').value = '';
  IniciarDeposito();
};

function ConfirmandoDeposito(ValorDaOperação) {
  
  document.getElementById('bttsDaOperação').innerHTML = `<input type="button" value="Fechar" id="FecharDeposito" onclick="FecharDeposito()">`;

  if (ValorDaOperação <= 0) {
    document.querySelector('p#ValorNaoValido').innerHTML = `* Operação não autorizada! *`;
    document.querySelector('p#ValorValido').innerHTML = ``;
  } else {
    SaldoDaConta += ValorDaOperação;
    document.querySelector('p#ValorValido').innerHTML = `Depósito realizado! <br>Seu saldo atual é:<span class="CorDasVariáveis"> R$${SaldoDaConta}</span>`;
    document.querySelector('p#ValorNaoValido').innerHTML = ``;
    ExtratoHistoricoDepositos.push(Number(ValorDaOperação));
  };

};

function FecharDeposito() {
  document.getElementById('ConfirmaçãoDaOperação').style.display = 'none';
  document.querySelector('input#ValorDaOperação').value = '';
  IniciarDeposito();
};



// Fim do trecho das funções pro Deposito



// Início do trechos das funções pra transferência

function IniciarTransferência() {
  serviços.innerHTML = `

<div id="MenuDaOperação">

<h1 id="TituloDoMenuDaOperação">Qual o valor desejado?</h1>
<p id="DadosDaContaInvalidos"></p>
<div id="ConfirmaçãoDaOperação">
  <div id="PopUpDaOperação">
      <H3>Deseja confirmar o operação?</h3
        <p id="ValorValido"></p>
        <p id="ValorNaoValido"></p>
        <p id="TextoValorDaOperação"></p>
        <p id="TextoSaldoAtual"></p>
        <p id="TextoSaldoAposOperação"></p>
      <div id="bttsDaOperação">
        <input type="button" value="Cancelar" id="CancelarOperação" onclick="CancelandoTransferência()">
        <input type="button" value="Confirmar" id="ConfirmarOperação" onclick="ConfirmandoTransferência()">
      </div>
  </div>
</div>

<div id="Tipos-De-Conta">
  <div>
    <label for="agência">Agência (04 dígitos): </label>
    <input type="number" name="agência" id="agência" placeholder="Número da Agência">
  </div>
  <div>
    <label for="TipoDeConta">Tipo de Conta (03 dígitos): </label>
    <input type="number" name="TipoDeConta" id="TipoDeConta" placeholder="Tipo de conta">
  </div>
  <div>
    <label for="NumeroDaConta">Conta (09 dígitos): </label>
    <input type="number" name="NumeroDaConta" id="NumeroDaConta" placeholder="Numero Da Conta">
  </div>
</div>
<label id="LabelValorTransf" for="ValorDaOperação">Valor de transferência: </label>
<input type="number" name="ValorDaOperação" id="ValorDaOperação" placeholder="Valor de transferência">
<div id="BtsDeValoresPadrões">
  <div class="ValoresPadrões" id="VinteReais" onclick="OperaçãoDeTransferência(20)">20 R$</div>
  <div class="ValoresPadrões" id="CinquentaReais" onclick="OperaçãoDeTransferência(50)">50 R$</div>
  <div class="ValoresPadrões" id="CemReais" onclick="OperaçãoDeTransferência(100)">100 R$</div>
</div>
<div id="BtsDeValoresPadrões">
  <div class="ValoresPadrões" id="DuzentosReais" onclick="OperaçãoDeTransferência(200)">200 R$</div>
  <div class="ValoresPadrões" id="QuinhentosReais" onclick="OperaçãoDeTransferência(500)">500 R$</div>
  <div class="ValoresPadrões" id="MilReais" onclick="OperaçãoDeTransferência(1000)">1000 R$</div>
</div>
    <div id="BtsOperação">
      <input type="button" value="Retornar ao menu" id="BtVoltarMenu" onclick="RetornarAoMenu()">
      <input type="button" value="Realizar operação" id="Bt-Realizar-Operação" onclick="OperaçãoDeTransferência()">
    </div>
</div>
<div id="ArteSaque1"><img src="imgs/ArteTransf1.png"></div>
<div id="ArteSaque2"><img src="imgs/arttransf2.png"></div>
<input type="button" value="Sair" id="Sair2" onclick="Sair()">
`
};

function OperaçãoDeTransferência(ValorDaOperaçãoPadrãoSelecionado) {
  if (ValorDaOperaçãoPadrãoSelecionado) {
    ValorDaOperação = Number(ValorDaOperaçãoPadrãoSelecionado);
  } else {
    ValorDaOperação = Number(document.querySelector('input#ValorDaOperação').value);
  }
  var agência = document.querySelector('input[name="agência"]').value
  var TipoDeConta = document.querySelector('input[name="TipoDeConta"]').value
  var NumeroDaConta = document.querySelector('input[name="NumeroDaConta"]').value

if (agência == '' || TipoDeConta == '' || NumeroDaConta == '') {
  document.querySelector(`p#DadosDaContaInvalidos`).innerHTML = `Dados da conta inválidos!`
} else if (TipoDeConta > 999 || agência > 9999|| NumeroDaConta > 999999999) {
  document.querySelector(`p#DadosDaContaInvalidos`).innerHTML = `Dados da conta inválidos! Verifique as informações digitadas. <br> Exemplo: Agência: 1234 (04 digítos), Tipo de conta: 123 (03 digitos), Conta: 123456789 (09 digitos)`

} else {
  document.querySelector(`p#DadosDaContaInvalidos`).innerHTML = ``
  document.getElementById('ConfirmaçãoDaOperação').style.display = 'block';
  document.getElementById('TextoValorDaOperação').innerHTML = `
  
  Agência: <span class="CorDasVariáveis">${agência}</span> 
    Tipo de conta: <span class="CorDasVariáveis">${TipoDeConta} </span> <br>
  Conta: <span class="CorDasVariáveis">${NumeroDaConta}</span> <br><br>  
  Valor de Transferência: <span class="CorDasVariáveis">R$ ${ValorDaOperação}</span> 

  `;


  document.getElementById('TextoSaldoAtual').innerHTML = `Seu saldo: <span class="CorDasVariáveis"> R$ ${SaldoDaConta} </span>`;
  var SaldoPosOperação = Number(SaldoDaConta - ValorDaOperação);
  document.getElementById('TextoSaldoAposOperação').innerHTML = `Saldo após operação: <span class="CorDasVariáveis">R$ ${SaldoPosOperação}</span>`;

  var btConfirmar = document.getElementById('ConfirmarOperação');
  btConfirmar.onclick = function () {
    ConfirmandoTransferência(ValorDaOperação);
  }};
}



function CancelandoTransferência() {
  document.getElementById('ConfirmaçãoDaOperação').style.display = 'none';
  document.querySelector('input#ValorDaOperação').value = '';
  IniciarTransferência();
};

function ConfirmandoTransferência(ValorDaOperação) {
  
  if (ValorDaOperação <= 0 || ValorDaOperação > SaldoDaConta || ValorDaOperação === '') {
    document.getElementById('ValorNaoValido').innerHTML = `Operação não autorizada!`;
    document.getElementById('bttsDaOperação').innerHTML = `<input type="button" value="Fechar" id="FecharTransferência" onclick="FecharTransferência()">`;

  } else {
    document.getElementById("PopUpDaOperação").innerHTML = `
    
        <H3>Digite sua senha</h3>
        <p id="ValorValido"></p>
        <p id="ValorNaoValido"></p>
        <br>
      <div id="CampoSenha">
        <label for"SenhaDoUsuário"> Digite sua senha: </label>
        <input type="number" name="SenhaDoUsuário" id="SenhaDoUsuário" placeholder=" Digite sua senha">
      </div>
      <div id="bttsDaOperação">
        <input type="button" value="Cancelar" id="CancelarOperação" onclick="CancelandoTransferência()">
        <input type="button" value="Confirmar" id="ConfirmarOperação" onclick="VerificandoSenha()">
      </div>
    
    `
  };
};

function VerificandoSenha(){
  var SenhaDoUsuário = document.getElementById('SenhaDoUsuário').value
  if (SenhaDoUsuário == 3589) {
    SaldoDaConta -= ValorDaOperação;
    document.querySelector('p#ValorValido').innerHTML = `Transferência realizada! <br>Seu saldo atual é: <span class="CorDasVariáveis">R$ ${SaldoDaConta}</span>`;
    document.getElementById('SenhaDoUsuário').value = ``;
    document.querySelector('p#ValorNaoValido').innerHTML = ``;
    document.getElementById('bttsDaOperação').innerHTML = `<input type="button" value="Fechar" id="FecharTransferência" onclick="FecharTransferência()">`;
    document.querySelector(`div#CampoSenha`).innerHTML = ``;
    ExtratoHistoricoSaidas.push(Number(ValorDaOperação));
  } else {
  document.querySelector('p#ValorNaoValido').innerHTML = `Senha inválida!`;
  document.querySelector('p#ValorValido').innerHTML = ``;
  document.querySelector('input[name="SenhaDoUsuário"]').value = ``;
  document.getElementById('bttsDaOperação').innerHTML = `<input type="button" value="Fechar" id="FecharTransferência" onclick="FecharTransferência()">`;
  document.querySelector(`div#CampoSenha`).innerHTML = ``

}
};


function FecharTransferência() {
  document.getElementById('ConfirmaçãoDaOperação').style.display = 'none';
  document.querySelector('input#ValorDaOperação').value = '';
  IniciarTransferência();
};

function iniciarExtratoeSaldo() {
serviços.innerHTML = `
<h1 id="TituloDoSaldoExtrato"> Saldo e Extrato </h1>
<br>
<span class="EstiloGeral">
<div id="SaldoDoExtrato"></div>
<br>
<div id="DivDosExtratos">

  <div class="Extratos">Entradas
    <br>
    <hr>
    <br>
    <p id="intentradas">Sem entradas :( <br> Realize um depósito!</p>
    <span class="Entradas">
    <p id="ExtratosDeDepositos"></p>
    </span>
  </div>

  <div class="Extratos">Saídas

    <br>
    <hr>
    <br>
    <p id="intsaidas">Sem saídas :) </p>
    <span class="Saidas">
    <p id="ExtratosSaques_E_Transferências"> </p>
    </span
  </div>
  
</div>
</span>
<input type="button" value="Retornar ao menu" id="VtMenu" onclick="RetornarAoMenu()">
<div id="ArteExtrato"><img src="imgs/ArteExtrato.png"></div>
<input type="button" value="Sair" id="Sair3" onclick="Sair()">
`
document.querySelector('div#SaldoDoExtrato').innerHTML = `Seu saldo: R$ ${SaldoDaConta}`
let ExibindoExtratosDeposito = ''
let ExibindoExtratosSaidas = ''
for (let ExibirArrays = 0; ExibirArrays < ExtratoHistoricoDepositos.length; ExibirArrays++){
ExibindoExtratosDeposito += `+ R$ ${ExtratoHistoricoDepositos[ExibirArrays]}<br>`;
document.querySelector('p#ExtratosDeDepositos').innerHTML = `${ExibindoExtratosDeposito}`
document.querySelector('p#intentradas').innerHTML = ``
}

for (let ExibirArrays2 = 0; ExibirArrays2 < ExtratoHistoricoSaidas.length; ExibirArrays2++){
  ExibindoExtratosSaidas += `- R$ ${ExtratoHistoricoSaidas[ExibirArrays2]}<br>`;
  document.querySelector('p#ExtratosSaques_E_Transferências').innerHTML = `${ExibindoExtratosSaidas}`
  document.querySelector('p#intsaidas').innerHTML = ``
}

}

function Sair(){
serviços.innerHTML = `
<div id="DespedidaAgradecimento">
<span class="EstiloGeral">
<h1>Muito obrigado por usar o Banco Passos!</h1>

<p>Desejamos um ótimo dia e bom descanso quando for descansar, conte sempre conosco. </p>
<p>Abraços!</p>
<br>
<a href="https://www.linkedin.com/in/matheus-passos-6891931b3/">Clique aqui e conheça nosso Desenvolvedor.</a>
</span>
</div>
<div class="VoltarPbanco">
<input type="button" value="Iniciar Banco" id="IniciarBanco1" onclick="VoltarAoCampoNome()">
</div>
`
}


