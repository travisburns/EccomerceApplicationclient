import React, { useEffect } from 'react'
import Slider from '../../components/Slider/Slider.jsx'
import "./HomePage.scss"
import Category from '../../components/Category/Category.jsx'
import ProductList from "../../components/ProductList/ProductList.jsx"
import SingleCategory from "../../components/SingleCategory/SingleCategory.jsx"
import {useSelector, useDispatch} from 'react-redux';
import { fetchCategories, fetchProductsByCategory} from '../../store/categorySlice.jsx'



const HomePage = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);


  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProductsByCategory(1, 'all'));
    dispatch(fetchProductsByCategory(2, 'all'));
  }, [])


  return (
    <div className='home-page'>
      <Slider />
      <Category categories = {categories} status = {categoryStatus} />


      {/* Cateogry one products */}
        <section>
          {
            productsByCategory[0] && <SingleCategory products = {productsByCategory[0]} status = {catProductAllStatus} />
          }
        </section>
      {/* Cateogry two products */}
      <section>
          {
            productsByCategory[1] && <SingleCategory products = {productsByCategory[1]} status = {catProductAllStatus} />
          }
        </section>

    </div>
  )
}

export default HomePage
