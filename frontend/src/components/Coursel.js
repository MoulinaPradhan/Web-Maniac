import React ,{useEffect,useState}from 'react'
import {CarouselItem,Carousel,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios"


const Coursel = ({product}) => {
    const [products,setProducts] = useState([])


useEffect(() =>{
    const fetchProducts  = async() =>{
        const {data} = await axios.get('/api/products')

        setProducts(data) 
    }
 fetchProducts()
}, [])
    return (
     
   <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} className="images"/>
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (₹{product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    )
}

export default Coursel
