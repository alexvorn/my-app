import React, { Component } from 'react';

export default class authImage extends Component {
    render() {
        return (
            <div>
                <div className='singUpRobot'>
                    <img src={require('../images/robot.png')} alt="#"/>
                </div>
            </div>
        )
    }
}
