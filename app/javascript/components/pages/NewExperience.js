import React from "react"
import PropTypes from "prop-types"
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class NewExperience extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form:{
                experience_name:'',
                experience_type:'',
                experience_sub_type:'',
                experience_description:'',
                address:'',
                website:'',
                phone_number:'',
                hours:''
            }
        }
    }

    createExperience = (experiences) => {
        return fetch('http://localhost:3000/experiences', {
            body: JSON.stringify({NewExperience}),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: "POST"
        })
        .then((resp) => {
            let json = resp.json()
                return json
        })
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleSubmit = () => {
        {this.createExperience(this.state.form)}
        this.setState({form: form})
    }

  render () {
      let { form } = this.state
    return (
    <React.Fragment>
        <div>
            <h1>Enter New Experience Here</h1>
        <Form>
            <Form.Group controlId="">
                <Form.Label>Experience Name:</Form.Label>
                    <Form.Control onChange = {this.handleChange} type="text" placeholder="Experience Name" />
            </Form.Group><br/>
            <Form.Group controlId="">
                <Form.Label>Experience Type:</Form.Label>
                    <Form.Control onChange = {this.handleChange} as="select" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Choose An Experience Type</option>
                        <option value= "Adventerous">Adventerous</option>
                        <option value= "Foodie">Foodie</option>
                        <option value= "Beach Bum">Beach Bum</option>
                        <option value= "Family">Family</option>
                        <option value= "Sporty">Sporty</option>
                        <option value= "Cultural">Cultural</option>
                        <option value= "Fashonista">Fashonista</option>
                        <option value= "LGBT">LGBT</option>
                        <option value= "Outdoors">Outdoors</option>
                    </Form.Control>
            </Form.Group><br/>
            <Form.Group controlId="">
                <Form.Label>Experience Sub-Type:</Form.Label>
                    <Form.Control onChange = {this.handleChange} as="select" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Choose An Activity</option>
                        <option value="Day Activity">Day Activity</option>
                        <option value="Night Acitivity">Night Acitivity</option>
                        <option value="Restaurant $">Restaurant $</option>
                        <option value="Restaurant $$">Restaurant $$</option>
                        <option value="Restaurant $$$">Restaurant $$$</option>
                    </Form.Control>
            </Form.Group><br/>
            <Form.Group controlId="">
                <Form.Label>Experience Description:</Form.Label>
                    <Form.Control onChange = {this.handleChange} as="textarea"/>
            </Form.Group><br/>
            <Form.Group controlId="">
                <Form.Label>Address:</Form.Label>
                    <Form.Control onChange = {this.handleChange} type="text" placeholder="Enter Address"/>
            </Form.Group><br/>
            <Form.Group controlId="">
                <Form.Label>Website:</Form.Label>
                    <Form.Control onChange = {this.handleChange} type="text" placeholder="Enter Website"/>
            </Form.Group><br/>
            <Form.Group controlId="">
                <Form.Label>Phone Number:</Form.Label>
                    <Form.Control onChange = {this.handleChange} type="text" placeholder="Enter Phone Number"/>
            </Form.Group><br/>
            <Form.Group controlId="">
                <Form.Label>Hours of Operation:</Form.Label>
                    <Form.Control onChange = {this.handleChange} type="text" placeholder="Enter Hours of Operation"/>
            </Form.Group><br/>
            <Button onClick = {this.handleSubmit} type="submit">Create The Experience</Button>
        </Form>
        <Link to="/NewExperience">Create New Experience</Link><br/>
        <Link to="/admin">Back</Link>
        </div>
    </React.Fragment>

            );
        }
    }

export default NewExperience
