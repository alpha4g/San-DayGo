import React from "react"
import {
  Modal, Button
} from 'react-bootstrap'
import EditModal from './EditModal'


class ExperienceAdmin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalShow: false,
            modalEditShow:false,
            experience:'',
            id:''
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
    toggleEdit = (experience, id) => {
       this.props.toggleEdit()
       this.setState({experience: experience, id: id})
   }

    modalCloseView = () =>
    this.setState({
        modalShow: false
    });

    delete=(id)=>{
        this.props.delete(id)
    }

    modalClose = () =>
    this.setState({
        modalEditShow: false
    })
    render () {
        let {index, experience} = this.props

        return (
            <div>
                <p>
                    <span>Experience Name: {experience.experience_name}  </span>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <span>Experience Type: {experience.experience_type}  </span>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <span><button onClick={this.modalOpen}> View Details </button></span>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <span><button onClick={this.modalEdit}> Edit Info </button></span>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <span><button onClick={() => this.delete(experience.id)}> Delete </button></span>
                </p>

                <EditModal  experience={experience} id={this.state.id} toggle={this.props.toggleEdit} modalEditShow={this.state.modalEditShow} modalClose={this.modalClose} edit={this.props.edit} />

                <Modal className="modal" show = {this.state.modalShow} onHide={this.modalClose} >
                    <Modal.Header>
                        <Modal.Title>{experience.experience_name}</Modal.Title>
                    </Modal.Header>


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
                        <Button variant="secondary" onClick={this.modalCloseView}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ExperienceAdmin;
