import React from 'react'


export default function Footer() {
	return (
		<footer>
			<div className='container is-flex is-justify-content-space-between is-align-items-center'>
				<div className='content is-flex is-justify-content-space-around is-align-items-center'>
					<div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
						<p>	Ⓒ 2022 Express 24</p>
						<span className='is-flex is-justify-content-space-around icons is-align-items-center'>
							<ion-icon name="logo-facebook"></ion-icon>
							<ion-icon name="logo-instagram"></ion-icon>
							<ion-icon name="paper-plane"></ion-icon>
						</span>
					</div>
					<div>
						<div className='about-me is-flex is-justify-content-space-around has-text-white is-size-7'>
							<p className='mt-4'>Biz haqimizda</p>
							<p className='mt-4'>Foydalanish shartlari</p>
							<p className='mt-4'>Aloqa</p>
						</div>
						<div className='footer-content is-flex is-justify-content-space-around is-size-7'>
							<p>Savollar va javoblar</p>
							<p>Hamkorlik uchun ariza</p>
						</div>
					</div>
				</div>
				<div>
					<select className='choose'>
						<option>Русский</option>
						<option>English</option>
						<option>O'zbekcha</option>
					</select>
				</div>
			</div>
		</footer>
	)
}

