<template>
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
.selected-item {
  background-color: #121212; /* Cor de fundo para o item selecionado, se necessário */
}
</style>
