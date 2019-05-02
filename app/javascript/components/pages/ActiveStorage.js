import React from "react"
import PropTypes from "prop-types"
import ActiveStorageProvider from 'react-activestorage-provider'

class ActiveStorage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      experience: props.experience
    }
  }
  handleSubmit =(experience) => {
    this.setState({ experience })
  }
  render () {
    const{ experience } = this.state
    return (
      <React.Fragment>
      { experience && experience.photo_url &&
             <div>
                 <img src={experience.photo_url}/>
             </div>
             }
          <ActiveStorageProvider
            endpoint={{
              path: `/experiences/${experience.id}`,
              model: 'Experience',
              attribute: 'photo',
              method: 'PUT',
            }}
            onSubmit={this.handleSubmit}
            render={({ handleUpload, uploads, ready }) => (
              <div>
                <input
                  type="file"
                  disabled={!ready}
                  onChange={e => handleUpload(e.currentTarget.files)}
                />

                {uploads.map(upload => {
                  switch (upload.state) {
                    case 'waiting':
                      return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                    case 'uploading':
                      return (
                        <p key={upload.id}>
                          Uploading {upload.file.name}: {upload.progress}%
                        </p>
                      )
                    case 'error':
                      return (
                        <p key={upload.id}>
                          Error uploading {upload.file.name}: {upload.error}
                        </p>
                      )
                    case 'finished':
                      return (
                        <p key={upload.id}>Finished uploading {upload.file.name}</p>
                      )
                  }
                })}
              </div>
            )}
          />
      </React.Fragment>
    );
  }
}

export default ActiveStorage
