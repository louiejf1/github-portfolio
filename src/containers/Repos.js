import React, { Component } from "react";

class repos extends Component {
  constructor() {
    // API call to GitHub Start
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const repos = await fetch("https://api.github.com/users/louiejf1/repos");
    const reposJSON = await repos.json();

    if (reposJSON) {
      this.setState({
        data: reposJSON,
        loading: false,
      });
    }
  } // API call to GitHub End

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div> Loading...</div>;
    }
    return (
      <div className="repos_container">
        <hr />
        <h2>PROJECTS</h2>

        {data.map((repo) => (
          <div class="card">
            <strong>Repo name:</strong>
            {" " + repo.name}
            <a href={repo.url} class="card-link">
              {repo.url}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default repos;
