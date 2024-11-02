const camposDoFOrmulario = document.querySelectorAll("[required]");
const form = document.querySelector('.principal__formulario');
console.log(camposDoFOrmulario);

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    nascimento: {
        valueMissing: "O campo de data de nascimento não pode estar vazio.",
    },
    termos: {
        valueMissing: "Você deve aceitar nossos termos antes de continuar."
    },
    usuario: {
        valueMissing: "Você deve inserir um login válido."
    },
    passwd: {
        valueMissing: "Você deve inserir uma senha válida."
    },
    telefone: {
        valueMissing: "Você deve inserir um número de telefone válido."
    },
    passwdForm: {
        valueMissing: "Insira uma senha para continuar com o cadastro."
    },
    passwdFormConfirm: {
        valueMissing: "Confirme a senha fornecida para continuar com o cadastro."
    }
};

camposDoFOrmulario.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
});


function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if(campo.name === "nascimento" && campo.value !== "") {
        console.log('Aqui')
        ehMaiorDeIdade(campo);
    }

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            if(campo.validity.customError) {
                mensagem = campo.validationMessage;
                console.log(mensagem)
            } 
        }
    });

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorDeInput = campo.checkValidity();
    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}
