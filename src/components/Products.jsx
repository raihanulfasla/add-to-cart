import {React,useState} from "react";
import {Data}from './Productlist';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LabelBottomNavigation from "../Bottom";
import Images from "./products/Images";


// import LabelBottomNavigation from './Bottom';

function Products(){
const [items , setItems]=useState(Data);



const decQty=(id)=>{

  const newItem=items.map((item)=>
  item.id===id && item.Qty>0?{...item,Qty:item.Qty-1}:item
  );
  setItems(newItem)
};



const inQty=(id)=>{

  const newItem=items.map((item)=>
  item.id===id? {...item,Qty:item.Qty+1}:item
  );
  setItems(newItem)
};




   return(
  <div>
    <div className="image">
     <Images/>
    </div>
    <div className="head">
  <h1 className=" text-info mb-5 mt-5 text-center" >Products</h1>
  </div>
 {items.map((item)=>(
 <div className="d-inline-flex p-3">
 <Card className="shadow p-3 m-2 bg-body-tertiary rounded"
    style={{ width: '13rem' }}>
      <Card.Img 
      className="p-2 bg-gradient"
    //  variant="top" src="src\components\assets\project2images\image3.webp"
      variant="top" src={`src/components/assets/project2images/${item.image}.webp`} 
      />
     
      <Card.Body>
        <Card.Title className="text-primary bg-black ">{item.mode}</Card.Title>
        <Card.Text >
          {item.Pattern}
        </Card.Text>
        <h5>{item.fabric}</h5>
        <h4> ₹{item.Price}</h4>
        <div>
          <p>
            Qty:
            <Button onClick={()=>decQty(item.id)} className="m-1">-</Button>{item.Qty}
            <Button onClick={()=>inQty(item.id)} className="m-1">+</Button>
          </p>
        </div>
        <Button className="ml-4"variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
 ))}

   <div className="">
   
   </div>
    <LabelBottomNavigation/>
    </div>

  );
}

export default Products