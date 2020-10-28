import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
    
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="#about">Front-end <span> - Development</span></a>
                                                    HTML5, CSS3, JavaScript ES6, React.js ...
                                                </li>
                                                <li>
                                                    <a href="#about">Back-end <span> - Development</span></a>
                                                    Node.js, Express.js ...
                                                </li>
                                                <li>
                                                    <a href="#about">Agile Project <span> - Management</span></a>
                                                   Scrum daily, Incremental change, Resolve issues quickly, Reduce risk ...   
                                                </li>
                                                <li>
                                                    <a href="#about">Web and user interface design<span> - Development</span></a>
                                                    Mobile first, Responsive design, Streamline for high ratings in Lighthouse ...
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                     

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Certificate in Web Development<span> - University of North Carolina Chapel Hill</span></a> current
                                               </li>
                                               <li>
                                                   <a href="/service">PhD in Soical, Political, Ethical, and Cultural Thought<span> - Virginia Tech</span></a> 2012
                                               </li>
                                               <li>
                                                   <a href="/service">MPhil in Economics and Philosophy<span> - Erasmus University Rotterdam, the Netherlands</span></a> 2004
                                               </li>
                                               <li>
                                                   <a href="/service">BA in Philosophy and History<span> - University of New Mexico</span></a> 2001
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;