<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  clients: {
    type: Array,
    required: true
  },
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['submit'])

const invoice = ref({
  clientId: '',
  items: [{ productId: '', quantity: 1 }]
})

const calculateTotal = computed(() => {
  return invoice.value.items.reduce((total, item) => {
    const product = props.products.find(p => p.id === item.productId)
    return total + (product?.price || 0) * item.quantity
  }, 0)
})

function addItem() {
  invoice.value.items.push({ productId: '', quantity: 1 })
}

function removeItem(index) {
  invoice.value.items.splice(index, 1)
}

function createInvoice() {
  emit('submit', invoice.value)
  invoice.value = {
    clientId: '',
    items: [{ productId: '', quantity: 1 }]
  }
}
</script>

<template>
  <div class="invoice-form">
    <form @submit.prevent="createInvoice">
      <div class="form-group">
        <label for="client">Cliente:</label>
        <select id="client" v-model="invoice.clientId">
          <option value="">Seleccionar cliente</option>
          <option v-for="client in clients" :value="client.id">
            {{ client.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>Productos:</label>
        <div v-for="(item, index) in invoice.items" :key="index" class="invoice-item">
          <select v-model="item.productId">
            <option value="">Seleccionar producto</option>
            <option v-for="product in products" :value="product.id">
              {{ product.name }} - ${{ product.price }}
            </option>
          </select>
          <input type="number" v-model="item.quantity" min="1" placeholder="Cantidad">
          <button type="button" @click="removeItem(index)">Eliminar</button>
        </div>
        <button type="button" @click="addItem">Agregar Producto</button>
      </div>

      <div class="total">
        Total: ${{ calculateTotal }}
      </div>

      <button type="submit">Crear Factura</button>
    </form>
  </div>
</template>

<style scoped>
.invoice-form {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

.invoice-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
</style>