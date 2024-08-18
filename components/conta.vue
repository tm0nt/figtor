<template>
  <v-row class="d-flex align-center justify-center">
    <v-col cols="11" md="10">
      <v-card color="background">
        <v-card-title>
          <h3>Altere seus dados</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12" md="5">
                <label class="label text-white-darken-2" for="nome">Seu nome</label>
                <v-text-field
                  id="nome"
                  prepend-inner-icon="fluent:person-20-regular"
                  bg-color="input"
                  placeholder="Insira seu nome aqui"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <label class="label text-white-darken-2" for="email">Seu email</label>
                <v-text-field
                  id="email"
                  prepend-inner-icon="fluent:mail-20-regular"
                  bg-color="input"
                  placeholder="Insira seu email aqui"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <label class="label text-white-darken-2" for="celular">Seu celular</label>
                <v-text-field
                  id="celular"
                  prepend-inner-icon="fluent:phone-20-regular"
                  bg-color="input"
                  placeholder="Insira seu celular aqui"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <label class="label text-white-darken-2" for="empresa">Sua empresa</label>
                <v-text-field
                  id="empresa"
                  prepend-inner-icon="fluent:building-20-regular"
                  bg-color="input"
                  placeholder="Insira sua empresa aqui"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <v-btn
                  text="Alterar dados"
                  class="text-black text-capitalize"
                  height="45"
                  block
                  size="small"
                  color="primary"
                ></v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
      <v-card color="background">
        <v-card-title>
          <h3>Altere sua senha</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12" md="4">
                <label class="label text-white-darken-2" for="senha_atual">Sua senha atual</label>
                <v-text-field
                  id="senha_atual"
                  bg-color="input"
                  prepend-inner-icon="fluent:password-20-regular"
                  :append-inner-icon="showCurrentPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append-inner="toggleCurrentPasswordVisibility"
                  :type="showCurrentPassword ? 'text' : 'password'"
                  placeholder="Insira aqui"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <label class="label text-white-darken-2" for="nova_senha">Sua nova senha</label>
                <v-text-field
                  id="nova_senha"
                  bg-color="input"
                  prepend-inner-icon="fluent:password-20-regular"
                  :append-inner-icon="showNewPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append-inner="toggleNewPasswordVisibility"
                  :type="showNewPassword ? 'text' : 'password'"
                  placeholder="Insira aqui"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="3" class="my-7">
                <v-btn
                  text="Trocar minha senha"
                  class="text-black text-capitalize"
                  height="45"
                  block
                  size="small"
                  color="primary"
                ></v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const showCurrentPassword = ref(false);
const showNewPassword = ref(false);

const toggleCurrentPasswordVisibility = () => {
  showCurrentPassword.value = !showCurrentPassword.value;
};

const toggleNewPasswordVisibility = () => {
  showNewPassword.value = !showNewPassword.value;
};
</script>
