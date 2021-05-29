import React from 'react'

export default function Details(repo){

    const Fetchedrepository = repo.location //this sets the repository to an easier form to access otherwise there would be alot of dots to get to each key
    var repository = []
    try{
        repository = Fetchedrepository.state.Repository
    }catch (e) {
        repository = Fetchedrepository
    }
    
    return (
            <div className="centered-body">     
                <div className="details-content">
                    <div className="header-content text-md-center">
                        <h1>{repository.name}</h1>
                        <p>{repository.description}</p>
                        <p><a href={repository.svn_url}>{repository.svn_url}</a></p>
                        <p>Languages: {repository.language}</p>
                        <h2>Watchers:{repository.watchers},    Open Issues: {repository.open_issues},    Forks: {repository.forks}</h2>
                   </div>
                </div>
            </div>
    )
        
}