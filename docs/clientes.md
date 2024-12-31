# Gestión de Clientes

## Nuevo Cliente

<div class="client-form">
  <form @submit.prevent="createClient">
    <div class="form-group">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="client.name" required>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="client.email" required>
    </div>

    <div class="form-group">
      <label for="phone">Teléfono:</label>
      <input type="tel" id="phone" v-model="client.phone">
    </div>

    <div class="form-group">
      <label for="address">Dirección:</label>
      <textarea id="address" v-model="client.address"></textarea>
    </div>

    <button type="submit">Guardar Cliente</button>
  </form>
</div>

## Listado de Clientes

<div class="client-list">
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in clients" :key="client.id">
        <td>{{ client.name }}</td>
        <td>{{ client.email }}</td>
        <td>{{ client.phone }}</td>
        <td>
          <button @click="editClient(client.id)">Editar</button>
          <button @click="deleteClient(client.id)">Eliminar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<script setup>
import { ref } from 'vue'

const client = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
})

const clients = ref([
  { 
    id: 1, 
    name: 'Cliente Ejemplo', 
    email: 'cliente@ejemplo.com', 
    phone: '123456789' 
  }
])

function createClient() {
  // Aquí iría la lógica para crear el cliente
  console.log('Crear cliente:', client.value)
}

function editClient(id) {
  console.log('Editar cliente:', id)
}

function deleteClient(id) {
  console.log('Eliminar cliente:', id)
}
</script>

<style>
.client-form {
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

.client-list {
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