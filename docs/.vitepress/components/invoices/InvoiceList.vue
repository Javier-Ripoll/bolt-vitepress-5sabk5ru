<script setup>
defineProps({
  invoices: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['view', 'print'])
</script>

<template>
  <div class="invoice-list">
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
        <tr v-for="invoice in invoices" :key="invoice.id">
          <td>{{ invoice.number }}</td>
          <td>{{ invoice.client }}</td>
          <td>{{ invoice.date }}</td>
          <td>${{ invoice.total }}</td>
          <td>
            <button @click="emit('view', invoice.id)">Ver</button>
            <button @click="emit('print', invoice.id)">Imprimir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.invoice-list {
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