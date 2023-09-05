<template>
    <input type="text" v-model="usuario.nome" id="nome"/>
    <button type="submit" block @click="save">Cadastrar</button>
  </template>
  
  <script setup>
  import UsuarioService from '@/service/UsuarioService'
  const usuario = reactive({
    nome: '',
  })

  function save() {
    console.log(usuario)
    UsuarioService.create(usuario).then(
        response => {
            console.log(response.status);
            navigateTo("listarUsuarios");
        }
    )
    
  }
  </script>