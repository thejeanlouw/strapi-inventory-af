import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import fetch from 'node-fetch';

const STRAPI_API_URL = 'http://localhost:1337/api';
const API_KEY = 'facf255edf60059742a6d26510ab6f510785d03374924a5592efc2871e4a2b0485bda6fef8efd9855c96c9f09d84a14608fde0ef023f130780ce84cb2f663833109f6ec9a4e44f9bfd6e612eef7d1e35e1549abe0d3493c2f2b7b0be3b5cc79bafa08f551cc3ac1b02a175309b70e7b20f92e21235c021849b629eef4b2b258a';

async function fetchProducts() {
  try {
    const response = await fetch(`http://localhost:1337/api/products`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    console.log('Fetched products:', products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();