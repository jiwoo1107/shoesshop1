import React from 'react'
import {Col} from "react-bootstrap";

const Nike = (props) => {
    const {nike} = props;

  return (
    <Col md={4}>
      <img src={process.env.PUBLIC_URL + nike.imgUrl} width='80%' alt="shoes" />
      <h4>{nike.title}</h4>
      <p>{nike.content}</p>
      <p>{nike.price}</p>
    </Col>   
  )
}

export default Nike