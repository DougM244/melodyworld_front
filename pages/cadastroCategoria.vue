<template>
    <div class="registration-form">
      <h2>Cadastrar Categoria</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="nomecategoria">Nome da Categoria:</label>
          <input v-model="nomecategoria" type="text" id="nomecategoria" required>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nomecategoria: '',
      };
    },
    methods: {
      async register() {
        try {
          const categoria = {
            categoria: this.nomecategoria, // Nome da categoria agora é atribuído a 'categoria'
          };
  
          // Substitua a URL abaixo pela URL real do seu backend
          const response = await axios.post('http://localhost:8084/api/categorias/salvarCategoria', categoria);
  
          // Lide com a resposta do backend aqui, se necessário
          console.log('Resposta do servidor:', response.data);
  
          // Limpe os campos do formulário após o envio bem-sucedido
          this.nomecategoria = '';
        } catch (error) {
          // Lide com erros aqui, se houver algum problema na solicitação
          console.error('Erro ao enviar os dados:', error);
        }
      },
    },
  };
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