import React from 'react';
import './Pesquisar.css';

const Pesquisar = (props) => {
    //  const { price, title, img } = props.prod;
    console.log(props)
  return (
        <div className="card">

        <img src={props.img} className="card-img">
        </img>
        <p>{props.user}</p>
        <p>{props.name}</p>
    </div>
);
}
export default Pesquisar;