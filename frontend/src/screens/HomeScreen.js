import React,{useState,useEffect} from 'react'
import {Coursel,Product} from '../components'
import {Row,Col, Carousel } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
const [products,setProducts] = useState([])


useEffect(() =>{
    const fetchProducts  = async() =>{
        const {data} = await axios.get('/api/products')

        setProducts(data) 
    }
 fetchProducts()
}, [])


    return (
        <>
         <h1> Latest Trends</h1>
       
<Coursel/>
   
         <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
    )
}

export default HomeScreen
