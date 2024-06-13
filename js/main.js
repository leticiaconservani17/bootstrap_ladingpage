$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        mensagem: {
            required: true
        }
    },
    messages: {
        nome: {
            required: "Por favor, insira seu nome."
        },
        email: {
            required: "Por favor, insira seu email.",
            email: "Por favor, insira um email válido."
        },
        mensagem: {
            required: "Por favor, insira sua mensagem."
        }
    },

    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir!");
    }
})