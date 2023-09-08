<template>
    <div class="funcionario-list">
      <h2>Lista de Funcionários</h2>
      <ul>
        <li v-for="funcionario in funcionarios" :key="funcionario.id">
          <h3>{{ funcionario.nome }}</h3>
          <p>CPF: {{ funcionario.cpf }}</p>
          <p>Cargo: {{ funcionario.cargo }}</p>
          <h4>Endereço</h4>
          <p>Rua: {{ funcionario.endereco.rua }}</p>
          <p>Número: {{ funcionario.endereco.numero }}</p>
          <p>CEP: {{ funcionario.endereco.cep }}</p>
          <p>Bairro: {{ funcionario.endereco.bairro }}</p>
          <p>Cidade: {{ funcionario.endereco.cidade }}</p>
          <p>Estado: {{ funcionario.endereco.estado }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        funcionarios: [],
      };
    },
    async asyncData({ params }) {
      try {
        // Substitua a URL abaixo pela URL real do seu backend para buscar os funcionários
        const response = await axios.get('URL_DO_SEU_BACKEND/funcionarios');
        const funcionarios = response.data;
        return { funcionarios };
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        return { funcionarios: [] };
      }
    },
  };
  </script>