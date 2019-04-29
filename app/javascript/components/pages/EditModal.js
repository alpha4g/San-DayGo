import React, { Component } from 'react';
import { Modal, Button, Form, FormControl } from 'react-bootstrap'
import ExperiencePlaceholder from '../../images/Experience-Placeholder.jpg'

class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                id:this.props.experience.id,
                experience_name:this.props.experience.experience_name,
                experience_type: this.props.experience.experience_type,
                experience_sub_type: this.props.experience.experience_sub_type,
                experience_description: this.props.experience.experience_description,
                address: this.props.experience.address,
                website: this.props.experience.website,
                phone_number: this.props.experience.phone_number,
                hours: this.props.experience.hours,
           },
            modalEditShow:false
        }
    }
    editExperience = (experience) => {
        console.log(experience)
        return fetch(`http://localhost:3000/experiences/${experience.id}`, {
            body: JSON.stringify({experience}),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: "PATCH"
        })
        .then((resp) => {
            let json = resp.json()

                return json

        })
    }

    handleChange = (e) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleEdit = () => {
        let { form } = this.state
        this.editExperience(form).then((resp) => {this.setState({form:resp})
        })
      }

    finalSave =() => {
        this.handleEdit()
        this.props.modalClose()
        history.go(0)
    }

    render() {
        let {form} = this.state
          console.log(this.state);
        return (
            <div>
                <Modal show={this.props.modalEditShow} onHide={this.props.modalClose}>
                    <Modal.Header>
                        <Modal.Title id="edit-title">Edit Experience</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <img src={ExperiencePlaceholder} className="responsive" alt='Beach Image with San Diego Tourism Logo' />
                            <br/>
                            <br/>
                            <Form.Label id="experience_name">Experience Name</Form.Label>
                            <FormControl name="experience_name" type="text" value={form.experience_name} onChange={this.handleChange} />
                            <br/>
                            <Form.Label id="experience_type">Experience Type</Form.Label>
                            <Form.Control
                            name="experience_type"  defaultValue={form.experience_type} onChange={this.handleChange} as="select">
                                <option>Restaurant</option>
                                <option>Adrenaline</option>
                                <option>Foodie</option>
                                <option>Beach Bum</option>
                                <option>Family</option>
                                <option>Sporty</option>
                                <option>Cultural</option>
                                <option>Fashonista</option>
                                <option>LGBT</option>
                                <option>Outdoors</option>
                            </Form.Control>
                            <br/>
                            <Form.Label id="experience_sub_type">Experience Sub-type</Form.Label>
                            <Form.Control
                            name="experience_sub_type"
                            defaultValue={form.experience_sub_type} onChange={this.handleChange} as="select">
                                <option value="DEFAULT" disabled>Choose An Activity</option>
                                <option>Day Activity</option>
                                <option>Night Acitivity</option>
                                <option>$</option>
                                <option>$$</option>
                                <option>$$$</option>
                            </Form.Control>
                            <br/>
                            <Form.Label id="experience_description">Description</Form.Label>
                            <FormControl name="experience_description" type="text" defaultValue={form.experience_description} onChange={this.handleChange} />
                            <br/>
                            <Form.Label id="address">Address</Form.Label>
                            <FormControl name="address" type="text" defaultValue={form.address} onChange={this.handleChange} />
                            <br/>
                            <Form.Label id="website">Website</Form.Label>
                            <FormControl name="website" type="text" defaultValue={form.website} onChange={this.handleChange} />
                            <br/>
                            <Form.Label id="phone_number">Phone Number</Form.Label>
                            <FormControl name="phone_number" type="text" defaultValue={form.phone_number} onChange={this.handleChange} />
                            <br/>
                            <Form.Label id="hours">Hours</Form.Label>
                            <FormControl name="hours" type="text" defaultValue={form.hours} onChange={this.handleChange} />
                            <br/>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button id="submit" type="submit"  className="save-button" data-dismiss="modal" onClick={this.finalSave}> Save Changes </Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

export default EditModal;
