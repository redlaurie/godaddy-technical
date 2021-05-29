import React from 'react';
import {RepoMasonry} from '../components'

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {GitHubRepositories: []};
    }

    async componentDidMount() {
        // Simple GET request using fetch
        await fetch('https://api.github.com/orgs/godaddy/repos')
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error); //returns error if response is faulty or null
            }

            this.setState({ GitHubRepositories: data }) //this sets the state and re-renders the page to include the new data
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        }); 
    }


    render() {
        const { GitHubRepositories } = this.state; 
        
        //here we are calling the RepoMasonry component which will construct our grid
        return (
            <div className="home">
                <div className="header-content text-md-center">
                    <h1>Repositories</h1>
                </div>
                <RepoMasonry Repositories={GitHubRepositories} columns={3} /> 
            </div>
        );
    }
}

