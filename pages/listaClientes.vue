<template>
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">
          <h3>{{ cliente.nome }}</h3>
          <p>CPF: {{ cliente.cpf }}</p>
          <h4>Endereço</h4>
          <p>Rua: {{ cliente.address.rua }}</p>
          <p>Número: {{ cliente.address.numero }}</p>
          <p>CEP: {{ cliente.address.cep }}</p>
          <p>Bairro: {{ cliente.address.bairro }}</p>
          <p>Cidade: {{ cliente.address.cidade }}</p>
          <p>Estado: {{ cliente.address.estado }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    async asyncData({ params }) {
      try {
        // Substitua a URL abaixo pela URL real do seu backend para buscar os clientes
        const response = await axios.get('URL_DO_SEU_BACKEND/clientes');
        const clientes = response.data;
        return { clientes };
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        return { clientes: [] };
      }
    },
  };
  </script>
  