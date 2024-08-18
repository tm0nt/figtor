<template>
  <v-row class="my-4 d-flex align-center justify-center">
    <v-col cols="11">
      <v-card color="background">
        <v-row>
          <v-col cols="7">
            <h1>Olá, Rafael Moreira</h1>
          </v-col>
          <v-col cols="2">
            <v-btn
              block
              size="small"
              class="text-capitalize"
              :class="conta ? 'text-black' : 'text-white'"
              height="50"
              to="/dashboard/conta/"
              :color="conta ? 'primary' : 'input'"
              text="Minha conta"
            >
              <template v-slot:prepend>
                <v-icon :color="conta ? 'black' : 'primary'" size="20">
                  fluent:person-20-regular
                </v-icon>
              </template>
            </v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn
              block
              size="small"
              class="text-capitalize text-white"
              height="50"
              color="input"
              @click="dialogNotify = true"
              text="Feedback"
            >
              <template v-slot:prepend>
                <v-icon size="20" color="primary"> fluent:person-feedback-20-regular </v-icon>
              </template>
            </v-btn>
          </v-col>
          <v-col cols="1" class="mt-n1">
            <v-badge dot color="white" class="mt-2">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    fab
                    rounded="xl"
                    color="primary"
                    v-bind="props"
                    icon="fluent:alert-20-regular"
                  >
                  </v-btn>
                </template>
                <v-card rounded="xl" color="background">
                  <v-container>
                    <h2 class="text-subtitle-1">
                      <v-icon size="10" color="primary">mdi-circle</v-icon>&nbsp;Uma nova atualização está pronta!
                    </h2>
                    <h2 class="text-subtitle-1 ml-2 text-medium-emphasis" >
                      <v-icon size="10">mdi-circle-outline</v-icon>&nbsp;Uma nova atualização está pronta!
                    </h2>
                  </v-container>
                </v-card>
              </v-menu>
            </v-badge>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>

  <v-dialog width="600" v-model="dialogNotify">
    <v-card rounded="lg" color="background">
      <v-card-text class="text-center">
        <v-icon size="x-large">fluent:person-feedback-20-regular</v-icon>
        <h2>Faça sua avaliação</h2>

        <!-- Star Rating -->
        <div class="star-rating mt-2 mb-2">
          <v-icon
            v-for="star in 5"
            :key="star"
            :color="star <= rating ? 'primary' : 'grey lighten-1'"
            @click="rating = star"
            size="32"
          >
            mdi-star
          </v-icon>
        </div>

        <v-textarea class="mt-2" placeholder="Escreva um elogio, melhoria aqui...."></v-textarea>
        <v-btn
          block
          color="primary"
          class="text-black text-capitalize"
          height="60"
          size="large"
          text="Enviar"
        ></v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const dialogNotify = ref(false);
const rating = ref(0);

// Define props for the component
const props = defineProps({
  conta: {
    type: Boolean,
    default: false,
  },
});

// Use the prop
const { conta } = props;
</script>

<style scoped>
.star-rating {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>
