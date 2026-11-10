<script setup>
import { ref, computed } from 'vue'
import { istVolljaehrig } from '../volljaehrig.js'

// Das Alter, das der Nutzer eingibt
const alter = ref(null)

// Der Text, der angezeigt wird
const ergebnis = computed(() => {
  if (alter.value === null || alter.value === '') return 'Bitte Alter eingeben'
  return istVolljaehrig(Number(alter.value)) ? 'Volljährig' : 'Nicht volljährig'
})
</script>

<template>
  <div class="box">
    <h1>Alters-Check</h1>
    <input v-model="alter" type="number" placeholder="Alter" />
    <p>{{ ergebnis }}</p>
  </div>
</template>

<style scoped>
.box { font-family: sans-serif; text-align: center; margin-top: 80px; }
h1 { font-size: 40px; }
input { font-size: 40px; width: 200px; padding: 8px 16px; text-align: center; border-radius: 16px; border: 3px solid #7cb518; }
p { font-size: 48px; font-weight: bold; margin-top: 32px; }
</style>
