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
    return this.atletas.map(function (ginasta) {
      return {
        nome: ginasta.nome,
        nota: ginasta.notas,
      };
    });
  }

  obtemMediaValida() {
    return this.atletas.map(function (ginasta) {
      if (ginasta.notas.length <= 2) {
        return {
          nome: ginasta.nome,
          media: "0.00",
        }; // Se houver 2 ou menos notas, a média é zero após descartar
      }

      // Ordena as notas e remove a maior e a menor
      let notasOrdenadas = [...ginasta.notas].sort((a, b) => a - b);
      let notasDescarte = notasOrdenadas.slice(1, -1);

      // utiliza reduce() para somar as notas e atribuir a variavel soma
      let soma = notasDescarte.reduce(function (total, nota) {
        return total + nota;
      }, 0);

      //calcula a média
      let media = soma / notasDescarte.length;

      //retorn nome, media do ginasta
      return {
        nome: ginasta.nome,
        media: media.toFixed(2),
      };
    });
  }

  //A partir daqui é reference a trazer os dados individuais dos atletas
  //para representar na funcao obtemDadosAtletas()

  calculaIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
  }

  calculaMedia(notas) {
    if (notas.length <= 2) return 0; // Se houver 2 ou menos notas, a média é zero após descartar

    // Ordena as notas e remove a maior e a menor
    let notasOrdenadas = [...notas].sort((a, b) => a - b);
    let notasDescarte = notasOrdenadas.slice(1, -1);

    let soma = notasDescarte.reduce((total, nota) => total + nota, 0);
    return (soma / notasDescarte.length).toFixed(2);
  }

  obtemDadosAtletas() {
    return this.atletas.map((ginasta) => {
      const categoria = this.calculaCategoria(ginasta.idade);
      const imc = this.calculaIMC(ginasta.peso, ginasta.altura);
      const media = this.calculaMedia(ginasta.notas);

      return {
        Nome: ginasta.nome,
        Idade: ginasta.idade,
        Peso: ginasta.peso,
        Altura: ginasta.altura,
        Notas: ginasta.notas,
        Categoria: categoria,
        Imc: imc,
        Média_válida: media,
      };
    });
  }
}

let atletas = [
  {
    nome: "Cesar Abascal",
    idade: 30,
    peso: 80,
    altura: 1.7,
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
    peso: 43,
    altura: 1.4,
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
];

const ginasta = new Atleta(atletas);

const categorias = ginasta.obtemCategoria();
const pesos = ginasta.obtemPesoAtleta();
const imc = ginasta.obtemIMC();
const notas = ginasta.obtemNotasAtleta();
const mediaValida = ginasta.obtemMediaValida();
const dadosGinastas = ginasta.obtemDadosAtletas();

// console.log(categorias);
// console.log(pesos);
// console.log(imc);
// console.log(notas);
//console.log(mediaValida);

console.log(dadosGinastas);
