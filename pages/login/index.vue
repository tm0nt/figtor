<template>
  <VContainer fluid class="fill-height">
    <VRow no-gutters align="center" justify="center" class="fill-height">
      <VCol cols="12" md="6" lg="5" sm="6">
        <VRow no-gutters align="center" justify="center">
          <VCol cols="10" md="6">
            <VImg src="/logo/figtor.png" class="mx-auto" width="200"></VImg>
            <VForm @submit.prevent="submit" class="mt-7">
              <div class="mt-1">
                <label class="label text-grey-darken-2" for="email">Seu e-mail</label>
                <VTextField
                  :rules="[ruleRequired, ruleEmail]"
                  v-model="email"
                  prepend-inner-icon="fluent:mail-24-regular"
                  id="email"
                  bg-color="input"
                  placeholder="Insira seu email aqui"
                  name="email"
                  type="email"
                />
              </div>
              <div class="mt-2">
                <label class="label text-grey-darken-2" for="password">Sua senha</label>
                <VTextField
                  :rules="[ruleRequired]"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-inner-icon="fluent:password-20-regular"
                  :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append-inner="togglePasswordVisibility"
                  id="password"
                  placeholder="Insira seu senha aqui"
                  name="password"
                  bg-color="input"
                />
              </div>
              <p class="text-body-2 mt-n4 text-right">
                <NuxtLink to="/reset-password" class="font-weight-bold text-primary"
                  >Esqueceu sua senha?</NuxtLink
                >
              </p>
              <div class="mt-4">
                <VBtn
                  type="submit"
                  block
                  min-height="50"
                  to="/dashboard/"
                  color="primary"
                  class="gradient text-capitalize"
                  >Entrar</VBtn
                >
              </div>
              <div class="mt-1">
                <VBtn
                  type="submit"
                  block
                  min-height="50"
                  color="primary"
                  variant="outlined"
                  class="gradient text-capitalize"
                  >Não possui conta?</VBtn
                >
              </div>
            </VForm>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");
const showPassword = ref(false);

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const submit = async () => {};
</script>
