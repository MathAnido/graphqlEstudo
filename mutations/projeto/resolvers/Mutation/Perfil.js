const { perfis, proximoPerfilID } = require("../../data/db");
module.exports = {
  novoPerfil(_, { nome }) {
    const novo = { id: proximoPerfilID(), nome: nome };
    perfis.push(novo);
    return novo;
  },
  alterarPerfil(_, { id, nome }) {
    const i = perfis.findIndex((p) => p.id === id);
    if (i < 0) return;
    perfis[i].nome = nome;
    return perfis[i];
  },
  deletarPerfil(_, { id }) {
    const i = perfis.findIndex((p) => p.id === id);
    if (i < 0) return;
    const removido = perfis.splice(i, 1);
    return removido[0];
  },
};
