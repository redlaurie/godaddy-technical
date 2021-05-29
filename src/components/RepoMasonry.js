import React from 'react'
import {MasonryRepo} from './'

export default function RepoMasonry({Repos,columns}){
    try {
        console.log(Repos)
    } catch(e){
        console.log('Not Found')   
    }
    return(
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>

                { Repos.map((Repo, index) =>
                    <MasonryRepo {...{Repo, index}}/>
                )}

        </section>
    )
}