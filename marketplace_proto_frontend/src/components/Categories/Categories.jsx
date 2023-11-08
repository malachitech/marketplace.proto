import React from 'react';
import imgFour from '../Images/productFour.png';
import imgThree from '../Images/productThree.png';
import styles from "./Categories.module.css";
function Categories() {

    const products = [
        {
            id: 1,
            name: "product-one",
            price: "$" + 50,
            image: imgThree
        },
        {
            id: 2,
            name: "product-two",
            price: "$" + 60,
            image: imgThree

        },
        {
            id: 3,
            name: "product-three",
            price: "$" + 80,
            image: imgThree

        },
        {
            id: 4,
            name: "product-four",
            price: "$" + 34,
            image: imgFour

        },
        {
            id: 5,
            name: "product-five",
            price: "$" + 58,
            image: imgFour

        }
    ]
  return (
    <div className={styles.productCards}>
        {
            products && products.map(product => {
                return (
                    <div className={styles.productCard} key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                )
            })
        }
      
    </div>
  );
}

export default Categories;