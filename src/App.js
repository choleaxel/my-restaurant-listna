

import RestaurantList from './components/RestaurantList';
import { Layout, Menu } from 'antd';
import './App.css';
import Menubar from './components/Menubar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantPage from './components/RestaurantPage';
import Login from './components/Login';

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className='layout'>
        <Header>
          <Menubar />
        </Header>
        <Content>
          <Routes>
            <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />          
            <Route path='/random' element={<h1>Random</h1>} />          
            <Route path='/add' element={<h1>Add Restaurant</h1>} />                   
            <Route path='/login' element={<Login/>} />          
            <Route path='/' element={<RestaurantList/>} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

