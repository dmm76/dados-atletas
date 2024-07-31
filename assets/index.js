class Atleta {
  constructor(atletas) {
    this.atletas = atletas;
  }

  calculaCategoria(idade) {
    switch (true) {
      case idade >= 9 && idade <= 11:
        return "Infantil";
      case idade >= 12 && idade <= 13:
        return "Juvenil";
      case idade >= 14 && idade <= 15:
        return "Intermediário";
      case idade >= 16 && idade <= 30:
        return "Adulto";
      default:
        return "Sem categoria";
    }
  }

  calculaIMC() {}

  calculaMediaValida() {}

  obtemNomeAtleta() {}

  obtemIdadeAtleta() {}

  obtemPesoAtleta() {}

  obtemNotasAtleta() {}

  obtemCategoria() {
    let self = this;
    this.atletas.forEach(function (ginasta) {
      const categoria = self.calculaCategoria(ginasta.idade);
      console.log(
        "Nome: " +
          ginasta.nome +
          ", idade: " +
          ginasta.idade +
          ", Categoria: " +
          categoria
      );
    });
  }

  obtemIMC() {}

  obtemMediaValida() {}
}

let atletas = [
  {
    nome: "Cesar Abascal",
    idade: 31,
    peso: 63,
    altura: 1.88,
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    idade: 14,
    peso: 65,
    altura: 1.94,
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    idade: 12,
    peso: 50,
    altura: 1.75,
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    idade: 22,
    peso: 64,
    altura: 1.72,
    notas: [10, 10, 10, 9, 9.5],
  },
  {
    nome: "Dayane dos Santos",
    idade: 11,
    peso: 63,
    altura: 1.4,
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
];

const ginasta = new Atleta(atletas);

console.log(ginasta.obtemCategoria());
