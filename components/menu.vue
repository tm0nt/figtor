<template>
  <v-row class="my-4 d-flex align-center justify-center">
    <v-col cols="11">
      <v-card color="background">
        <v-row>
          <v-col cols="2" class="d-sm-flex d-md-none mt-1">
            <v-btn
              fab
              rounded="xl"
              color="primary"
              variant="text"
              @click="drawer = true"
              size="x-large"
              icon="fluent:list-20-regular"
            ></v-btn>
          </v-col>
          <v-col md="7" cols="8">
            <h1>Olá, Rafael</h1>
          </v-col>
          <v-col md="2" class="d-none d-md-flex">
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
          <v-col md="2" class="d-none d-md-flex">
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
          <v-col md="1" cols="1" class="mt-n1">
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
                      <v-icon size="10" color="primary">mdi-circle</v-icon>&nbsp;Uma nova
                      atualização está pronta!
                    </h2>
                    <h2 class="text-subtitle-1 ml-2 text-medium-emphasis">
                      <v-icon size="10">mdi-circle-outline</v-icon>&nbsp;Uma nova atualização está
                      pronta!
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
  <v-navigation-drawer v-model="drawer" color="background" width="280" border="none">
      <v-toolbar color="rgb(0,0,0,0)" height="60"></v-toolbar>
      <v-img src="/logo/figtor.png" width="180" class="ml-2"></v-img>
      <v-toolbar color="rgb(0,0,0,0)" height="30"></v-toolbar>
      <v-list density="comfortable" nav>
        <v-list-item
          v-for="item in items"
          :key="item.value"
          :to="item.to"
          :title="item.title"
          :class="{ 'selected-item': selectedItem === item.value }"
          @click="selectItem(item.value)"
        >
          <template v-slot:prepend>
            <v-icon :color="selectedItem === item.value ? 'primary' : ''">
              {{ item.icon }}
            </v-icon>
          </template>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-4">
          <v-list-item @click="logout" title="Sair" value="sair">
            <template v-slot:prepend>
              <v-icon color=""> fluent:door-arrow-left-20-regular </v-icon>
            </template>
          </v-list-item>
        </div>
      </template>
    </v-navigation-drawer>
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

const drawer = ref(true);
  const selectedItem = ref("home"); // Item selecionado inicial
  const items = [
    { title: "Dashboard", value: "home", icon: "fluent:home-20-regular", to: "/dashboard" },
    {
      title: "Histórico",
      value: "historico",
      icon: "fluent:history-20-regular",
      to: "/dashboard/historico/",
    },
    {
      title: "Pagamentos",
      value: "pagamentos",
      icon: "fluent:wallet-20-regular",
      to: "/dashboard/pagamentos/",
    },
    {
      title: "Aparelhos conectados",
      value: "aparelhos",
      icon: "fluent:link-square-20-regular",
      to: "/dashboard/aparelhos/",
    },
  ];
  
  const selectItem = (value) => {
    selectedItem.value = value;
  };
  
  const logout = () => {
    // Implementar lógica de logout aqui
  };

</script>

<style scoped>
.star-rating {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.selected-item {
    background-color: #121212; /* Cor de fundo para o item selecionado, se necessário */
  }
</style>
