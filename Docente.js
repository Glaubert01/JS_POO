import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = "true") {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso de ${curso}, responsavel ${this.nome}.`;
  }
}

const novoDocente = new Docente("Glaubert", "g@g.com", "22-07-1994");

console.log(novoDocente);
console.log(novoDocente.aprovarEstudante("Juliana", "JavaScript"));
