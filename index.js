import {computed, createApp, ref} from './vue.js';
import products from './data.js';

const app = {
  setup() {

    const filterText = ref('');
    const isStockOnly = ref(false);

    const filterProducts = computed(() => {
      
      const rows = [];

      products.forEach((product) => {
        if (product.name.toLocaleLowerCase().indexOf(filterText.value) === -1) {
          return;
        }

        if (isStockOnly.value && !product.stocked) {
          return;
        }

        rows.push(product);
      })

      return rows;

    });
    
    return {
      filterText,
      isStockOnly,
      filterProducts
    };
  },
};

createApp(app).mount('#app');
