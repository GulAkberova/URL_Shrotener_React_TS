import React, { useEffect, useState } from 'react'
import { Product } from '../models/api/Product';
import { ProductService } from '../service/ProductService';
import { IBaseService } from '../service/IBaseService';
function Link() {

    const [products, setproducts] = useState<Product[]>([]);
    const [updated, setUpdated] = useState<string>("");
    const generateLink = () => {

        let productService = new ProductService();
       console.log(productService);
       
        productService.getAll(updated)
            .then(res => {
                setproducts(res);
            })
       console.log(products);
       
    
      }
      
  return (
    <div>
      <div className='shorten_bigdiv'>
        <h2>GENERATE YOUR SHORTER URL!</h2>
     
       <div className='shorten_inpdiv'>
       <input
            value={updated}
            onChange={(e) => setUpdated(e.target.value)}
            type="text"
            placeholder="Shorten a link here..."
          />
    <button onClick={() => generateLink()}>Shorten it!</button>
       </div>
       <div className='shorten_resultdiv'>
        <p>https://github.com/GulAkberova/pages/Dictionary.tsx</p>
        <div>
          <span>ttps://github.sdgrd</span>
          <button>
            Coppy
          </button>
        </div>
        

       </div>
       <div className='shorten_resultdiv'>
        <p>https://github.com/GulAkberova/pages/Dictionary.tsx</p>
        <div>
          <span>ttps://github.sdgrd</span>
          <button>
            Coppy
          </button>
        </div>
        

       </div>
       </div>
    </div>
  )
}

export default Link