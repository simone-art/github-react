import React from 'react'
import './Card.css'
import imagem from '../../img/nicky.jpg'

const Card = (avatar_url, login, name) => {
    return (
    <div className="container">
        <h1>Usuarios Github</h1>
        img={avatar_url}
        user={login}
        name={name}
        {/* <img src={imagem} className="img-card" alt="foto-perfil-do-usuario"></img>
        <p className="nome">Nome:</p>
        <p className="login">Login:</p> */}
    </div>
    )
}

export default Card;