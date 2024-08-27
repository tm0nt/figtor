<template>
    <v-row class="d-flex align-center justify-center">
        <v-col cols="11" md="10">
            <v-card color="background" rounded="lg">
                <v-card-title>
                    <h3>Sua assinatura</h3>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pa-5">
                    <v-toolbar color="white" class="pa-5" rounded="lg">
                        <v-toolbar-items class="mx-auto">
                            <div class="text-subtitle-1">
                                <v-icon size="60">mdi-laptop</v-icon>
                            </div>

                            <v-divider vertical class="ma-5 pa-6"></v-divider>
                            <div class="text-subtitle-1">APARELHO ATUAL
                                <p class="text-h5">Macbook Pro</p>
                            </div>

                            <v-divider vertical class="ma-5 pa-6"></v-divider>

                            <div class="text-subtitle-1">LOGIN
                                <p class="text-h5">17/08/2024 - 17h45m</p>
                            </div>

                            <v-divider vertical class="ma-5 pa-6"></v-divider>

                            <v-btn color="error" rounded="lg" class="text-capitalize"
                                variant="elevated">Não foi você? Clique aqui</v-btn>
                        </v-toolbar-items>

                    </v-toolbar>
                    <v-toolbar color="input" class="pa-5 mt-4" rounded="lg">
                        <v-toolbar-items class="mx-auto">
                            <div class="text-subtitle-1">
                                <v-icon size="60">mdi-cellphone</v-icon>
                            </div>

                            <v-divider vertical class="ma-5 pa-6"></v-divider>
                            <div class="text-subtitle-1">APARELHO ATUAL
                                <p class="text-h5">Macbook Pro</p>
                            </div>

                            <v-divider vertical class="ma-5 pa-6"></v-divider>

                            <div class="text-subtitle-1">LOGIN
                                <p class="text-h5">17/08/2024 - 17h45m</p>
                            </div>
                        

                            <v-divider vertical class="ma-5 pa-6"></v-divider>

                            <v-btn color="error" rounded="lg" class="text-capitalize"
                                variant="elevated">Não foi você? Clique aqui</v-btn>
                        </v-toolbar-items>

                    </v-toolbar>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-dialog v-model="dialogCartao" width="800">
        <v-card rounded="lg" color="background">
            <v-card-text class="ma-5">
                <h1 class="text-center mb-4">Altere seus dados</h1>
                <v-row>
                    <v-col md="4" cols="12">
                        <v-label>Número do cartão de crédito</v-label>
                        <v-text-field bg-color="input" placeholder="xxxx xxxx xxxx xxxx"></v-text-field>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-label>Nome do cartão</v-label>
                        <v-text-field bg-color="input" placeholder="Insira o nome"></v-text-field>
                    </v-col>
                    <v-col md="2"cols="6">
                        <v-label>Validade</v-label>
                        <v-text-field bg-color="input" placeholder="xx/xx"></v-text-field>
                    </v-col>
                    <v-col md="2"cols="6">
                        <v-label>CVV</v-label>
                        <v-text-field bg-color="input" placeholder="xxx"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-btn color="primary" variant="elevated" block min-height="60">Atualizar cartão</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

    </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const dialogCartao = ref(false);
const alterarCartao = async () => {
    dialogCartao.value= true;
    try{

    }catch(error){
        console.error(error);
    }
}

</script>