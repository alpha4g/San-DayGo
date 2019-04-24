import React, { Component } from 'react';
import {
  Modal, Button
} from 'react-bootstrap'

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
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
            },
            modalShow:false
        }
    }

    experienceTypeHandler = (event)=> {
        this.setState({experience_type: event.target.value});
    }
    experienceSubTypeHandler = (event) => {
        this.setState({experience_sub_type: event.target.value});
    }
    experienceDescriptionHandler = (event) => {
        this.setState({experience_description: event.target.value});
    }
    addressHandler = (event) => {
        this.setState({address: event.target.value});
    }
    websiteHandler = (event) => {
        this.setState({website: event.target.value});
    }
    phoneNumberHandler = (event) => {
        this.setState({phone_number: event.target.value});
    }
    hoursHandler = (event) => {
        this.setState({hours: event.target.value});
    }
    handleSave = (event) => {
        event.preventDefault();
        const form = {
            experience_name:this.state.experience_name,
            experience_type:this.state.experience_type,
            experience_sub_type:this.state.xperience_sub_type,
            experience_description:this.state.experience_description,
            address:this.state.address,
            website:this.state.website,
            phone_number:this.state.phone_number,
            hours:this.state.hours
        }
        this.setState({
        modalShow: !this.state.modalShow

        })
}

    modalOpen = () => {
        this.setState({
           modalShow : true,

        })
    }

    modalClose = () =>
    this.setState({
        modalShow: false
    })


    render() {
        return (
            <React.Fragment>
                <Modal show = {this.state.modalShow}>
                  <Modal.Header closeButton>
                    <Modal.Title>{this.state.form.experience_name}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Form>
                        <label>Experience Type:</label>
                        <p><input type="text" value={this.state.experience_type} onChange={(e) => this.experienceTypeHandler(e)} /></p>
                        <p>Experience Sub-type:<input type="text" value={this.state.experience_sub_type} onChange={(e) => this.experienceSubTypeHandler(e)} /></p>
                        <p>Description:<input type="text" value={this.state.experience_description} onChange={(e) => this.experienceDescriptionHandler(e)} /></p>
                        <p>Address:<input type="text" value={this.state.address} onChange={(e) => this.addressHandler(e)} /></p>
                        <p>Website:<input type="text" value={this.state.website} onChange={(e) => this.websiteHandler(e)} /></p>
                        <p>Phone Number:<input type="text" value={this.state.phone_number} onChange={(e) => this.phoneNumberHandler(e)} /></p>
                        <p>Hours:<input type="text" value={this.state.hours} onChange={(e) => this.hoursHandler(e)} /></p>
                    </Form>
                  </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.modalClose} variant="secondary"> Close </Button>
                        <Button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSave}> Save Changes </Button>
                    </Modal.Footer>

                </Modal>

            </React.Fragment>
        )
    }
}

export default Modal;
