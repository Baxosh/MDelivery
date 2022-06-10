import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'


export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Registration />} exact />
			</Routes>
		</BrowserRouter>
	)
}
