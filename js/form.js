document.addEventListener("DOMContentLoaded", function() {
    const senha = document.getElementById("passwd-form");
    const confirmacaoSenha = document.getElementById("passwd-confirm");
    const erroSenha = document.getElementById("senha-erro");
    const erroConfirmacao = document.getElementById("confirmacao-erro");
  
    form.addEventListener("submit", function(event) {
      const senhaValida = validaSenha();
      const confirmacaoValida = validaConfirmacao();
  
      if (!senhaValida || !confirmacaoValida) {
        event.preventDefault();
      }
    });
  
    function validaSenha() {
      const senhaValor = senha.value;
      let mensagemErro = "";
  
      if (!/[A-Z]/.test(senhaValor)) {
        mensagemErro += "Inclua pelo menos uma letra maiúscula.<br>";
      }
      if (!/[a-z]/.test(senhaValor)) {
        mensagemErro += "Inclua pelo menos uma letra minúscula.<br>";
      }
      if (!/\d/.test(senhaValor)) {
        mensagemErro += "Inclua pelo menos um número.<br>";
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(senhaValor)) {
        mensagemErro += "Inclua pelo menos um caractere especial.<br>";
      }
      if (senhaValor.length < 8) {
        mensagemErro += "A senha deve ter pelo menos 8 caracteres.<br>";
      }
  
      erroSenha.innerHTML = mensagemErro;
      return mensagemErro === "";
    }
  
    function validaConfirmacao() {
      if (senha.value !== confirmacaoSenha.value) {
        erroConfirmacao.textContent = "As senhas não coincidem.";
        return false;
      } else {
        erroConfirmacao.textContent = "";
        return true;
      }
    }
  });


  function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('A idade do usuário deve ser maior que 13 anos!');
    }
}

function validaIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataMais13 = new Date(dataNascimento.getUTCFullYear() + 13, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());

    return dataAtual >= dataMais13;
}