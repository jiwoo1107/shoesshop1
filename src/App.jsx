import logo from './logo.svg';

import './App.css';
import data from './data';
import { createContext, useState } from 'react'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './routes/Home';
import {Container, Nav, Navbar,} from 'react-bootstrap';
import Detail from './routes/Detail';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import Cart from './routes/Cart';


export const Context1 = createContext();

function App() {
  const user = useSelector( state => state.user );

  const [shoes, setShoes] = useState(data);
  const [no,setNo] = useState([0,1,2,3,4,5,6,7,8]);
  const [remain, setRemain] = useState([10,11,12])


  const navigate = useNavigate();
  const fcss = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    marginTop: '80px',
    marginBottom: 0
  }

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{
              navigate('/')
            }}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/detail/0')
            }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/cart')
            }}>cart</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      {/* <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link> */}

      <Routes>
        <Route path='/' element={<Home shoes={shoes} setShoes={setShoes} no={no} setNo={setNo} />}/>
        <Route path="/detail/:id" element={
        <Context1.Provider value={{remain}}>
          <Detail shoes={shoes} />
        </Context1.Provider>
        }/>
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/about' element={
        <div>
          <h2>회사소개 페이지</h2>
          <Outlet />
        </div>}/>
          <Route path='member' element={<div>사원정보</div>}/>
                  <Route path='location' element={<div>찾아오는 길</div>}>
        </Route>
        

        <Route path='*' element={<div>404 페이지<br/>페이지를 찾을 수 없습니다.</div>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
