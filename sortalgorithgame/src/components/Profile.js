import React from "react";
import axios from "../utils/axios";
import '../styles/Profile.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        level1: {},
        level2: {},
        level3: {},
        level4: {},
        level5: {},
        custom: {},
    }

    componentDidMount() {
        let username = localStorage.getItem('Username');
        axios.get(`http://35.206.82.164:3001/getLevelOneInfo?username=${username}`).then((res) => {
            if (res.data) {
                this.setState({ level1: res.data[0] });
            }
            else {
                console.log(res);
            }
        });

        axios.get(`http://35.206.82.164:3001/getLevelInfo?level=LevelTwo&username=${username}`).then((res) => {
            if (res.data) {
                this.setState({ level2: res.data[0] });
                console.log(res.data[0])
            }
            else {
                console.log(res);
            }
        });

        axios.get(`http://35.206.82.164:3001/getLevelInfo?level=LevelThree&username=${username}`).then((res) => {
            if (res.data) {
                this.setState({ level3: res.data[0] });
            }
            else {
                console.log(res);
            }
        });

        axios.get(`http://35.206.82.164:3001/getLevelInfo?level=LevelFour&username=${username}`).then((res) => {
            if (res.data) {
                this.setState({ level4: res.data[0] });
            }
            else {
                console.log(res);
            }
        });
        axios.get(`http://35.206.82.164:3001/getLevelInfo?level=LevelFive&username=${username}`).then((res) => {
            if (res.data) {
                this.setState({ level5: res.data[0] });
            }
            else {
                console.log(res);
            }
        });
        axios.get(`http://35.206.82.164:3001/getLevelInfo?level=CustomLevel&username=${username}`).then((res) => {
            if (res.data) {
                this.setState({ custom: res.data[0] });
            }
            else {
                console.log(res);
            }
        });
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Levels
                            </th>
                            <th>
                                Top time
                            </th>
                            <th>
                                Lives used
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Level 1
                            </td>
                            <td>
                                {this.state.level1.completionTime}
                            </td>
                            <td>
                                N/A
                            </td>


                        </tr>
                        <tr>
                            <td>
                                Level 2
                            </td>
                            <td>
                                {this.state.level2.completionTime}
                            </td>
                            <td>
                                {this.state.level2.completionTime === null ? "" : this.state.level2.numberOfAttempts + '/3'}
                            </td>

                        </tr>


                        <tr>
                            <td>
                                Level 3
                            </td>
                            <td>
                                {this.state.level3.completionTime}
                            </td>
                            <td>
                                {this.state.level3.completionTime === null ? "" : this.state.level3.numberOfAttempts + '/3'}
                            </td>

                        </tr>


                        <tr>
                            <td>
                                Level 4
                            </td>
                            <td>
                                {this.state.level4.completionTime}
                            </td>
                            <td>
                                {this.state.level4.completionTime === null ? "" : this.state.level4.numberOfAttempts + '/3'}
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Level 5
                            </td>
                            <td>
                                {this.state.level5.completionTime}
                            </td>
                            <td>
                                {this.state.level5.completionTime === null ? "" : this.state.level5.numberOfAttempts + '/3'}
                            </td>


                        </tr>

                        <tr>
                            <td>
                                Custom level
                            </td>
                            <td>
                                {this.state.custom.completionTime}
                            </td>
                            <td>
                                {this.state.custom.completionTime === null ? "" : this.state.custom.numberOfAttempts + '/3'}
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}



export default Profile;
