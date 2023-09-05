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
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
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
  