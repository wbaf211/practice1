import React, { useEffect } from 'react';
import './App.css';
import AddContent from './AddContent';
import Home from './Home.js';
import Modify from './Modify';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import SignUp from './SignUp';
import Customer from './Customer';


function App() {

  const initialData = {
        pname: '',
        pid: '',
        cpname: '',
    };

    const navigate = useNavigate();

  const [data, setData] = useState(initialData);

  let [input, setInput] = useState(initialData);

  const [filter, setFilter] = useState('');

  const [brand, setBrand] = useState('');

  const [cusBrand, setCusBrand] = useState('');

  const [user, setUser] = useState({
    uname: '',
    uid: '',
    pw: ''
  });

  const [customer, setCustomer] = useState({
    index: '',
    cid: '',
    cname: '',
    phone: '',
  })

  const logOut = () => {
    setUser("");
    navigate("/");
}

  const handleChange = (e) => {
  
  const {name, value} = e.target;
        setData((prev) => {
            return {...prev, [name]: value}
        });
    };

    const handleInput = (e) => {
      const value = e.target.value
      setFilter(prev => {
        return {
          ...prev,
          value
        }
      })
    }

  const getInput = (e) => {
    const {name, value} = e.target;
    setInput(pre => {
      return {...pre,[name] : value}
    })
  }

  const getUser = (e) => {
    const {name, value} = e.target;
    setUser(prev => {
      return {...prev,[name] : value}
    });
  }

  useEffect(() => {

  }, [user]);

  const getCustomer = (e) => {
    const {name, value} = e.target
    setCustomer(prev => {
      return {...prev, [name] : value}
    })
  }

  return (
    <div>
    <Routes>
      <Route exact path='/' element={<Login user={user} getUser={getUser}/>} />  
      <Route path='/customer' element={<Customer customer={customer} setCustomer={setCustomer} getCustomer={getCustomer} logOut={logOut}/>} />  
      <Route path='/signup' element={<SignUp user={user} setUser={setUser} getUser={getUser}/>} />  
      <Route path="/homepage" element={<Home logOut={logOut} brand={brand} setBrand={setBrand} filter={filter} handleInput={handleInput}/>} />
      <Route path="/add/modify" element={<Modify input={input} cusBrand={cusBrand} setCusBrand={setCusBrand} getInput={getInput}/>} />
      <Route path="/homepage/add" element={<AddContent data={data} handleChange={handleChange} cusBrand={cusBrand} setCusBrand={setCusBrand} setData={setData} setInput={setInput}/>} />
    </Routes>
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'input-error'} />
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'word-error'} />
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'number-error'} />
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'input-success'} />
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'save-success'} />
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'login-success'} />
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'login-failed'} />
    <ToastContainer enableMultiContainer position='bottom-right' pauseOnHover={false} autoClose={2000} containerId={'signup-success'} />
    </div>
  );
}

export default App;
