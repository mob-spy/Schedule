import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div className="conten col">
            <div className="add_button text-right mb-4">
              <button type="button" name="" id="" className="btn btn-primary">Add schedule</button>
            </div>
           <div id="accordianId" role="tablist" aria-multiselectable="true">
             <div className="card">
               <div className="card-header" role="tab" id="section1HeaderId">
                 <h5 className="mb-0">
                   <a data-toggle="collapse" data-parent="#accordianId" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                     Section 1
                   </a>
                 </h5>
               </div>
               <div id="section1ContentId" className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                 <div className="card-body">
                   Section 1 content
                 </div>
               </div>
             </div>
           </div>
          </div>
        )
    }
}
