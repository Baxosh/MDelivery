import React, { useState, useEffect, useContext } from 'react'
import logo from '../static/images/logo.png'
import { IoSearchOutline } from 'react-icons/io5'
import { AiOutlineCompass } from 'react-icons/ai'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import RegisterModal from './RegisterModal'
import axios from 'axios'
import { PRODUCTS } from '../utils/urls'

export default function Navbar() {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || {}
	)
	const [auth, setAuth] = useState('')
	const [value, setValue] = useState('')
	const [hover, setHover] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		axios.get(PRODUCTS + `&filters[Name][$containsi]=${value}`)
	}, [value])

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')) || {})
	}, [auth])

	const logOut = () => {
		localStorage.removeItem('user')
		navigate('/')
		setUser({})
	}

	useEffect(() => {
		let params = { value }
		setSearchParams(params)
		
		// if (location.search) {
		// 	navigate(`/?value=2`)
		// 	console.log(value);
		// }
	}, [value])

	const searchProducts = (e) => {
		setValue(e.target.value)
	}
	return (
		<div>
			<nav className="is-flex is-align-items-center is-justify-content-space-around">
				{auth ? <RegisterModal auth={auth} setAuth={setAuth} /> : null}

				<img
					src={logo}
					alt="MDelivery"
					className="is-clickable"
					width="200"
					onClick={() => navigate('/')}
				/>

				<div className="is-flex column is-4 is-align-items-center">
					<input
						type="text"
						className="input_tag input"
						placeholder="Поиск"
						onInput={(e) => searchProducts(e)}
						value={value}
					/>
					<span className="is-clickable">
						<IoSearchOutline className="is-size-5 icon_search" />
					</span>
				</div>

				<span className="icon-text is-flex is-justify-content-space-between is-align-items-center is-clickable">
					<AiOutlineCompass className="has-text-success is-size-2" />
					<p
						className="has-text-black mr-2"
						onClick={() => navigate('/address')}
					>
						Адрес не указан
					</p>
				</span>
				<div className="p-0 is-clickable has-text-success">
					<ion-icon
						name="cart-outline"
						size="large"
						onClick={() => navigate('/cart')}
					></ion-icon>
				</div>
				{user.id ? (
					<div className="columns is-align-items-center is-justify-content-space-around column is-2">
						<div className="is-flex is-flex-direction-column is-align-items-center has-text-success">
							<ion-icon
								size="large"
								name="person-circle-outline"
							></ion-icon>
							<p className="subtitle">
								{user.id && user.attributes.username}
							</p>
						</div>
						<button
							onMouseEnter={() => setHover('is-danger')}
							onMouseLeave={() => setHover('is-dark')}
							className={`button ${hover} is-outlined ml-5 py-5 px-3`}
							onClick={() => logOut()}
						>
							<ion-icon name="exit-outline" />
						</button>
					</div>
				) : (
					<div className="columns-nav">
						<span
							className="has-text-black is-clickable"
							onClick={() => setAuth('login')}
						>
							Вход |&nbsp;
						</span>
						<span
							className="has-text-black is-clickable"
							onClick={() => setAuth('register')}
						>
							Регистрация
						</span>
					</div>
				)}
			</nav>
			<hr className="mt-0" />
		</div>
	)
}
