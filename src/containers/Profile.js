import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    // API call to GitHub Start
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/louiejf1");
    const profileJSON = await profile.json();

    if (profileJSON) {
      this.setState({
        data: profileJSON,
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
      <div className="Profile_container">
        <img className="Profile-Avatar" src={data.avatar_url} />
        <ul>
          <li><strong>Html_url:</strong> {data.html_url}</li>
          <li><strong>Repos_url:</strong> {data.repos_url}</li>
          <li><strong>Name:</strong> {data.name}</li>
          <li><strong>Company:</strong> {data.company}</li>
          <li><strong>Location:</strong> {data.location}</li>
          <li><strong>Email:</strong> {data.email}</li>
          <li><strong>Bio:</strong> {data.bio}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
