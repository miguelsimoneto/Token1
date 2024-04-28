const jwt = require('jsonwebtoken');

// Função para gerar um token JWT
function gerarTokenJWT(usuario) {
  const payload = {
    id: usuario.id, // Informação única do usuário
    nome: usuario.nome
  };

  const secret = 'seuSegredo'; // Mantenha este segredo protegido
  const opcoes = {
    expiresIn: '1h' // O token expira em 1 hora
  };

  // Gerando o token
  const token = jwt.sign(payload, secret, opcoes);
  return token;
}

// Função para verificar o token JWT
function verificarTokenJWT(token) {
  const secret = 'seuSegredo'; // O mesmo segredo usado para gerar o token

  try {
    const decoded = jwt.verify(token, secret);
    return { valido: true, decoded };
  } catch (error) {
    return { valido: false, error };
  }
}

// Exemplo de uso
const usuario = { id: '123', nome: 'João' };
const token = gerarTokenJWT(usuario);
console.log(token); // Exibe o token gerado

const resultadoVerificacao = verificarTokenJWT(token);
if (resultadoVerificacao.valido) {
  console.log('Token válido:', resultadoVerificacao.decoded);
} else {
  console.log('Token inválido:', resultadoVerificacao.error);
}