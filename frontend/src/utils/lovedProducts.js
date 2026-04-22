const LOVED_PRODUCTS_KEY = 'tech_store_loved_products';

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function notifyLovedProductsChanged() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('loved-products-updated'));
  }
}

export function getLovedProducts() {
  if (!canUseStorage()) {
    return [];
  }

  try {
    return JSON.parse(window.localStorage.getItem(LOVED_PRODUCTS_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveLovedProducts(products) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(LOVED_PRODUCTS_KEY, JSON.stringify(products));
  notifyLovedProductsChanged();
}

export function isProductLoved(productId) {
  return getLovedProducts().some((product) => product.id === productId);
}

export function toggleLovedProduct(product) {
  const lovedProducts = getLovedProducts();
  const exists = lovedProducts.some((item) => item.id === product.id);

  if (exists) {
    saveLovedProducts(lovedProducts.filter((item) => item.id !== product.id));
    return false;
  }

  saveLovedProducts([product, ...lovedProducts]);
  return true;
}

export function removeLovedProduct(productId) {
  saveLovedProducts(getLovedProducts().filter((product) => product.id !== productId));
}
