import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { USERUIS } from '../utils/urls'

export default function Login({ setAuth }) {
	const [telephone, setTelephone] = useState('')
	const navigate = useNavigate()

	const signIn = (event) => {
		event.preventDefault()

		axios
			.get(USERUIS + `?filters[phoneNumber][$eq]=${telephone}`)
			.then((res) => {
				login(res.data.data)
			})
			.catch((err) => {
				if (err.responce.status === 400) {
					alert('Parol xato!')
					return
				}
				if (err.code) {
					alert('Karoche diga chiz')
				}
			})
	}

	const login = (data) => {
		if (data[0]) {
			localStorage.setItem('user', JSON.stringify(data[0]))
			setAuth('')
			navigate('/')
			return
		}

		alert('Номер набран неправильно или Вы еще не зарегистрированы !!!')
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
			e.target.classList.add('has-text-danger')
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

		e.target.classList.remove('has-text-danger')
		setTelephone(e.target.value)
	}

	return (
		<form
			className="login box m-auto is-flex"
			onSubmit={(event) => signIn(event)}
		>
			<h1 className="title is-3 has-text-centered">Вход</h1>
			<div className="div_tag">
				<p className="subtitle m-0">
					Уже зарегистрированы в Express24?
				</p>
				<p
					className="subtitle is-clickable has-text-link last_p"
					onClick={() => setAuth('register')}
				>
					Регистрация
				</p>
			</div>
			<input
				type="text"
				className="first_input mt-5"
				maxLength="16"
				placeholder="998-99-999-99-99"
				onInput={(event) => checkPhone(event)}
				value={telephone}
			/>
			<button
				disabled={telephone.length < 16 && true}
				type="submit"
				className={`button column is-12 p-0 is-align-self-center mt-3 ${
					telephone.length === 16 && 'is-success'
				}`}
			>
				Вход
			</button>
		</form>
	)
}
