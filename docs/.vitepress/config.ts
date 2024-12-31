import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'es-ES',
  title: 'Sistema de Facturación',
  description: 'Sistema de gestión de facturas y clientes',

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Facturas', link: '/facturas' },
      { text: 'Clientes', link: '/clientes' },
      { text: 'Productos', link: '/productos' },
    ],

    sidebar: [
      {
        text: 'Gestión',
        items: [
          { text: 'Facturas', link: '/facturas' },
          { text: 'Clientes', link: '/clientes' },
          { text: 'Productos', link: '/productos' },
          { text: 'Configuración', link: '/configuracion' },
        ],
      },
    ],
  },
});