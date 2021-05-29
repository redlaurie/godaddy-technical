import React, { useRef} from 'react'
import {Link} from 'react-router-dom';



export default function Details(repo){
    console.log(repo)
    const repository = repo.location.state.Repository

    return (
            <div className="centered-body">     
                <div className="details-content" href='#'>
                    <div className="header-content text-md-center">
                        <h1>{repository.name}</h1>
                        <p>{repository.description}</p>
                        <p>{repository.git_url}</p>
                        <p>{repository.language}</p>

                        <h2>Watchers:{repository.watchers}    Open Issues: {repository.open_issues}    Forks: {repository.forks}</h2>
                   </div>
                </div>
            </div>
    )
        
}