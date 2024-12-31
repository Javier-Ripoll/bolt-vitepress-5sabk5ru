<script setup>
import { ref, computed } from 'vue'
import { calcularTotal } from '../../utils/calculadora'

const props = defineProps({
  clientes: {
    type: Array,
    required: true
  },
  productos: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['guardar'])

const factura = ref({
  clienteId: '',
  items: [{ productoId: '', cantidad: 1 }]
})

const total = computed(() => calcularTotal(factura.value.items, props.productos))

function agregarItem() {
  factura.value.items.push({ productoId: '', cantidad: 1 })
}

function eliminarItem(indice) {
  factura.value.items.splice(indice, 1)
}

function guardarFactura() {
  emit('guardar', factura.value)
  factura.value = {
    clienteId: '',
    items: [{ productoId: '', cantidad: 1 }]
  }
}
</script>

<template>
  <div class="formulario-factura">
    <form @submit.prevent="guardarFactura">
      <div class="grupo-formulario">
        <label for="cliente">Cliente:</label>
        <select id="cliente" v-model="factura.clienteId">
          <option value="">Seleccionar cliente</option>
          <option v-for="cliente in clientes" :value="cliente.id">
            {{ cliente.nombre }}
          </option>
        </select>
      </div>

      <div class="grupo-formulario">
        <label>Productos:</label>
        <div v-for="(item, indice) in factura.items" :key="indice" class="item-factura">
          <select v-model="item.productoId">
            <option value="">Seleccionar producto</option>
            <option v-for="producto in productos" :value="producto.id">
              {{ producto.nombre }} - ${{ producto.precio }}
            </option>
          </select>
          <input type="number" v-model="item.cantidad" min="1" placeholder="Cantidad">
          <button type="button" @click="eliminarItem(indice)">Eliminar</button>
        </div>
        <button type="button" @click="agregarItem">Agregar Producto</button>
      </div>

      <div class="total">
        Total: ${{ total }}
      </div>

      <button type="submit">Guardar Factura</button>
    </form>
  </div>
</template>

<style scoped>
.formulario-factura {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.grupo-formulario {
  margin-bottom: 20px;
}

.item-factura {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
</style>