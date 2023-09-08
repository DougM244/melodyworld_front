<template>
  <div class="registration-form">
    <h2>Cadastrar Cliente</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input v-model="nome" type="text" id="nome" required>
      </div>
      <div class="form-group">
        <label for="cpf">CPF:</label>
        <input v-model="cpf" type="text" id="cpf" required>
      </div>
      <div class="address-group">
        <h3>Endereço</h3>
        <div class="form-group">
          <label for="rua">Rua:</label>
          <input v-model="address.rua" type="text" id="rua" required>
        </div>
        <div class="form-group">
          <label for="numero">Número:</label>
          <input v-model="address.numero" type="text" id="numero" required>
        </div>
        <div class="form-group">
          <label for="cep">CEP:</label>
          <input v-model="address.cep" type="text" id="cep" required>
        </div>

        <div class="form-group">
          <label for="bairro">Bairro:</label>
          <input v-model="address.bairro" type="text" id="bairro" required>
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input v-model="address.cidade" type="text" id="cidade" required>
        </div>
        <div class="form-group">
          <label for="estado">Estado:</label>
          <input v-model="address.estado" type="text" id="estado" required>
        </div>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';

const nome = '';
const cpf = '';
const address = {
  rua: '',
  numero: '',
  cep: '',
  bairro: '',
  cidade: '',
  estado: '',
};

async function register() {
  try {
    const cliente = {
      nome,
      cpf,
      address,
    };

    // Substitua a URL abaixo pela URL real do seu backend
    const response = await axios.post('URL_DO_SEU_BACKEND', cliente);

    // Lide com a resposta do backend aqui, se necessário
    console.log('Resposta do servidor:', response.data);

    // Limpe os campos do formulário após o envio bem-sucedido
    nome.value = '';
    cpf.value = '';
    address.rua = '';
    address.numero = '';
    address.cep = '';
    address.bairro = '';
    address.cidade = '';
    address.estado = '';
  } catch (error) {
    // Lide com erros aqui, se houver algum problema na solicitação
    console.error('Erro ao enviar os dados:', error);
  }
}
</script>

<style>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

.address-group {
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
