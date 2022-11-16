import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from './components/sidebar/Sidebar.jsx'
import Dashboard from './components/dashboard/Dashboard'
import Order from './components/order/Order.jsx'
import Product from './components/product/Product'
import Testseries from './components/testseries/Testseries'
import Cources from './components/cources/Cources'
import Notification from './components/notification/Notification'
import CreateCource from './components/cources/createCource/CreateCource'
import CreateTest from './components/testseries/createtestSeries/CreateTest'
import CreateNoti from './components/notification/createNoti/CreateNoti'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
        <Sidebar/>
            <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/testseries" element={<Testseries />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cources" element={<Cources />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/cources/CreateCource" element={<CreateCource />} />
            <Route path="/testseries/CreateTest" element={<CreateTest />} />
            <Route path="/testseries/CreateNoti" element={<CreateNoti />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
