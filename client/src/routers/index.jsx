import Home from '../pages/Home/index'
import Crud from '../pages/Crud/index'

import { BrowserRouter , Routes, Route} from 'react-router-dom'
export default function index() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/crud' element={<Crud />} />
			</Routes>
		</BrowserRouter>
	)
}
