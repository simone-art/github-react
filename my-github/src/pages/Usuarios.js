import React, { Fragment, Component } from 'react';
import Card from '../componentes/Card/Card';
import Input from '../componentes/Input/Input';
import Button from '../componentes/Button/Button';
import listaProdutos from '../mock/produtos';
import Pesquisar from '../componentes/Cards/Pesquisar';
import { getUser, getRepos } from '../api/users';

class Usuarios extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            user: {},
            repos: []
        }
    }

    valorInput = (param) => {
       // let valor = param.target.value;
        this.setState({ 
            value: param.target.value
        })
       // console.log(this.state.value)
    }

    pesquisar = () => {
        getUser(this.state.value).then(abobrinha => {
            this.setState({
                user: abobrinha.data
            })})
            console.log(this.state.user, 'pesquisar')
        }

        render() {
            const { login, name, avatar_url } = this.state.user;
            return (
                <Fragment>
                    <Input
                        placeholder="Pesquise seu produto"
                        tipo="text"
                        pegarValorInput={this.valorInput}
                    ></Input>
                    <Button
                        click={this.pesquisar}
                    >Pesquisar</Button>
                    <div className="lista_item">
                        <Pesquisar
                            img={avatar_url}
                            user={login}
                            name={name}
                            clicar={() => this.pesquisarRepos(login)}
                        />
                       
                    </div>
                </Fragment>
            )
        }
    };
    export default Usuarios;

    