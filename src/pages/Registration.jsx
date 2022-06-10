import React from 'react'

export default function Registration() {
    return (
        <div className='box container'>
            <form className='is-flex is-flex-direction-column is-align-items-center'>
                <label className='is-size-2 has-text-black'>Регистрация</label>
                <br />
                <label>Уже зарегистрированы в Express24?</label>
                <label className='demo is-size-5'>Авторизация</label>
                <div className='allInputes'>
                    <input type="text" placeholder='Ваше имя' className='firstInput' />
                    <input type="text" placeholder='номер телефона' className='firstInput' />
                </div>
            </form>
        </div>
    )
}