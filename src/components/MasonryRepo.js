import React from 'react';
import {Link} from 'react-router-dom';

export default function MasonryRepo({Repo}){
    
    // here we are constucting the card and also giving information to the Link element. This state will be passed into details page to render the information.
    return (
            <div className="masonry-repo"><Link to={{ pathname: '/details',  state:{Repository: Repo} }}>
                <div className="Repo-text" style={{justifyContent: 'flex-end'}}>
                    <div className="row" style={{height: "30%", backgroundColor: "purple"}}>
                        <div className="col text-md-center" >
                            <h1 className="Repo-title">{Repo.name}</h1>
                       
                        </div>
                    </div>
                </div></Link> 
                
            </div>
    )
        
}