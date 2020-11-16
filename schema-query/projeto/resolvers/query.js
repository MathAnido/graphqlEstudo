const { usuarios, perfis } = require('../data/db');

module.exports = {
  ola() {
    return 'Basta retornar uma String';
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Ana da Web',
      email: 'anadaweb@email.com',
      idade: 23,
      salario_real: 1234.56,
      vip: true,
    };
  },
  produtoEmDestaque() {
    return {
      nome: 'Fofura',
      preco: 1.98,
      desconto: 0.15,
    };
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_parent, { id }) {
    const selecionados = usuarios.filter((u) => u.id == id);
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const selecionados = perfis.filter((p) => p.id === id);
    return selecionados ? selecionados[0] : null;
  },
};
