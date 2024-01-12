$(document).ready(function () {
    // Máscaras para os campos do formulário
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Submissão do formulário
    $('#formulario').submit(function (event) {
        event.preventDefault();

        // Coletando os dados do formulário
        var nomeCompleto = $('#nomeCompleto').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var cpf = $('#cpf').val();
        var enderecoCompleto = $('#enderecoCompleto').val();
        var cep = $('#cep').val();

        // Aqui você pode adicionar lógica para enviar os dados do formulário
        console.log('Formulário enviado');
        console.log('Nome Completo:', nomeCompleto);
        console.log('E-mail:', email);
        console.log('Telefone:', telefone);
        console.log('CPF:', cpf);
        console.log('Endereço Completo:', enderecoCompleto);
        console.log('CEP:', cep);
    });
});
