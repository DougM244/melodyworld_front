<template>
    <div class="registration-form">
      <h2>Cadastrar Produto</h2>
      <form @submit.prevent="cadastrarProduto">
        <div class="form-group">
          <label for="nome">Nome do Produto:</label>
          <input type="text" id="nome" v-model="produto.nome" required>
        </div>
        <div class="form-group">
          <label for="preco">Preço:</label>
          <input type="number" id="preco" v-model="produto.preco" required>
        </div>
        <div class="form-group">
          <label for="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" v-model="produto.quantidade" required>
        </div>
        <div class="form-group">
          <label for="codigo">Código:</label>
          <input type="text" id="codigo" v-model="produto.codigo" required>
        </div>
        <div class="form-group">
          <label for="marca">Marca:</label>
          <input type="text" id="marca" v-model="produto.marca" required>
        </div>
        <div class="form-group">
          <label for="categoria">Categoria:</label>
          <input type="text" id="codigo" v-model="produto.categoria" required>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        produto: {
          nome: "",
          preco: null,
          quantidade: null,
          codigo: "",
          marca:"",
          categoria:"",
        }
      };
    },
    methods: {
      cadastrarProduto() {

        console.log("Dados do produto a serem cadastrados:", this.produto);

        this.produto = {
          nome: "",
          preco: null,
          quantidade: null,
          codigo: "",
          marca: "",
          categoria: "",
        };
      }
    }
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
  