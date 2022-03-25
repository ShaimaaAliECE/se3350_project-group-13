import React from "react";
import axios from "../utils/axios";
import '../styles/Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('Username'),
            levelOne: [],
            levelTwo: [],
            levelThree: [],
            levelFour: [],
            levelFive: [],
            customLevel: []
        }
        //level one data
        axios.get(`http://localhost:3001/getLevelOneInfo?username=${this.state.username}`).then((res) => {
            this.setState({levelOne: res.data});
        });
        // level 2-5, and custom data 
        this.handleLevelData("LevelTwo", this.state.levelTwo);
        this.handleLevelData("LevelThree", this.state.levelThree);
        this.handleLevelData("LevelFour", this.state.levelFour);
        this.handleLevelData("LevelFive", this.state.levelFive);
        this.handleLevelData("CustomLevel", this.state.customLevel);
    }
    handleLevelData(level, stateLevel) {
        axios.get(`http://localhost:3001/getLevelInfo?username=${this.state.username}&level=${level}`).then((res) => {
            this.setState({stateLevel: res.data});
        });
    }
    render() {
        return(
            <div>
                <h1>Profile</h1>
            </div>
        );
    }
}

export default Profile;
