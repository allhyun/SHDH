import { useEffect, useState } from 'react';

export default function ProductDetail () {
  const [products, setProducts] = useState([]);
  const limit = 12;
  const offset = (page - 1) * limit;


  return(
   <>
    <div>
      <div>
      {products.slice(offset, offset + limit).map((products) => {
              return <Product key={products.id} products={products} />
            })}

      </div>
    </div>

   </>
  )
}