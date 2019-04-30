import React from "react"
import PropTypes from "prop-types"
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AdminHeader2 from '../../images/Admin-Header2.jpg'



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

    componentDidMount = () => {
      window.scrollTo(0,0)
    }

    createExperience = (experience) => {
        return fetch('http://localhost:3000/experiences', {
            body: JSON.stringify({experience}),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: "POST"
        })
        .then((resp) => {
            let json = resp.json()
            console.log(json);
                return json
        })
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form});
    }

    handleSubmit = () => {
        this.createExperience(this.state.form);
    }

  render () {
      let { form } = this.state
    return (
    <React.Fragment>
    <img src={AdminHeader2} className="responsive" alt='San Diego Skyline with Admin Logo' />
    <div className="section-padding">
            <h2>ENTER NEW EXPERIENCE</h2>
            <br/>
        <Form>
            <Form.Group controlId="">
                <Form.Label>Experience Name: </Form.Label>
                    <Form.Control
                    name="experience_name"
                    required onChange={this.handleChange}
                    type="text"
                    />
            </Form.Group>
            <br className="line-break-spacing"/>
            <Form.Group controlId="">
                <Form.Label>Experience Type: </Form.Label>
                    <Form.Control
                    name="experience_type"
                    onChange = {this.handleChange}
                    as="select"
                    defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Choose One</option>
                        <option>Restaurant</option>
                        <option>Adrenaline</option>
                        <option>Food</option>
                        <option>Beach</option>
                        <option>Family</option>
                        <option>Sports</option>
                        <option>Culture</option>
                        <option>Fashon</option>
                        <option>LGBT</option>
                        <option>Outdoor</option>
                    </Form.Control>
            </Form.Group>
            <br className="line-break-spacing"/>
            <Form.Group controlId="">
                <Form.Label>Experience Sub-Type: </Form.Label>
                    <Form.Control
                    name="experience_sub_type"
                    onChange = {this.handleChange}
                    as="select" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Choose One</option>
                        <option>Day Activity</option>
                        <option>Night Activity</option>
                        <option>$</option>
                        <option>$$</option>
                        <option>$$$</option>
                    </Form.Control>
            </Form.Group>
            <br className="line-break-spacing" />
            <Form.Group controlId="">
                <Form.Label>Experience Description</Form.Label>
                    <Form.Control
                    name="experience_description"
                    onChange = {this.handleChange}
                    as="textarea"/>
            </Form.Group>
            <br className="line-break-spacing" />
            <Form.Group controlId="">
                <Form.Label>Address</Form.Label>
                    <Form.Control
                    name="address"
                    onChange = {this.handleChange}
                    type="text"/>
            </Form.Group>
            <br className="line-break-spacing" />
            <Form.Group controlId="">
                <Form.Label>Website</Form.Label>
                    <Form.Control
                    name="website"
                    onChange = {this.handleChange}
                    type="text"/>
            </Form.Group>
            <br className="line-break-spacing" />
            <Form.Group controlId="">
                <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                    name="phone_number"
                    onChange = {this.handleChange}
                    type="text"/>
            </Form.Group>
            <br className="line-break-spacing" />
            <Form.Group controlId="">
                <Form.Label>Hours of Operation</Form.Label>
                    <Form.Control
                    name="hours"
                    onChange = {this.handleChange}
                    type="text"/>
            </Form.Group>
            <br className="line-break-spacing"/>
            <br className="line-break-spacing"/>
            <br className="line-break-spacing"/>
            <Link to="/admin"
            name="name"
            onClick = {this.handleSubmit}
            type="submit" ><Button className="submit-button" variant="primary">Save</Button></Link>
            <Link to="/admin"><Button className="back-button" variant="primary">Back</Button></Link>
        </Form>
        </div>
    </React.Fragment>
            );
        }
    }
export default NewExperience
