import React from 'react'
import {MasonryRepo} from './'

export default function RepoMasonry({Repositories,columns}){
    try {
        console.log(Repositories)
    } catch(e){
        console.log('Not Found')   
    }
    return(
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>

                { Repositories.map((Repo, index) =>
                    <MasonryRepo {...{Repo, index}}/> //here we construct our individual segments for each repository mapped
                )}

        </section>
    )
}