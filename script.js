/* const nomeAluno = document.querySelector( "nome" );
        const emailAluno = document.querySelector( "email" );
        const idadeAluno = document.querySelector( "idade" );
        const generoAluno = document.querySelector( "genero" );
        const telefoneAluno = document.querySelector( "telefone" );
        const estudanteAluno = document.querySelector( "input[name='estudante']:checked" );
        const enviarCadastro = document.querySelector( "#enviarCadastro" );

        let body = {};

        nomeAluno?.addEventListener( "change", () => {
            const nomeAlunoInformado = nomeAluno?.value.trim();

            if ( !nomeAlunoInformado ) {
                return;
            }

            body.nome = nomeAlunoInformado;
        } );

        enviarCadastro?.addEventListener( "click", ( e ) => {
            e.preventDefault();
            const nomeAluno = document.querySelector( "nome" ).value;
            const emailAluno = document.querySelector( "email" ).value;
            const idadeAluno = document.querySelector( "idade" ).value;
            const generoAluno = document.querySelector( "genero" ).value;
            const telefoneAluno = document.querySelector( "telefone" ).value;
            const estudanteAluno = document.querySelector( "input[name='estudante']:checked" ).value;

            const body = {
                nome: nomeAluno,
                email: emailAluno,
                idade: idadeAluno,
                genero: generoAluno,
                telefone: telefoneAluno,
                estudante: estudanteAluno,
            };
            alert("Nome do aluno: " + body.nome);

            console.log( body );
        } ) */

function enviarCadastro(event) {
    // @ts-ignore
    event.preventDefault();

    // @ts-ignore
    const nomeAluno = document.querySelector( "nome" )?.value;
    // @ts-ignore
    const emailAluno = document.querySelector( "email" )?.value;
    // @ts-ignore
    const idadeAluno = document.querySelector( "idade" )?.value;
    // @ts-ignore
    const generoAluno = document.querySelector( "genero" )?.value;
    // @ts-ignore
    const telefoneAluno = document.querySelector( "telefone" )?.value;
    // @ts-ignore
    const estudanteAluno = document.querySelector( "input[name='estudante']:checked" )?.value;

    const body = {
        nome: nomeAluno,
        email: emailAluno,
        idade: idadeAluno,
        genero: generoAluno,
        telefone: telefoneAluno,
        estudante: estudanteAluno,
    };
    alert( "Nome do aluno: " + body.nome );

    console.log( body );
}