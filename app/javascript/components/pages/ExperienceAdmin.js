import React from "react"
import {
  Modal, Button
} from 'react-bootstrap'
import EditModal from './EditModal'
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap'

import ExperiencePlaceholder from '../../images/Experience-Placeholder.jpg'
import Map from '../../images/map.jpg'


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
      if(window.confirm('Are You Sure You Wish To Delete This Experience?')){
        this.props.delete(id)
      }
    }

    modalClose = () =>
    this.setState({
        modalEditShow: false
    })
    render () {
        let {index, experience} = this.props

        return (
            <div>
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <span>{experience.experience_name}  </span>
                    </div>
                    <div className="col-2">
                      <span>{experience.experience_type}  </span>
                    </div>
                    <div className="col-3">
                      <span>{experience.experience_sub_type}  </span>
                    </div>
                    <div className="col-1">
                      <span><button className="admin-button" onClick={this.modalOpen}>View</button></span>
                    </div>
                    <div className="col-1">
                      <span><button className="admin-button" onClick={this.modalEdit}>Edit</button></span>
                    </div>
                    <div className="col-1">
                      <span><button className="admin-button" onClick={() => this.delete(experience.id)}>Delete</button></span>
                    </div>
                  </div>
                </div>
                <br className="line-break-spacing"/>



                <EditModal  experience={experience} id={this.state.id}  modalEditShow={this.state.modalEditShow} modalClose={this.modalClose}/>

                <Modal className="modal" show = {this.state.modalShow} onHide={this.modalCloseView} >
                    <Modal.Header>
                        <Modal.Title>{experience.experience_type} - {experience.experience_sub_type}</Modal.Title>
                    </Modal.Header>


                    <Modal.Body>
                        <img src={ExperiencePlaceholder} className="responsive" alt='San Diego with view of Coronado Bridge' />
                        <br/>
                        <br/>
                        <h3>{experience.experience_name}</h3>
                        <p>{experience.experience_description}</p>
                        <p>Website: {experience.website}</p>
                        <p>Phone Number: {experience.phone_number}</p>
                        <p>Hours: {experience.hours}</p>
                        <p>Address: {experience.address}</p>
                        <img src={Map} className="responsive" alt='Map of San Diego' />
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" className="save-button" onClick={this.modalCloseView}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ExperienceAdmin;
