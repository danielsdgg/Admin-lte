import React from 'react';
import ViewProperty from './ViewProperty';

const PropertyList = ({property}) => {  

  const displayProperties = property?.map(properties => {
    var propertyimage = ""
    // console.log(properties.images)
    properties.images.map(image => {
      // console.log(image.image1)
      propertyimage = image.image1
      return propertyimage
    })

    // console.log(propertyimage)
    console.log(properties.name)

    return <ViewProperty key = {properties.id} id = {properties.id} name = {properties.name} property_type={properties.property_type} location={properties.location} selling_price={properties.selling_price}/>
  })

  return (
      
    <div className="page overflow-x-auto shadow-md sm:rounded-lg properties">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-6 py-3">
            Property name
            </th>
            <th scope="col" className="px-6 py-3">
            Type
            </th>
            <th scope="col" className="px-6 py-3">
            location
            </th>
            <th scope="col" className="px-6 py-3">
            Selling Price
            </th>
            <th scope="col" className="px-6 py-3">
            Edit
            </th>
            <th scope="col" className="px-6 py-3">
            Delete
            </th>
        </tr>
        </thead>
        <tbody>
        
            {displayProperties}
        </tbody>
    </table>
    </div>
    
  )
}

export default PropertyList;