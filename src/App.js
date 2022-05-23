

import RestaurantList from './components/RestaurantList';
import { Layout, Menu } from 'antd';
import { PlusCircleOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';
import './App.css';
import Menubar from './components/Menubar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
            <Route path='/random' element={<h1>Random</h1>} />          
            <Route path='/add' element={<h1>Add Restaurant</h1>} />                   
            <Route path='/login' element={<h1>Login</h1>} />          
            <Route path='/' element={<RestaurantList/>} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

