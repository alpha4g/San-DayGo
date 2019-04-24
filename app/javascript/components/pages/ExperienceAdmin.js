import React from "react"
import {
  Modal, Button
} from 'react-bootstrap'

class ExperienceAdmin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalShow: false,
            experience:''
        }
    }
    modalOpen = () => {
        this.setState({
           modalShow : true,

        });
    }
     modalEdit = () => {
        this.setState({
           modalEditShow: true,
        });
    }

    modalClose = () =>
    this.setState({
        modalShow: false
    });

    delete=(id)=>{
        this.props.delete(id)
    }

    render () {
        let {index, experience} = this.props

        return (
            <React.Fragment>
                <p>
                <span>Experience Name: {experience.experience_name}  </span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span>Experience Type: {experience.experience_type}  </span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span><button onClick={this.modalOpen}> View Details </button></span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span><button onClick={this.modalOpen}> Edit Info </button></span>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span><button onClick={() => this.delete(experience.id)}> Delete </button></span>
                </p>

<<<<<<< HEAD
                { this.state.modalShow ? <div onClick={this.modalClose} className="back-drop"></div> : null }

                <Modal className="modal" show = {this.state.modalShow} >
                    <Modal.Header>
                        <Modal.Title>{experience.experience_name}</Modal.Title>
                    </Modal.Header>
=======
                <p>Experience Name: {experience.experience_name}</p>
                <p>Experience Type: {experience.experience_type}</p>
                <br/>
                <br/>
                <p><button onClick={this.modalOpen}>View Details</button></p>
                <p><button onClick={this.modalEdit}>Edit Info</button></p>
                <p><button onClick={() => this.delete(experience.id)}>Delete</button></p>

                { this.state.modalShow ? <div onClick={this.modalClose} className="back-drop"></div> : null }

                <Modal className="modal" show = {this.state.modalShow} close={this.modalClose}>
                  <Modal.Header>
                    <Modal.Title>{experience.experience_name}</Modal.Title>
                  </Modal.Header>
>>>>>>> master

                    <Modal.Body>
                        <p>Experience Type: {experience.experience_type}</p>
                        <p>Experience Sub-type: {experience.experience_sub_type}</p>
                        <p>Description: {experience.experience_description}</p>
                        <p>Address: {experience.address}</p>
                        <p>Website: {experience.website}</p>
                        <p>Phone Number: {experience.phone_number}</p>
                        <p>Hours: {experience.hours}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ExperienceAdmin;
