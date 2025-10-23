import React, { useState , useEffect} from 'react';
import '../assets/css/shop.css'
import {db} from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const productsCollectionRef = collection(db, "products");

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            const filteredData = data.docs.map((doc) =>(
                {
                    id: doc.id,
                    ...doc.data()
                }
            ));
            setProducts(filteredData)
        }
        getProducts()
    }, [])
    return (
        <>
            <div className='page-banner'>
                <div className='page-banner_details'>
                   <div className='page-banner_details_title' >
                         <h1>Our E-commerce Website</h1>
                   </div>
                </div>
            </div>

            <div className='section'>
                <div className='container'>
                    <div className="section_head">
                        <div className="product_details_title">
                            <h2>All Products</h2>
                        </div>
                    </div>
                </div>
            </div>

            {products?.length > 0 && (
                <div className="section_content">
                    <div className="grid three">
                        {products.map((product) =>(
                            <ProductCard 
                            key={product.id} 
                            product={product}
                            />
                        ))}
                    </div>

                </div>
            )}
        </>
    );
};

export default Shop;