

import RestaurantList from './components/RestaurantList';
import { Layout, Menu } from 'antd';
import { PlusCircleOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons';
import './App.css';
import Menubar from './components/Menubar';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header>
       <Menubar />
      </Header>
      <Content>
      <RestaurantList/>
  </Content>
  </Layout>
  );
}

export default App;
