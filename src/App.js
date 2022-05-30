import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Menubar from './components/Menubar';
import RestaurantList from './components/RestaurantList';
import RestaurantPage from './components/RestaurantPage';
import Login from './components/Login';
import AddRestaurant from './components/AddRestaurant';
import './App.css';

const { Header, Content } = Layout;

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout className='layout'>
          <Header>
            <Menubar />
          </Header>
          <Content>
            <Routes>
              <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />
              <Route path='/random' element={<h1>Random</h1>} />
              <Route path='/add' element={
                !user 
                  ? <Login />
                  : <AddRestaurant />
              } />
              <Route path='/' element={<RestaurantList />} />
            </Routes>
          </Content>
        </Layout>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
















// import { useState, createContext } from 'react'; 
// import RestaurantList from './components/RestaurantList';
// import { Layout, Menu } from 'antd';
// import './App.css';
// import Menubar from './components/Menubar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import RestaurantPage from './components/RestaurantPage';
// import Login from './components/Login';

// const { Header, Content } = Layout;

// export const UserContext = createContext(null)

// function App() {
//   const [user, setUser] = useState();
//   return (
//     <BrowserRouter>
//       <UserContext.Provider value={{user, setUser }}> 
//       <Layout className='layout'>
//         <Header>
//           <Menubar user={user}/>
//         </Header>
//         <Content>
//           <Routes>
//             <Route path='/restaurants/:restaurantId' element={<RestaurantPage />} />          
//             <Route path='/random' element={<h1>Random</h1>} />          
//             <Route path='/add' element={!user ? <Login /> : <h1>Add Restaurant</h1>} />                           
//             <Route path='/' element={<RestaurantList/>} />
//           </Routes>
//         </Content>
//       </Layout>
//       </UserContext.Provider>
//     </BrowserRouter>
//   );
// }

// export default App;

