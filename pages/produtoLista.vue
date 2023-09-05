<!-- ProductList.vue -->
<template>
    <div>
      <h2>Produtos Disponíveis</h2>
      <input type="text" v-model="searchQuery" placeholder="Pesquisar produto" @input="filterProducts" />
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
          {{ product.name }} - R$ {{ product.price }}
          <button @click="addToCart(product)">Adicionar ao Carrinho</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products'],
    data() {
      return {
        searchQuery: '',
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      addToCart(product) {
        // Emitir um evento para adicionar o produto ao carrinho
        this.$emit('add-to-cart', product);
      },
    },
  };
  </script>
  