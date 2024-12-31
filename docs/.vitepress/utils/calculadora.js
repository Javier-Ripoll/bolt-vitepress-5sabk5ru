export function calcularTotal(items, productos) {
  return items.reduce((total, item) => {
    const producto = productos.find(p => p.id === item.productoId)
    return total + (producto?.precio || 0) * item.cantidad
  }, 0)
}