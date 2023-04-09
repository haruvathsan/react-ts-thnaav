import * as React from 'react';
import Banner from './banner';
import './style.css';
import Content from './Content';

export const Contents = [

  {
    title:"BUILDING CONSTRUCTION",
    des:"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    },
    {
    title:"HOUSE RENOVATION",
    des:"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
    },
    {
      title:"ARCHITECTURE DESIGN",
      des:"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
      },
      {
        title:"INTERIOR DESIGN",
        des:"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
        },
        {
          title:"FIXING & SUPPORT",
          des:"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
          },
          {
            title:"PAINTING",
            des:"Duo dolore et diam sed ipsum stet amet duo diam. Rebum amet ut amet sed erat sed sed amet magna elitr amet kasd diam duo",
            },
]
export default function App() {
  class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Content: [],
      };
    }
    componentDidMount() {
      this.setState({ Content: Contents });
    }
    render() {
   return (
    <div>
      <Banner/>
      <Content {...this.state}/>

     </div>
     );
    }
  }
}