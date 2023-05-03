public class Aluno {
    public String nome;
    public String matricula;
    public String curso;
    public int idade;

    public Aluno(String nome, String matricula, String curso, int idade) {
        this.nome = nome;
        this.matricula = matricula;
        this.curso = curso;
        this.idade = idade;
    }

    public static void main(String[] args) {
        // criando um objeto de alunos

        Aluno aluno1 = new Aluno("João", "2019001", "Sistemas de Informação", 20);

        // imprimindo os dados dos alunos
        System.out.println("Nome: " + aluno1.nome);
        System.out.println("Matrícula: " + aluno1.matricula);
        System.out.println("Curso: " + aluno1.curso);
        System.out.println("Idade: " + aluno1.idade);    
    
    }
}