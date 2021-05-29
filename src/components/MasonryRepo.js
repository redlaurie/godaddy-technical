import React from 'react';
import {Link} from 'react-router-dom';

export default function MasonryRepo({Repo}){
    console.log(Repo)
    return (
            <div className="masonry-repo">
                <div className="Repo-text" style={{justifyContent: 'flex-end'}}><Link to={{ pathname: '/details',  state:{Repository: Repo} }}>
                    <div className="col" >
                        <h1 className="Repo-title">{Repo.name}</h1>
                       
                    </div>
                    </Link> 
                </div>
            </div>
    )
        
}