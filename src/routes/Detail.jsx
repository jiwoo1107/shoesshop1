import React, {useContext, useEffect, useState } from 'react'
import {Col, Container, Row, Button, Nav, Alert} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import TabContent from '../components/TabContent'
import styled from 'styled-components';
import {Context1} from '../App';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';


const Box = styled.div`
  padding: 20px;
  color: gray;
`
const YellowBtn = styled.button`
  color: white;
  font-size: 30px
  width: 100%;
  padding: 100px;
  border : 1px solid #ccc;
  background-image: url("https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
  background-size: cover;
  background-position: center;
`

const Detail = (props) => {

    const {shoes} = props;
    let{id} = useParams();
    const [tab, setTab] = useState(0);
    let selproduct = shoes.find(x => x.id == id)
    const [alert, setAlert] = useState(true) 
    const [show, setShow] = useState('')
    
    const dispatch = useDispatch();

    useEffect(()=>{
      setTimeout(()=>{ setAlert(false) }, 2000)
      setTimeout(()=>{ setShow('end')}, 50)
      return ()=>{
        setShow('')
      }
    }, [])

  return (
    <Container className={`start ${show}`}>

      {
        alert === true ? <Alert variant={'warning'}>
          2초 이내 구매시 할인
        </Alert>:null
      }
      
     
      <Box>
        <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
      </Box>

        <Row>
            <Col md={6}>
            <img src={selproduct.imgUrl} width="100%" alt="shoes" />
            </Col>
            <Col md={6}>
                <h4 className='pt-5'>{selproduct.title}</h4>
                <p>{shoes[id].content}</p>
               <p>{shoes[id].price}상품가격</p>
               <Button variant="success" onClick={()=>{
                dispatch(addItem({id: selproduct.id, imgUrl: selproduct.imgUrl, item: selproduct.title, price: selproduct.price, amount: 1}))
               }}>장바구니</Button>
            </Col>
        </Row>

        <Nav variant="tabs" defaultActiveKey="link-0">
      <Nav.Item>
        <Nav.Link eventKey="link-0" onClick={()=>{
          setTab(0)
        }}>탭0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" onClick={()=>{
          setTab(1)
        }}>탭1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" onClick={()=>{
          setTab(2)
        }}>
          탭2</Nav.Link>
      </Nav.Item>
    </Nav>

    {
      // (()=>{
      //   if(tab === 0 ){
      //     return <div>내용0</div>
      //   }else if(tab === 1){
      //     return <div> 내용1</div>
      //   }else if(tab ===2) {
      //     return <div>내용2</div>
      //   }
      // })()
    
    }

    <TabContent tab= {tab} />

    </Container>


  )
}

export default Detail