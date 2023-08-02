import {useContext} from 'react'
import { ProductContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.style.scss'

const Shop = () => {
  const {products}=useContext(ProductContext)
  return (
    <div>
      <div className='products-container'>
        {products.map(products=>(
          <ProductCard key={products.id} product={products}/>
        )) }
      </div>
    </div>
  );
};

export default Shop;
