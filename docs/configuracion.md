# Configuración

## Configuración de la Empresa

<div class="config-form">
  <form @submit.prevent="saveConfig">
    <div class="form-group">
      <label for="companyName">Nombre de la Empresa:</label>
      <input type="text" id="companyName" v-model="config.companyName" required>
    </div>

    <div class="form-group">
      <label for="taxId">NIF/CIF:</label>
      <input type="text" id="taxId" v-model="config.taxId" required>
    </div>

    <div class="form-group">
      <label for="address">Dirección:</label>
      <textarea id="address" v-model="config.address" required></textarea>
    </div>

    <div class="form-group">
      <label for="phone">Teléfono:</label>
      <input type="tel" id="phone" v-model="config.phone">
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="config.email" required>
    </div>

    <div class="form-group">
      <label for="currency">Moneda:</label>
      <select id="currency" v-model="config.currency">
        <option value="EUR">EUR - Euro</option>
        <option value="USD">USD - Dólar</option>
      </select>
    </div>

    <div class="form-group">
      <label for="taxRate">IVA por defecto (%):</label>
      <input type="number" id="taxRate" v-model="config.taxRate" min="0" max="100" required>
    </div>

    <button type="submit">Guardar Configuración</button>
  </form>
</div>

<script setup>
import { ref } from 'vue'

const config = ref({
  companyName: '',
  taxId: '',
  address: '',
  phone: '',
  email: '',
  currency: 'EUR',
  taxRate: 21
})

function saveConfig() {
  // Aquí iría la lógica para guardar la configuración
  console.log('Guardar configuración:', config.value)
}
</script>

<style>
.config-form {
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
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
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