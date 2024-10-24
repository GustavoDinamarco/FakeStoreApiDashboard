import { useEffect, useState } from 'react';
import './App.css';
import { ProgressSpinner } from 'primereact/progressspinner';
import ProductsList from './ProductList';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const [productsResponse,cartResponse] = await
        Promise.all([
          fetch('https://fakestoreapi.com/products'),
          fetch('https://fakestoreapi.com/carts')
        ]);
        if(!productsResponse.ok || !cartResponse.ok){
          throw new Error('Falha na requisição.');
        }
        const productsData = await productsResponse.json();
        setProducts(productsData);
        const cartData = await cartResponse.json();
        setCart(cartData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  return (
    <div className="App" style={{padding:'20px'}}>
      <h1>Products</h1>
      {loading && <ProgressSpinner/>}
      {!loading && !error &&(
        <div>
          <ProductsList products={products}/>
        </div>
      )}
    </div>
  );
}

export default App;
