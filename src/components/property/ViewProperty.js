import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ViewProperty = ({id, name, selling_price, property_type, location}) => {
    
    const navigate = useNavigate()
    function handleDelete(){
        fetch(`http://127.0.0.1:5000/properties/${id}`,{
          method:"DELETE",
          headers:{"Content-Type":"application/json"}
        })
        .then((response) => {
          if (response.status === 200){
            // navigate('/')
            response.json()
          }
        })
        .then((data) => console.log(data))
  
      }
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {name}
            </th>
            <td className="px-6 py-4">
            {property_type}
            </td>
            <td className="px-6 py-4">
            {location}
            </td>
            <td className="px-6 py-4">
            ${selling_price}
            </td>
            <td className="px-6 py-4">
            <Link to={`/updateproperty/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link>
            </td>
            <td className="px-6 py-4">
            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
        


    )

}

export default ViewProperty