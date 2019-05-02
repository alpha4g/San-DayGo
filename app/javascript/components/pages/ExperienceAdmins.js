import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import ExperienceAdmin from './ExperienceAdmin'
import EditModal from './EditModal'
import AdminHeader from '../../images/Admin-Header-Dark.jpg'
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
                experiences: [],
                lat: 32.715024,
                long: -117.147639
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
    	return fetch( `/experiences/${id}`, {

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
      const {long,lat, google}=this.state 

    return (

    <React.Fragment>
        <img src={AdminHeader} className="responsive" alt='Image of Ocean Beach Pier with Admin Poral Logo' />
        <div className="section-padding">
            <h2>USER EXPERIENCES</h2>
            <br/>
            <Link to="/NewExperience"><Button className="med-button" variant="primary">Create New Experience</Button></Link>
            <br/>
            <br/>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-5">
                  <span className="experience-label-font">TITLE</span>
                </div>
                <div className="col-lg-2 col-sm-3">
                  <span className="experience-label-font">TYPE</span>
                </div>
                <div className="col-lg-3 col-sm-3">
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
            <ExperienceAdmin experience={experience} index={index} delete={this.deleteExperience} key={index} long={long} lat={lat}/>
            )}
        </div>
    </React.Fragment>
        )
    }
}

export default ExperienceAdmins
