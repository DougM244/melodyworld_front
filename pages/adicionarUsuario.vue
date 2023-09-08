<template>
  <v-form >
    <v-container>
      <v-row>
        <v-col cols="4" md="4">
          <v-text-field 
            v-model="usuario.nome"
            label="Nome"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field
            v-model="usuario.email"
            label="Email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4" md="4">
          <v-text-field
            v-model="usuario.telefone"
            label="Telefone"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" rows="12">
              <v-card cols="12">
                  <template v-slot:title>
                      Endereço
                  </template>
                  <template v-slot:text>
                      <v-row>
                          <v-col cols="10" md="10">
                              <v-text-field 
                                  v-model="usuario.endereco.logradouro"
                                  label="Logradouro"
                                  required
                              ></v-text-field>
                          </v-col>
                          <v-col cols="2" md="2">
                              <v-text-field 
                                  v-model="usuario.endereco.numero"
                                  label="Num."
                                  required
                              ></v-text-field>
                          </v-col>
                          
                      </v-row>
                      <v-row>
                          <v-col cols="4" md="4">
                              <v-text-field 
                                  v-model="usuario.endereco.bairro"
                                  label="Bairro"
                                  required
                              ></v-text-field>
                          </v-col>
                          <v-col cols="4" md="4">
                              <v-text-field 
                                  v-model="usuario.endereco.cep"
                                  label="CEP"
                                  required
                              ></v-text-field>
                          </v-col>
                          <v-col cols="4" md="4">
                              <v-text-field 
                                  v-model="usuario.endereco.uf"
                                  label="UF"
                                  required
                              ></v-text-field>
                          </v-col>

                      </v-row>
                  </template>
                  </v-card>
          </v-col>

      </v-row>
      <v-row >
          <v-col cols="4"></v-col>
          <v-col cols="4" align-content="center">
              <v-btn color="success" class="mt-4"  block @click="save" >
                  Cadastrar
              </v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import UsuarioService from '@/service/UsuarioService';

var usuario = reactive ({
nome: "",
email: "",
telefone: "",
endereco: {
  logradouro: "",
      numero: "",
  bairro: "",
  cep: "",
  uf: ""
}

}) ;

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