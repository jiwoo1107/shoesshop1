import React from "react";
import {Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
    const {shoes,i, no} = props;
    const navigate = useNavigate();

    return (
        <Col md={4} onClick={()=>{
            navigate('/detail/'+ no[i])
        }}>

          <img src={process.env.PUBLIC_URL + shoes.imgUrl} width='80%' alt="shoes" />
          <h4>{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          </Col>    
    )
}
export default Product