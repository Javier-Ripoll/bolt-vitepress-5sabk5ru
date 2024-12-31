# Gestión de Facturas

<script setup>
import { ref } from 'vue'
import FormularioFactura from './.vitepress/components/facturas/FormularioFactura.vue'
import ListaFacturas from './.vitepress/components/facturas/ListaFacturas.vue'

const clientes = ref([
  { id: 1, nombre: 'Cliente 1' },
  { id: 2, nombre: 'Cliente 2' }
])

const productos = ref([
  { id: 1, nombre: 'Producto 1', precio: 100 },
  { id: 2, nombre: 'Producto 2', precio: 200 }
])

const facturas = ref([
  { 
    id: 1, 
    numero: 'F-001', 
    cliente: 'Cliente 1', 
    fecha: '2024-01-20', 
    total: 300 
  }
])

function guardarFactura(factura) {
  console.log('Guardar factura:', factura)
}

function verFactura(id) {
  console.log('Ver factura:', id)
}

function imprimirFactura(id) {
  console.log('Imprimir factura:', id)
}
</script>

## Nueva Factura

<FormularioFactura 
  :clientes="clientes" 
  :productos="productos" 
  @guardar="guardarFactura" 
/>

## Listado de Facturas

<ListaFacturas 
  :facturas="facturas" 
  @ver="verFactura"
  @imprimir="imprimirFactura"
/>