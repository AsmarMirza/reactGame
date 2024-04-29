export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export async function deleteProduct(id) {
  const res = await fetch("https://fakestoreapi.com/products/" + id, {
    method: "delete",
  });
  const data = res.json();
  await getAllProducts();
  return data;
}
