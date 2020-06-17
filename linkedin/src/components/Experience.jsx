import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import './Experience.css'
import ExperienceLayout from './ExperienceLayout';

class Experience extends Component {
    state = { 
        experience:[]
     }

     componentDidMount = async () => {
        const userID = this.props.match.params.userId;
         let response= await fetch("https://striveschool.herokuapp.com/api/profile/"+userID+ "/experiences/",{
            method:"GET",
            headers:new Headers({
                "content-type":"application/json",
                "Authorization":"Basic dXNlcjIzOjJhazlFNXFxQkt2VjJ3a3k="
            })
         })
         let experience= await response.json()
        this.setState({
            experience
        })
     }
    render() { 
        return (  
            <>
            <div className="experience-wrapper">
            <div className="mx-3 d-flex justify-content-between">
                <h3>Experience</h3>
                <i class="fa mt-2 fa-2x fa-edit"></i>
            </div>
            {this.state.experience.map((data,index)=>
            <ExperienceLayout bridgerole={data.role} bridgecompany={data.company}
            bridgedata={data.date} bridgearea={data.area} bridgedescription={data.description}
            key={index}/>
            )}
            </div>
            </>
        );
    }
}
 
export default Experience;