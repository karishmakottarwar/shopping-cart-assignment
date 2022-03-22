import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/homepage.component'
import Footer from './components/Footer/footer.component'
import Header from './components/Header/header.component'
import Login from './components/Login/login.component'
import Register from './components/Register/register.component'
import Products from './components/Products/products.component'
import AddToCart from './components/AddToCart/addtocart.component'

function App() {
  const [users,setUsers] = useState([])
  const [isLoggedInUser,setLoggedInUser] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [open, setCartOpen] = useState(false)
  const handleSetItems = (item) => {
    const itemLists = [...cartItems]
    const index = itemLists.findIndex(x=>x.id===item.id)
    if(index>=0){
      itemLists[index] = { ...itemLists[index], qty: itemLists[index].qty + 1 }
    }else itemLists.push(item)
    setCartItems(itemLists)
    setCartOpen(true)
  }
  const handleRemoveItem = (id) => {
    let itemLists = cartItems.filter(item=>item.id!==id)
    setCartItems(itemLists)
  }
  const handleQty = (qty, type, index) => {
    if (qty <= 0) return;
    const itemLists = [...cartItems]
    if (type === 'add') {
      itemLists[index] = { ...itemLists[index], qty: qty + 1 }
    } else if (type === 'subtract' && qty !== 1){
      itemLists[index] = { ...itemLists[index], qty: qty - 1 }
    }
    setCartItems(itemLists);
  }
  return (
    <div className="App">
      <Router>
        <Header totalItems={cartItems.length} setCartOpen={setCartOpen} isLoggedInUser={isLoggedInUser} setLoggedInUser={setLoggedInUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" children={<Login users={users} setLoggedInUser={setLoggedInUser} />} />
          <Route path="/signup" children={<Register users={users} setUsers={setUsers}/>} />
          <Route path="/products/:productId" children={<Products handleSetItems={handleSetItems}  />} />
        </Switch>
        {open ? <AddToCart cartItems={cartItems} open={open} setCartOpen={setCartOpen} handleRemoveItem={handleRemoveItem} handleQty={handleQty} isLoggedInUser={isLoggedInUser} /> : null}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
