<script setup>
import { formatearFecha } from '../../utils/formateo'

defineProps({
  facturas: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['ver', 'imprimir'])
</script>

<template>
  <div class="lista-facturas">
    <table>
      <thead>
        <tr>
          <th>Nº Factura</th>
          <th>Cliente</th>
          <th>Fecha</th>
          <th>Total</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="factura in facturas" :key="factura.id">
          <td>{{ factura.numero }}</td>
          <td>{{ factura.cliente }}</td>
          <td>{{ formatearFecha(factura.fecha) }}</td>
          <td>${{ factura.total }}</td>
          <td>
            <button @click="emit('ver', factura.id)">Ver</button>
            <button @click="emit('imprimir', factura.id)">Imprimir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.lista-facturas {
  margin-top: 40px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>