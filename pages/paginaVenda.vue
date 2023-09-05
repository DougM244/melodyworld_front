<!-- SalePage.vue -->
<template>
    <div>
      <ProductList :products="products" @add-to-cart="addToCart" />
      <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" />
    </div>
  </template>
  
  <script>
  import ProductList from './produtoLista.vue';
  import ShoppingCart from './carrinhoCompras.vue';
  
  export default {
    components: {
      ProductList,
      ShoppingCart,
    },
    data() {
      return {
        products: [
          // Lista de produtos disponíveis
          // Você pode carregar isso de uma API ou de outro lugar
        ],
        cart: [],
      };
    },
    methods: {
      addToCart(product) {
        // Adicione o produto selecionado ao carrinho
        this.cart.push(product);
      },
      removeFromCart(product) {
        // Remova o produto do carrinho
        const index = this.cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      },
    },
  };
  </script>
  