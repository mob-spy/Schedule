import React, { Component } from 'react'

export default class Add extends Component {
    render() {
        return (
            <div className="add col-4">
                <h3 className="text-center">Add schedule</h3>
                <form>
                    <div className="form-group">
                    <label htmlFor="title_schedule">Title schedule</label>
                    <input type="text" className="form-control" id="title_schedule" aria-describedby placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                    <label htmlFor="content_schedule">Content</label>
                    <div className="form-group">
                        <textarea className="form-control" name id rows={3} defaultValue={""} />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Add schedule</button>
                </form>
            </div>

        )
    }
}
