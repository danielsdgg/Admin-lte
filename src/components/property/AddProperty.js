import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function NewProperty() {
    //const {name, property_type, location, selling_price, leasing_price, description, leasing, status} = property
    const navigate = useNavigate()
    // declaring the variables
    const [name, setName] = useState("")
    const [property_type, setPropertyType] = useState("")
    const [location, setLocation] = useState("")
    const [selling_price, setSellingPrice] = useState("")
    const [leasing_price, setLeasingPrice] = useState("")
    const [description, setDescription] = useState("")
    const [leasing, setLeasing] = useState("")
    const [status, setStatus] = useState("")

    
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image, setImage] = useState("")
    // const [images, setImages] = useState([])
    var images = []
    function handleSubmit(e){
        e.preventDefault()
        // creating an object to hold data
        const newProperty = {
            name:name,
            property_type:property_type,
            location:location,
            selling_price:selling_price,
            leasing_price:leasing_price,
            description:description,
            leasing:leasing,
            status:status,
            
        }

        // const images = {
        //     // property_id:property_id,
        //     image1:image1,
        //     image2:image2,
        //     image3:image3

        // }
        // fetch request to add property to the server
        fetch("http://127.0.0.1:5000/properties",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newProperty)
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
        // clearing our input fields after adding data
        // setInputClear()
        // navigate to properties page after adding a property
        // navigate('/properties')
    }
    function setInputClear(){
        setName("")
        setPropertyType("")
        setLocation("")
        setSellingPrice("")
        setLeasingPrice("")
        setDescription("")
        setLeasing("")
        setStatus("")
    }

    const submitImage = () => {
        // console.log(image1)
        // console.log(image2)
        // console.log(image3)

       images.push(image1)
       images.push(image2)
       images.push(image3)

    //    console.log(image)
       images.map(picha => {
        const data = new FormData()
        data.append("file",picha)
        data.append("upload_preset","react-upload")
        data.append("cloud_name","ddei3mzex")

        fetch("https://api.cloudinary.com/v1_1/ddei3mzex/image/upload",{
            method:"POST",
            body:data
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log(data.url);
            setImage(data.url)
        }).catch((err) => {
            console.log(err)
        })

        return image
        

       })        
    }
    

   


    // Our form
  return (
        <div className='addproperty'>
            
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <h1 className='text-center'>Add Property</h1>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Name of Property
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="username" value = {name} placeholder="property-name" onChange={e => setName(e.target.value)} />
                            </div>


        </div>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Property-Type
            </label>
            </div>
            <div className="md:w-2/3">
            <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value = {property_type} onChange={e => setPropertyType(e.target.value)} >
                <option>Select</option>
                <option>Apartment</option>
                <option>Land</option>
                <option>Homes</option>

            </select>
            </div>


        </div>


        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Description
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value = {description} placeholder="description of the property" onChange={e => setDescription(e.target.value)} />
            </div>

        </div>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Location
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value = {location} placeholder="location of the property" onChange={e => setLocation(e.target.value)} />
            </div>

        </div>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Selling-Price
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value = {selling_price} placeholder="$23000" onChange={e => setSellingPrice(e.target.value)} />
            </div>

        </div>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Leasing-Price
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value = {leasing_price} placeholder="$100 /month" onChange={e => setLeasingPrice(e.target.value)} />
            </div>
        </div>

       
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Are you leasing your property?
            </label>
            </div>
            <div className="md:w-2/3">
            <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value = {leasing} onChange={e => setLeasing(e.target.value)} >
                <option>Select</option>
                <option>true</option>
                <option>false</option>
            </select>
            </div>
        </div>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Is the property right for leasing?
            </label>
            </div>
            <div className="md:w-2/3">
            <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value = {status} onChange={e => setStatus(e.target.value)} >
                <option>Select</option>
                <option>true</option>
                <option>false</option>
            </select>
            </div>
        </div>

      

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Property Image 
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type='file' onChange={(e) => setImage1(e.target.files[0])} />
            </div>
        </div>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Property Image 
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type='file' onChange={(e) => setImage2(e.target.files[0])} />
            </div>
        </div>

        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Property Image 
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type='file' onChange={(e) => setImage3(e.target.files[0])} />
            </div>
        </div>
                    

        
        <div className="md:flex md:items-center">
            <div className="md:w-1/3" />
            <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                Submit
            </button>
            </div>
        </div>
        </form>
        </div>


  )
}

export default NewProperty