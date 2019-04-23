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
            modalEditShow:true
        }
    }


    handleSave = () => {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    experienceTypeHandler = (e)=> {
        this.setState({ experience_type: e.target.value });
    }
    experienceSubTypeHandler = (e)=> {
        this.setState({ experience_sub_type: e.target.value });
    }
    experienceDescriptionHandler = (e)=> {
        this.setState({ experience_description: e.target.value });
    }
    addressHandler = (e)=> {
        this.setState({ address: e.target.value });
    }
    websiteHandler = (e) =>{
        this.setState({ website: e.target.value });
    }
    phoneNumberHandler = (e)=> {
        this.setState({ phone_number: e.target.value });
    }
    hoursHandler = (e) =>{
        this.setState({ hours: e.target.value });
    }

    modalClose = () =>
    this.setState({
        modalShow: false
    });

    render() {
        return (
            <React.Fragment>
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>{this.state.form.experience_name}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Experience Type:<input value={this.state.experience_type} onChange={(e) => this.experienceTypeHandler(e)} /></p>
                    <p>Experience Sub-type:<input value={this.state.experience_sub_type} onChange={(e) => this.experienceSubTypeHandler(e)} /></p>
                    <p>Description:<input value={this.state.experience_description} onChange={(e) => this.experienceDescriptionHandler(e)} /></p>
                    <p>Address:<input value={this.state.address} onChange={(e) => this.addressHandler(e)} /></p>
                    <p>Website:<input value={this.state.website} onChange={(e) => this.websiteHandler(e)} /></p>
                    <p>Phone Number:<input value={this.state.phone_number} onChange={(e) => this.phoneNumberHandler(e)} /></p>
                    <p>Hours:<input value={this.state.hours} onChange={(e) => this.hoursHandler(e)} /></p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button onClick={this.modalClose} variant="secondary">Close</Button>
                    <Button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSave}>Save changes</Button>
                  </Modal.Footer>
                </Modal.Dialog>;
            </React.Fragment>
        );
    }
    }

export default Modal;
