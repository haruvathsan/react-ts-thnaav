import * as React from 'react';
class Content extends React.Component<any, any> {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <React.Fragment>
        <div className="container-fluid bg-light py-6 px-5">
          <div className="text-center mx-auto mb-5">
              <h1 className="display-5 text-uppercase mb-4">We Provide <span className="text-primary">The Best</span> Construction Services</h1>
          </div>
          <div className="row g-5">
                {this.props.Content.length > 0 && this.props.Content.map((item: any, index: any) => {
                    return (
              <div className="col-lg-4 col-md-6">
                   <div className="service-item bg-white d-flex flex-column align-items-center text-center">
                      <img className="img-fluid" src="service-1.jpg" alt=""/>
                      <div className="service-icon bg-white">
                          <i className="fa fa-3x fa-building text-primary"></i>
                      </div>
                      <div className="px-4 pb-4">
                          <h4 className="text-uppercase mb-3">{item.title}</h4>
                          <p>{item.des}</p>
                          <a className="btn text-primary" href="">Read More <i className="bi bi-arrow-right"></i></a>
                      </div>
                  </div>
              </div>     
             )})
            }    
          </div>         
        </div>
      </React.Fragment>
      );
    }  
}
export default Content;
