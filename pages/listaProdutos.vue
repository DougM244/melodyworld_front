<template>
    <div class="product-list">
      <h2>Lista de Produtos</h2>
      <ul>
        <li v-for="produto in produtos" :key="produto.id">
          <h3>{{ produto.nome }}</h3>
          <p>Preço: R$ {{ produto.preco.toFixed(2) }}</p>
          <p>Quantidade: {{ produto.quantidade }}</p>
          <p>Código: {{ produto.codigo }}</p>
          <p>Marca: {{ produto.marca }}</p>
          <p>Categoria: {{ produto.categoria }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        produtos: [],
      };
    },
    async asyncData({ params }) {
      try {
        // Substitua a URL abaixo pela URL real do seu backend para buscar os produtos
        const response = await axios.get('URL_DO_SEU_BACKEND/produtos');
        const produtos = response.data;
        return { produtos };
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return { produtos: [] };
      }
    },
  };
  </script>
  