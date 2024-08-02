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

  obtemNomeAtleta() {
    return this.atletas.map(function (ginasta) {
      return ginasta.nome;
    });
  }

  obtemIdadeAtleta() {
    return this.atletas.map(function (ginasta) {
      return {
        nome: ginasta.nome,
        peso: ginasta.idade,
      };
    });
  }

  obtemPesoAtleta() {
    return this.atletas.map(function (ginasta) {
      return {
        nome: ginasta.nome,
        peso: ginasta.peso,
      };
    });
  }

  obtemIMC() {
    let imc = 0;
    return this.atletas.map(function (ginasta) {
      imc = ginasta.peso / (ginasta.altura * ginasta.altura);
      return {
        nome: ginasta.nome,
        peso: ginasta.peso,
        imc: imc.toFixed(2),
      };
    });
  }

  obtemCategoria() {
    let self = this;
    return this.atletas.map(function (ginasta) {
      const categoria = self.calculaCategoria(ginasta.idade);
      return {
        nome: ginasta.nome,
        idade: ginasta.idade,
        categoria: categoria,
      };
    });
  }
  obtemNotasAtleta() {
    return ginasta.notas;
  }
  obtemMediaValida() {
    return media;
  }
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

const categorias = ginasta.obtemCategoria();
const pesos = ginasta.obtemPesoAtleta();
const imc = ginasta.obtemIMC();

console.log(categorias);
console.log(pesos);
console.log(imc);
