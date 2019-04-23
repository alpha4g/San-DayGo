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
           experience: experience
        });
    }
     modalEdit = () => {
        this.setState({
           modalEditShow: true,
        });
    }


    modalClose = () => this.setState({ modalShow: false });

    delete=(id)=>{
        this.props.delete(id)
    }

    render () {
        let {index, experience} = this.props

        return (
            <React.Fragment>

                <p>Experience Name: {experience.experience_name}</p>
                <p>Experience Type: {experience.experience_type}</p>
                <br/>
                <br/>
                <p><button onClick={() => this.setState({ modalOpen: true })}>View Details</button></p>
                <p><button onClick={() => this.setState({ modalEdit:true })}>Edit Info</button></p>
                <p><button onClick={() => this.delete(experience.id)}>Delete</button></p>

                <Modal show = {this.state.modalShow}>
                  <Modal.Header>
                    <Modal.Title>{experience.experience_name}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Experience Type:{experience.experience_type}</p>
                    <p>Experience Sub-type:{experience.experience_sub_type}</p>
                    <p>Description:{experience.experience_description}</p>
                    <p>Address:{experience.address}</p>
                    <p>Website:{experience.website}</p>
                    <p>Phone Number{experience.phone_number}</p>
                    <p>Hours{experience.hours}</p>
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
