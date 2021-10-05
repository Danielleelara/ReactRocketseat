import { useState, useEffect } from 'react';
import '../styles/repositories.scss'
import { RepositoryItem } from "./RepositoryItem";
export function RepositoryList(){
    const [repositories, serRepositories] = useState(([]));

    useEffect(() => {
      fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepository(data))
    },[]);

       
    return(
      <section className="repository-list">
       <h1>Lista de repositórios</h1>

       <ul>
         {repositories.map(repository => {
           return <RepositoryItem repository={repository} />
         })} 
       </ul>
        
      </section>
     
    );
}