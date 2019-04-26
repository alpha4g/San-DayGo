import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'
import ExperienceAdmin from './ExperienceAdmin'
import EditModal from './EditModal'
import AdminApp from '../AdminApp'
import HeaderPlaceholder from '../../images/Header-Placeholder.jpg'



class ExperienceAdmins extends React.Component {
      constructor(props){
       	    super(props)
       	    this.state = {
       	      experiences: []
       	    }
       	  }

    componentDidMount=() =>{
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
            <Link to="/NewExperience">Create New Experience</Link>
            <br/>
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
