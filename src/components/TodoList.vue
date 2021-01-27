<template>
  <div class="pt-3">
      <v-row class="d-flex justify-center pa-5 ma-5">
          <v-col cols="6">
              <v-text-field label="New Todo" outlined v-model="newItem" @keyup.enter="addItem"></v-text-field>
          </v-col>
          <v-col cols="1">
              <v-btn x-large color="primary" @click="addItem">Teste</v-btn>
          </v-col>
      </v-row>
      <transition-group name="fade">
          <v-card class="mx-auto pa-3 ma-3 text-center" max-width="400" v-for="Todo in Todos" :key="Todo.id">
              <v-row>
                  <v-col cols="8">
                      <v-list-item-title class="headline mb-1">
                          {Todo.name}
                      </v-list-item-title>
                  </v-col>
                  <v-col cols="4">
                      <v-btn icon color="red" @click="deleteTodo(Todo.id)">
                          <v-icon>mdi-delete</v-icon>
                      </v-btn>
                  </v-col>
              </v-row>
          </v-card>
      </transition-group>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>