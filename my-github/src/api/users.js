import config from './config'

function getUser(nomeUsuario) {
    // return config.get ('/users/${nomeDoUsuario}');
    const url = `/users/${nomeUsuario}`;
    return config.get(url);

}

function getRepos(nomeUsuario){
    // return config.get('/users/${nomeDoUsuario}'/repos)
    const url = `/users/${nomeUsuario}/repos`;
    return config.get(url);
}

export {getUser, getRepos};