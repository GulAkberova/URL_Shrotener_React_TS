import React, { SyntheticEvent, useEffect, useState } from "react";
import { IBaseService } from "../service/IBaseService";
import { BaseService } from "../service/BaseService";
import { BaseModel } from "../models/api/BaseModel";
function Link() {
  const [products, setproducts] = useState<BaseModel[]>([]);
  const [updated, setUpdated] = useState<string>("");
  const [copy,setCopy]=useState(false)

  const generateLink = (e: SyntheticEvent) => {
    let productService = new BaseService();
    console.log(updated);
    productService.getİnfo(updated).then((res) => {
      // console.log(res);
      setproducts([...products,{
        original_link: res.result.original_link,
        full_short_link: res.result.full_short_link
      }])

     
      
    });
  };
 const handleCopy=(updated:string)=>{
  setCopy(true)
  setTimeout(() => {
    setCopy(false)
    
  }, 3000);
  navigator.clipboard.writeText(updated);
  alert('copied')
 }
  console.log(products)
  return (
    <div>
      <div className="shorten_bigdiv">
        <h2>GENERATE YOUR SHORTER URL!</h2>

        <div className="shorten_inpdiv">
          <input
            value={updated}
            onChange={(e) => setUpdated(e.target.value)}
            type="text"
            placeholder="Shorten a link here..."
          />
          <button onClick={generateLink}>Shorten it!</button>
        </div>

        { products && 
  products.map((i, key:number)=>(
    <div className="shorten_resultdiv" key={key}>
    <p>{i.original_link}</p>
    <div>
      <span>{i.full_short_link}</span>
      <button onClick={(key)=>handleCopy(i.full_short_link)}>{copy? <p>Copied</p>:<p>Copy</p>
}</button>
    </div>
  </div>

  ))
}
      
      </div>
    </div>
  );
}

export default Link;
