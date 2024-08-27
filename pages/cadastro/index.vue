<template>
    <VContainer fluid class="fill-height">
        <VRow no-gutters align="center" justify="center" class="fill-height">
            <VCol cols="12" md="6" lg="5" sm="6">
                <VRow no-gutters align="center" justify="center">
                    <VCol cols="10" md="8">
                        <VImg src="/logo/figtor.png" class="mx-auto" width="150"></VImg>
                        <h2 class="text-center mt-4 mb-2">{{ titleForm }}</h2>
                        <VForm @submit.prevent="submit" class="mt-7" v-if="!formVerificacao && !stepSenha">
                            <div class="mt-1">
                                <label class="label text-grey-darken-2" for="email">Seu e-mail</label>
                                <VTextField :rules="[ruleRequired, ruleEmail]" v-model="email"
                                    prepend-inner-icon="fluent:mail-24-regular" id="email" bg-color="input"
                                    placeholder="Insira seu email para cadastro aqui" name="email" type="email" />
                            </div>
                            <div class="mt-4">
                                <VBtn type="submit" block min-height="50" @click="verificarCodigo" color="primary"
                                    class="gradient">VERIFICAR</VBtn>
                            </div>
                            <div class="mt-2">
                                <VBtn type="submit" block min-height="50" color="#909090" variant="tonal"
                                    class="text-capitalize">Fazer Login</VBtn>
                            </div>
                        </VForm>
                        <VForm @submit.prevent="submit" class="mt-7" v-if="formVerificacao">
                            <div class="mt-1">
                                <label class="label text-grey-darken-2" for="email">Insira o código de
                                    verificação</label>
                                <v-otp-input focus-all v-model="codigo" variant="solo" color="input"></v-otp-input>
                            </div>
                            <div class="mt-4">
                                <VBtn type="submit" block min-height="50" @click="senha" color="primary"
                                    class="gradient">RECEBER CÓDIGO</VBtn>
                            </div>

                        </VForm>
                        <VForm @submit.prevent="submit" class="mt-7" v-if="stepSenha">
                            <div class="mt-1">
                                <div class="mt-2">
                                    <label class="label text-grey-darken-2" for="password">Sua senha</label>
                                    <VTextField :rules="[ruleRequired]" v-model="password"
                                        :type="showPassword ? 'text' : 'password'"
                                        prepend-inner-icon="fluent:password-20-regular"
                                        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                        @click:append-inner="togglePasswordVisibility" id="password"
                                        placeholder="Insira seu senha aqui" name="password" bg-color="input" />
                                </div>
                                <div class="mt-2">
                                    <label class="label text-grey-darken-2" for="password">Confirme sua senha</label>
                                    <VTextField :rules="[ruleRequired]" v-model="confirmPassword"
                                        :type="showPassword ? 'text' : 'password'"
                                        prepend-inner-icon="fluent:password-20-regular"
                                        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                        @click:append-inner="togglePasswordVisibility" id="password"
                                        placeholder="Insira seu senha aqui" name="password" bg-color="input" />
                                </div>
                            </div>
                            <div class="mt-4">
                                <VBtn type="submit" block min-height="50" @click="verificarCodigo" color="primary"
                                    class="gradient">CRIAR CONTA</VBtn>
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
const formVerificacao = ref(false);
const titleForm = ref('Vamos te ajudar com isso.');
const codigo = ref(null);
const password = ref(null)
const confirmPassword = ref(null);
const showPassword = ref(false);
const stepSenha = ref(false);
const { ruleEmail, ruleRequired } = useFormRules();


const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const verificarCodigo = async () => {
    formVerificacao.value = true;
    titleForm.value = 'Insira o código enviado no seu E-mail';
    try {
    } catch (error) {
        console.error(error);
    }
}

const senha = async () => {
    formVerificacao.value = false;
    titleForm.value = 'Vamos criar sua senha!';
    stepSenha.value = true;
    try {

    } catch (error) {
        console.error(error)
    }

}

const submit = async () => { };
</script>