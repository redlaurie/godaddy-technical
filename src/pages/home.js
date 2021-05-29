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
                return Promise.reject(error);
            }

            this.setState({ GitHubRepositories: data })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }
    render() {
        const { GitHubRepositories } = this.state;
        console.log({ GitHubRepositories } )
        return (
            <div className="home">
                <h1>Repositories</h1>
                <RepoMasonry Repos={GitHubRepositories} columns={3} />
            </div>
        );
    }
}

