const alunos = ["alberto","ronaldo","rivaldo","cafu"];
const notas = [10, 5.5, 8, 7];

const ListadeAlunosENotas = [alunos, notas];

function exibeNomeNota(aluno){
    if(ListadeAlunosENotas[0].includes(aluno)) {
        // const alunos = ListadeAlunosENotas[0];
        // const medias = ListadeAlunosENotas[1];

        const [alunos, medias] = ListadeAlunosENotas;
        
        console.log(`${aluno} está cadastrado!`);

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(mediaAluno);
    }  else{
        console.log(`o ${aluno} não está cadastrado.`);
    }
}

exibeNomeNota("cafu");

