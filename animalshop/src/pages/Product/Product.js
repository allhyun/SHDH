import React from 'react';
import ProductList from './components/Product/Product';
import { useParams } from 'react-router-dom'; 

export default function Products() {

  const { category } = useParams();
  return(
    <>
    {
      category === 'category1' ? 
      <div className='category1'>
        <ProductList tag1={'카테고리1'} category={'카테고리1'} />
      </div> : null
    }
    {
      category === 'category2' ? 
      <div className='category2'>
        <ProductList tag1={'카테고리2'}  category={'카테고리2'} />
      </div> : null
    }
    {
      category === 'category3' ? 
      <div className='category3'>
        <ProductList tag1={'카테고리3'}  category={'카테고리3'} />
      </div> : null
    }
    {
      category === 'category4' ? 
      <div className='category4'>
        <ProductList tag1={'카테고리4'} category={'카테고리4'} />
      </div> : null
    }
    
    </>
  )
}ssss