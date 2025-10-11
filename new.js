function User(name, email) {
  this.name = name;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.name}, ${this.email}`;
  };
}

const novoUser = new User("Juliana", "j@j.com");
console.log(novoUser.exibirInfos());
