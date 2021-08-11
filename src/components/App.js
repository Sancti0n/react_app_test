import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import Users from '../datas/users.json'
import Books from './Books'

function App() {
	
	return (
		
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
				{Users.map (user => <h1 key={user.id}> {user.name} </h1>)}
				<Books />
			</div>
			<Footer />
		</div>
	)
}

export default App