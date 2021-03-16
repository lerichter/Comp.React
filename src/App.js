import React, { useState } from 'react';
import axios from  'axios';
import logo from './LogoCompasso-positivo.png';
import './App.css';

import Profile from './Profile.js'
import Repo from './Repo.js'


function App() {
  const config = {
    github: {
      url: "https://api.github.com/users",
      cliente_id: "a78fc78be480f3b6c2d6",
      cliente_secret: "0a8d95cb7226c95fbc4acacf992a612e1bc1b983",
      count: 7, 
      sort: "created: asc",
    }
  };
  
  //variáveis definidas
  const [ fieldValue, setFieldValue ] = useState("");
  const [ user, setUser ] = useState(null);
  const [ repos, setRepos ] = useState([]);
  const [ title, setTitle ] = useState("");

  const getUser = () => {
    const { url, cliente_id, cliente_secret } = config.github;
      try{
      axios.get(
        `${url}/${fieldValue}?client_id=${cliente_id}&cliente_secret=${cliente_secret}`
        ).then(({ data }) => setUser(data));
    } catch(error){
      console.log(error)
    }
  }

  const getRepos = () => {
    const { url, cliente_id, cliente_secret, count, sort } = config.github;
      setTitle("Repos")
      try{
        axios.get(
          `${url}/${fieldValue}/repos?per_page=${count}&sort=${sort}&client_id=${cliente_id}&client_secret=${cliente_secret}`
        ).then(({ data }) => setRepos(data));
      } catch(error){
        console.log(error)
      }
  }

  const getStarreds = () => {
    const { url, cliente_id, cliente_secret, count, sort } = config.github;
      setTitle("Starreds") //variavel title 
      try{
        axios.get(
          `${url}/${fieldValue}/starred?per_page=${count}&sort=${sort}&client_id=${cliente_id}&client_secret=${cliente_secret}`
        ).then(({ data }) => setRepos(data));
      } catch(error){
        console.log(error)
      }
  }

  const handleChangeField = (e) => {
    setFieldValue (e.target.value) 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="container">
        <div className="card card-body">
          <p className="lead"> Type a name to find users and repositories </p>
          <input onChange={ handleChangeField } id="search" type="text" className="form-control" required />
          <button onClick={ getUser } className="btn btn-warning btn-block mt-3">Search</button>
        </div>
      </div>     

      {user && (
        <div className="row">
          <div className="col-md-4 mt-4 px-5">
            <Profile user={user} />
          </div>
          <div className="col-md-5"> 
            {repos.length > 0 && (<><p class="btn btn-danger btn-block mt-4">{ title }</p>  {repos.map(repo => <Repo key={repo.name} repo={repo}/>)}</>)}
          </div> 
          <div class="card-body col-md-2 mt-1">
            <button onClick={ getStarreds } class="btn btn-warning btn-block">Starreds</button>
            <button onClick={ getRepos } class="btn btn-warning btn-block">Repos</button>
          </div>
        </div>
      )} 
    </div> //se o user for verdadeiro ou diferente de null roda a div
  ); //repos.lenght ---- se o tamanho for maior que zero renderiza oq ta entre parenteses 
}

export default App;
