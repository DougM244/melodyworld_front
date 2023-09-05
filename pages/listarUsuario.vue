<template>
    <v-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id" >
          <td>{{ usuario.nome }}</td>
        </tr>
      </tbody>
    </v-table>
    <RouterLink to="adicionarUsuario">Cadastrar Novo</RouterLink>
</template>

<script setup>
import UsuarioService from '@/service/UsuarioService';

var usuarios = ref([]);

    function listarUsuarios () {
        UsuarioService.list().then(
            response => {
                usuarios.value = response.data;
            }
        )
    }

    onMounted(
        () => {listarUsuarios();} 
    )

</script>