import React, { useState } from "react";
import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useEffect } from "react";
import {v4 as uuidv4} from "uuid"

const TableForm = ({
  id,
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // submit the function
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newItems={
            id:uuidv4(),
            description,
            quantity,
            price,
            amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list,newItems])
        setIsEditing(false)
    }
    useEffect(()=>{
        const calculateAmount=(amount)=>{
            setAmount(quantity*price)
    }
   calculateAmount(amount)
    },[quantity,price,amount,setAmount])
    // calculate the total amount of items in the table
  useEffect(()=>{
    let rows=document.querySelectorAll(".amount")
    let sum=0
    for(let i=0;i<rows.length;i++)
    {
      if(rows[i].className === "amount"){
           sum+= isNaN(rows[i].innerHTML) ? 0:parseInt(rows[i].innerHTML)
           setTotal(sum)
      }
    }
  })


    // Edit the Function
    const editrow=(id)=>{
      const editingrow=list.find((row)=>row.id===id)
      setList(list.filter((row)=>row.id!== id))
      setIsEditing(true)
      setDescription(editingrow.description)
      setQuantity(editingrow.quantity)
      setPrice(editingrow.price)
    }
    // delete the function
    const deleterow=(id)=> setList(list.filter((row)=>row.id!== id))

  return (
    <>
         <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            maxLength={96}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              maxLength={33}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              maxLength={33}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
        > {isEditing?"EDITING":"ADD ITEMS"}
         
        </button>

      </form>
      {/* Table items */}
      <table width="100%" className="mb-10">
      <thead>
          <tr className="bg-gray-100 p-2">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
      {list.map(({id,description,quantity,price,amount})=>
      (
       <React.Fragment key={id}>
       
   
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                {/* <td>{amount}</td> */}
                <td className="amount">{amount}</td>
                <td><button onClick={()=>deleterow(id)}><MdAutoDelete className="text-red-500 text-xl"  /></button></td>
                <td><button onClick={()=>editrow(id)}><FaEdit className="text-green-500 text-xl"  /></button></td>
              </tr>
            </tbody>
       </React.Fragment>
      
      ))}
      </table>
      <div>
        <h2 className=" flex items-end justify-end text-2xl font-bold text-gray-800">Rupees: {total.toLocaleString()}</h2>
      </div>

        </>
  );
};

export default TableForm;
