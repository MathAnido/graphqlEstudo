const { usuarios, proximoID } = require('../data/db');

module.exports = {
  novoUsuario(_, args) {
    const emailExistente = usuarios.some((u) => u.email === args.email);
    if (emailExistente) {
      throw new Error('E-mail cadastrado');
    }
    const novo = {
      id: proximoID(),
      ...args,
      perfil_id: 1,
      status: 'ATIVO',
    };
    usuarios.push(novo);
    return novo;
  },

  excluirUsuario(_, { id }) {
    const i = usuarios.findIndex((u) => u.id === id);
    if (i < 0) return null;
    const excluidos = usuarios.splice(i, 1);
    return excluidos ? excluidos[0] : null;
  },

  alterarUsuario(_, args) {
    const i = usuarios.find((u) => u.id === args.id);
    if (i < 0) return null;
    const usuario = {
      ...usuario[i],
      ...args,
    };

    usuarios.splice(i, 1, usuario);
  },
};
