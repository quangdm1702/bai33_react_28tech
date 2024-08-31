import CreateProduct from "../CreateProduct";
import ProductList from "./ProductList";

function Product() {
  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      <CreateProduct />
      <ProductList />
    </>
  );
}

export default Product;