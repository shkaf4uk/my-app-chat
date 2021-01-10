import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivatedEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activatedEditMode}><b>Status:</b> {this.props.status ? this.props.status : '-----'}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange}
                       autoFocus={true}
                       onBlur={this.deActivatedEditMode}
                       value={this.state.status}/>
            </div>
            }
        </>
    }
}

export default ProfileStatus