import React, { Component } from 'react';
import {
  Modal, Button, Form, FormControl
} from 'react-bootstrap'


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
        // let tempform = this.state.form
        // this.setState({form: tempform})
        this.editExperience(form).then((resp) => {this.setState({form:resp})
        })
      }



    render() {
        let  {form} = this.state
console.log(this.state);
        return (
            <div>
                <Modal show={this.props.modalEditShow} onHide={this.modalClose}>
                  <Modal.Header>
                    <Modal.Title>{form.experience_name}</Modal.Title>
                  </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Label id="experience_type">Experience Type:</Form.Label>
                            <FormControl name="experience_type"type="text" value={form.experience_type} onChange={this.handleChange}  />

                            <Form.Label id="experience_sub_type">Experience Sub-type:</Form.Label>
                            <FormControl name="experience_sub_type" type="text" value={form.experience_sub_type} onChange={this.handleChange} />

                            <Form.Label id="experience_description">Description:</Form.Label>
                            <FormControl name="experience_description" type="text" value={form.experience_description} onChange={this.handleChange} />

                            <Form.Label id="address">Address:</Form.Label>
                            <FormControl name="address" type="text" value={form.address} onChange={this.handleChange} />

                            <Form.Label id="website">Website:</Form.Label>
                            <FormControl name="website" type="text" value={form.website} onChange={this.handleChange} />

                            <Form.Label id="phone_number">Phone Number:</Form.Label>
                            <FormControl name="phone_number" type="text" value={form.phone_number} onChange={this.handleChange} />

                            <Form.Label id="hours">Hours:</Form.Label>
                            <FormControl name="hours" type="text" value={form.hours} onChange={this.handleChange} />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.modalClose} variant="secondary"> Close </Button>
                        <Button id="submit" type="submit"  className="btn btn-primary" data-dismiss="modal" onClick={this.handleEdit}> Save Changes </Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

export default EditModal;
