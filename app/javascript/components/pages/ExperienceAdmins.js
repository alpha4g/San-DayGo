import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import ExperienceAdmin from './ExperienceAdmin'
import EditModal from './EditModal'
import AdminApp from '../AdminApp'
import HeaderPlaceholder from '../../images/Header-Placeholder.jpg'
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap'


class ExperienceAdmins extends React.Component {
      constructor(props){
       	    super(props)
       	    this.state = {
       	      experiences: []
       	    }
       	  }

    componentDidMount=() =>{
      window.scrollTo(0,0)
	      fetch('/experiences')
	      .then((response) => {
	        return response.json()
	      })
      .then((json) => {
    this.setState({experiences: json})
      })
      .catch((e)=>{
        console.log("Error", e)
      })
    }


    deleteExperience = (id)=> {
    	return fetch( `http://localhost:3000/experiences/${id}`, {

    		method: "DELETE"
    	})
    		.then((resp) => {
    			let json = resp.json()
                console.log(json);
    			return json

    		}).then((parsedJson) =>{

                this.setState({
                    experiences: parsedJson
                })
            })

    }


  render () {
    return (

    <React.Fragment>
        <img src={HeaderPlaceholder} className="responsive" alt='San Diego with view of Coronado Bridge' />
        <div className="section-padding">
            <h2>ADMIN DASHBOARD</h2>
            <br/>
            <Link to="/NewExperience"><Button className="create-button" variant="primary">Create New Experience</Button></Link>
            <br/>
            <br/>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <span className="experience-label-font">TITLE</span>
                </div>
                <div className="col-2">
                  <span className="experience-label-font">TYPE</span>
                </div>
                <div className="col-3">
                  <span className="experience-label-font">SUB TYPE</span>
                </div>
                <div className="col-1">
                  <span> </span>
                </div>
                <div className="col-1">
                  <span> </span>
                </div>
                <div className="col-1">
                  <span> </span>
                </div>
              </div>
            </div>
            <br/>
            {this.state.experiences.map((experience, index) =>
            <ExperienceAdmin experience={experience} index={index} delete={this.deleteExperience} key={index}/>
            )}
        </div>
    </React.Fragment>

        )
    }
}

export default ExperienceAdmins
