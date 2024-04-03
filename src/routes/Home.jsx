import React, { useState } from 'react'
import {Container, Nav, Navbar, Row, Button} from 'react-bootstrap';
import Product from '../components/Product';
import Title from '../components/Title';
import data2 from '../data2';
import Nike from '../components/Nike';
import axios from 'axios';

const Home = (props) => {
    const {shoes, setShoes, no, setNo} = props
    const [nike, setNike] = useState(data2);
    const [count, setCount] = useState(1);
    

    const title = [{tit_h3: 'MD\s Pick', tit_p: '시선을 사로잡는 스타일링, 제품들을 만나보세요.'},{tit_h3: '여름을 위한 컬렉션', tit_p: '가볍게, 시원하게 썸머 컬렉션으로 여름을 준비해 보세요.'}]

    
  return (
    <>
     
      <div className="slider"></div>

     <Title title= {title} i={0}/>

      <Button variant="outline-primary" onClick={()=>{
        let copy = [...shoes].sort((a,b)=>
          (a.title > b.title) ? 1 : -1
        )
        setShoes(copy) 

        let no_copy = []
        for(let i in copy){
            no_copy.push(copy[i].id)
        }
       setNo(no_copy)

      }}>이름순으로 정렬</Button>{' '}
      <Button variant="outline-secondary" onClick={()=>{
        let copy = [...shoes].sort((a,b)=>
        (a.price > b.price) ? 1 : -1
        )
        setShoes(copy)

        let no_copy = []
        for(let i in copy){
            no_copy.push(copy[i].id)
        }
       setNo(no_copy)

      }}>낮은가격순 정렬</Button>{' '}
      <Button variant="outline-success" onClick={()=>{
        let copy = [...shoes].sort((a,b)=>
        (b.price > a.price) ? 1 : -1
        )
        setShoes(copy)

        let no_copy = []
        for(let i in copy){
            no_copy.push(copy[i].id)
        }
       setNo(no_copy)

      }}>높은가격순 정렬</Button>
      
      <Container>
      <Row>
        {
          shoes.map((shoe, i)=>
              <Product shoes = {shoe} key={i} i={i} no={no}
            />
            )
          }
      </Row>
    </Container>


    <Title title={title} i={1} />

    <Button variant="outline-info" onClick={()=>{
      if (count === 1) {
        axios.get('https://jiwoo1107.github.io/react_data/nike2.json')
        .then((result) =>{
          let copy = [...nike, ...result.data]
          setNike(copy)
          setCount(2)
        })
      }else if(count === 2){
        axios.get('https://jiwoo1107.github.io/react_data/nike3.json')
        .then(( result) => {
          let copy = [...nike, ...result.data]
          setNike(copy)
          setCount(3)
        })
      }else {
        alert('더이상 상품이 없습니다.')
      }
    }}>+3개 상품 더보기</Button>
    <Container style={{marginTop : '30px'}}>
      <Row>
          {
            nike.map((value, i)=>{
              return(
                <Nike nike={value} />
              )
            })
          }
      </Row>
  </Container>


    </>
  )
}

export default Home