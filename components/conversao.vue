<template>
  <v-row class="d-flex align-center justify-center">
    <v-col cols="11" md="10">
      <v-text-field bg-color="input" placeholder="Insira seu link do figma aqui.">
        <template v-slot:append-inner>
          <v-btn
            block
            color="primary"
            class="text-capitalize"
            size="large"
            append-icon="fluent:arrow-download-20-regular"
            >Implementar!</v-btn
          >
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="11" md="10">
      <v-row>
        <v-col md="6" cols="12">
          <v-card color="input">
            <v-card-text class="pa-5">
              <v-chip variant="elevated" class="text-black">Preview da página</v-chip>
              <p class="text-center text-medium-emphasis">Nenhum dado disponível!</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="6" cols="12">
          <v-progress-linear rounded="sm" v-model="knowledge" height="40">
            <strong>{{ Math.ceil(knowledge) }}%</strong>
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup>
const knowledge = ref(30);
</script>
