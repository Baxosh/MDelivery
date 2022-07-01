import React from 'react'
import Register from './Register'
import Login from './Login'

export default function RegisterModal({ auth, setAuth }) {
	return (
		<div className="main-modal is-flex is-justify-content-center is-align-items-center">
			{auth === 'register' ? (
				<Register setAuth={setAuth} />
			) : auth === 'login' ? (
				<Login setAuth={setAuth} />
			) : null}
			<div
				className="button is-rounded is-danger exit-modal"
				onClick={() => setAuth('')}
			>
				X
			</div>
		</div>
	)
}
