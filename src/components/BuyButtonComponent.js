import React, {useEffect, useState} from 'react';

function BuyButtonComponent({product}) {
  // Paste the stripe-buy-button snippet in your React component
    const [currentProduct, setCurrentProduct] = useState(''); 
    useEffect(() => {
        console.log(product)
        setCurrentProduct(product)

    }, [product])
    

  return (
    <>

 

    </>
    );
}

export default BuyButtonComponent