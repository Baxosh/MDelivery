import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { USERUIS } from '../utils/urls'
import axios from 'axios'

export default function Register({ setAuth }) {
	const [username, setUsername] = useState('')
	const [telephone, setTelephone] = useState('')
	const navigate = useNavigate()

	const register = (event) => {
		event.preventDefault()

		if (username && telephone) {
			axios
				.post(USERUIS, {
					data: {
						username,
						phoneNumber: telephone,
					},
				})
				.then((res) => {
					setAuth('')
					localStorage.setItem('user', JSON.stringify(res.data.data))
					navigate('/')
				})
				.catch((err) => console.log(err))
		} else {
			throw Error('Passwords do not match!')
		}
	}

	const checkPhone = (e) => {
		let value = e.target.value
		let len = value.length
		let lastElement = value.slice(-1)
		const spaces = [3, 6, 10, 13]

		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			setTelephone(e.target.value)
			return
		}

		if (isNaN(lastElement) && lastElement !== ' ') {
			e.target.value = e.target.value.replace(lastElement, '')
			e.target.classList.add('is-danger')
			return
		}

		for (let i of spaces) {
			if (len === i) {
				e.target.value = e.target.value.slice(0, i) + '-'
			}
		}

		for (let i of spaces) {
			if (len === i + 1 && value[i + 1] !== '-') {
				e.target.value =
					e.target.value.slice(0, i) + '-' + value.slice(i - 1)
			}
		}

		e.target.classList.remove('is-danger')
		setTelephone(e.target.value)
	}

	return (
		<div className="register box">
			<h1 className="title is-3 has-text-centered">Регистрация</h1>
			<div className="div_tag">
				<p className="subtitle m-0">
					Уже зарегистрированы в Express24?
				</p>
				<p
					className="subtitle is-clickable has-text-link last_p"
					onClick={() => setAuth('login')}
				>
					Авторизация
				</p>
			</div>
			<br />
			<form onSubmit={(e) => register(e)} className="span_tag">
				<input
					type="text"
					placeholder="Ваше имя"
					className="first_input input"
					onInput={(event) => setUsername(event.target.value)}
					value={username}
				/>
				<br />
				<input
					type="text"
					placeholder="998-99-999-99-99"
					className="second_input input"
					maxLength="16"
					onInput={(event) => checkPhone(event)}
					value={telephone}
				/>
				<span className="second_spanTag">
					<input type="checkbox" className="check" />
					<p className="subtitle is-6 p-3 mr-6">
						Принимаю пользовательское соглашение
					</p>
				</span>
				<button
					disabled={telephone.length < 16 && true}
					type="submit"
					className={`button is-light ${
						telephone.length === 16 && 'is-success'
					}`}
				>
					Зарегистрироваться
				</button>
			</form>
			<p className="subtitle is-6 mt-4 has-text-centered">
				Регистрируясь, вы принимаете условия
			</p>
			<p className="last_p has-text-centered">
				пользовательского соглашения
			</p>
		</div>
	)
}
