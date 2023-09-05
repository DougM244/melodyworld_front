<!-- ShoppingCart.vue -->
<template>
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        <li v-for="product in cart" :key="product.id">
          {{ product.name }} - R$ {{ product.price }}
          <button @click="removeFromCart(product)">Remover do Carrinho</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['cart'],
    methods: {
      removeFromCart(product) {
        // Emitir um evento para remover o produto do carrinho
        this.$emit('remove-from-cart', product);
      },
    },
  };
  </script>
  