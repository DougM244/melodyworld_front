<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Usuário:</label>
        <input v-model="username" type="text" id="username" required>
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input v-model="password" type="password" id="password" required>
      </div>
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        // Prepare os dados do usuário para envio
        const userData = {
          username: this.username,
          password: this.password
        };

        // Substitua a URL abaixo pela URL real do seu endpoint de login no backend
        const response = await axios.post('URL_DO_SEU_BACKEND/login', userData);

        // Lide com a resposta do backend aqui, como verificar se o login foi bem-sucedido
        console.log('Resposta do servidor:', response.data);

        // Redirecione o usuário para a página apropriada após o login bem-sucedido
        // this.$router.push('/dashboard'); // Exemplo de redirecionamento para a página de painel

        // Limpe os campos do formulário após o envio bem-sucedido
        this.username = '';
        this.password = '';
      } catch (error) {
        // Lide com erros aqui, como exibir uma mensagem de erro ao usuário
        console.error('Erro ao fazer login:', error);
      }
    }
  }
};
</script>

<style>
.login-page {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
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
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
