import './style.min.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import ProductContext, { ProductContextType, useProductContext } from './contexts/contexts';

function App() {

  const [products, setProducts] = useState({
    all: [],
    featuredProducts: [],
    dealProducts: []
  })

  useEffect(() => {

    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featuredProducts: await result.json()})
    }
    fetchFeaturedProducts()

  }, [setProducts])

  return (
    <BrowserRouter> 
      <ProductContext>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/categories' element={<CategoriesView />} />
          <Route path='/products' element={<ProductsView />} />
          <Route path='/products/:name' element={<ProductDetailsView />} />
          <Route path='/contacts' element={<ContactsView />} />
          <Route path='/search' element={<SearchView />} />
          <Route path='/compare' element={<CompareView />} />
          <Route path='/wishlist' element={<WishListView />} />
          <Route path='/shoppingcart' element={<ShoppingCartView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
