<template>
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">
          <h3>{{ cliente.nome }}</h3>
          <p>CPF: {{ cliente.cpf }}</p>
          <h4>Endereço</h4>
          <p>Rua: {{ cliente.endereco.rua }}</p>
          <p>Número: {{ cliente.endereco.numero }}</p>
          <p>CEP: {{ cliente.endereco.cep }}</p>
          <p>Bairro: {{ cliente.endereco.bairro }}</p>
          <p>Cidade: {{ cliente.endereco.cidade }}</p>
          <p>Estado: {{ cliente.endereco.estado }}</p>
        </li>
      </ul>
      <p v-if="clientes.length === 0">Nenhum cliente encontrado.</p>
      <p v-if="error">Erro ao buscar clientes: {{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        clientes: [],
        error: null,
      };
    },
    async asyncData({ params }) {
  try {
    // Substitua a URL abaixo pela URL real do seu backend para buscar os clientes
    const response = await axios.get('http://localhost:8084/api/Cliente/listarClientes');
    console.log('Dados recebidos:', response.data);
    this.clientes = response.data;
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    this.error = 'Erro ao buscar clientes.';
  }
},
  };
  </script>