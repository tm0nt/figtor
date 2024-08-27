<template>
    <v-row class="d-flex align-center justify-center">
        <v-col cols="11" md="10">
            <v-card color="background" rounded="lg">
                <v-card-title>
                    <h3>Sua assinatura</h3>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="pa-5">
                    <v-toolbar color="input" class="pa-5" rounded="lg">
                        <v-toolbar-items class="mx-auto">
                            <div class="text-subtitle-1">Plano
                                <p class="text-h5">Elite</p>
                            </div>

                            <v-divider vertical class="ma-5 pa-6"></v-divider>

                            <div class="text-subtitle-1">Detalhes
                                <p class="text-h5">15 páginas/mês</p>
                            </div>
                            <v-divider vertical class="ma-5 pa-6"></v-divider>

                            <div class="text-subtitle-1">Preço
                                <p class="text-h5">R$ 69,99</p>
                            </div>

                            <v-divider vertical class="ma-5 pa-6"></v-divider>

                            <div class="text-subtitle-1">Status
                                <p class="text-h5 text-primary">Ativo</p>
                            </div>
                            <v-divider vertical class="ma-5 pa-6"></v-divider>
                            <v-btn prepend-icon="mdi-emoticon-sad" color="error" rounded="lg" class="text-capitalize"
                                variant="elevated">Cancelar Assinatura</v-btn>
                        </v-toolbar-items>

                    </v-toolbar>
                </v-card-text>
            </v-card>
            <v-card color="background">
                <v-card-title>
                    <h3>Detalhes de cobrança</h3>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-card rounded="xl" height="250" color="primary">
                                <template v-slot:prepend>
                                    <v-img src="https://i.imgur.com/adPdx5Z.png" width="100" class="mt-n4"></v-img>
                                </template>
                                <v-card-text class="pa-8 mt-n8">
                                    <h1>**** **** **** 8012</h1>
                                    <v-row>
                                        <v-col cols="9">
                                            <h3 class="text-subtitle-1 mt-2">NOME</h3>
                                            <h2 class="mt-n2">RAFAEL F SANTOS</h2>
                                        </v-col>
                                        <v-col cols="3">
                                            <h3 class="text-subtitle-1 mt-2">VALIDADE</h3>
                                            <h2 class="mt-n2 ml-auto">08/31</h2>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <label>Próxima data de cobrança</label>
                            <v-text-field bg-color="input" readonly placeholder="03/03/2021"></v-text-field>
                            <v-btn block color="primary" variant="elevated" @click="alterarCartao"
                                min-height="60">Atualizar Credencias de Cobrança</v-btn>
                        </v-col>
                    </v-row>

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