import { useState, useEffect } from 'react';
import './Product.scss';
function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
          setData(data.products);
        })
    }

    fetchApi();
  }, []);

  return (
    <>
      <div className='product__list'>
        {data.map(item => (
          <div className='product__item' key={item.id}>
            <div className='product__image'>
              <img src={item.thumbnail} alt={item.title}></img>
            </div>
            <h4 className='product__title'>{item.title}</h4>
            <p className='product__price'>Giá: {item.price}$</p>
            <p className='product__percent'>Giảm giá: {item.discountPercentage}%</p>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>

    </>
  );
}

export default ProductList;