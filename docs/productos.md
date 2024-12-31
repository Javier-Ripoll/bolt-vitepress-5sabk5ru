# Gestión de Productos

## Nuevo Producto

<div class="product-form">
  <form @submit.prevent="createProduct">
    <div class="form-group">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="product.name" required>
    </div>

    <div class="form-group">
      <label for="price">Precio:</label>
      <input type="number" id="price" v-model="product.price" min="0" step="0.01" required>
    </div>

    <div class="form-group">
      <label for="description">Descripción:</label>
      <textarea id="description" v-model="product.description"></textarea>
    </div>

    <div class="form-group">
      <label for="stock">Stock:</label>
      <input type="number" id="stock" v-model="product.stock" min="0" required>
    </div>

    <button type="submit">Guardar Producto</button>
  </form>
</div>

## Listado de Productos

<div class="product-list">
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Stock</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>${{ product.price }}</td>
        <td>{{ product.stock }}</td>
        <td>
          <button @click="editProduct(product.id)">Editar</button>
          <button @click="deleteProduct(product.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<script setup>
import { ref } from 'vue'

const product = ref({
  name: '',
  price: 0,
  description: '',
  stock: 0
})

const products = ref([
  { 
    id: 1, 
    name: 'Producto Ejemplo', 
    price: 99.99, 
    stock: 100 
  }
])

function createProduct() {
  // Aquí iría la lógica para crear el producto
  console.log('Crear producto:', product.value)
}

function editProduct(id) {
  console.log('Editar producto:', id)
}

function deleteProduct(id) {
  console.log('Eliminar producto:', id)
}
</script>

<style>
.product-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.product-list {
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

button {
  padding: 8px 16px;
  margin-right: 8px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>