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
                                                    HTML5, CSS3, JavaScript, JQuery, React ...
                                                </li>
                                                <li>
                                                    <a href="#about">Back-end <span> - Development</span></a>
                                                    Node, Express, SQL, MongoDB, Next ...
                                                </li>
                                                <li>
                                                    <a href="#about">Project <span> - Management</span></a>
                                                   Scrum daily, Agile Management ...   
                                                </li>
                                                <li>
                                                    <a href="#about">Web <span> - Development</span></a>
                                                    Mobile first, Serverless, Testing, PWA, AWS Services ...
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                     

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Certificate in Web Development<span> - University of North Carolina Chapel Hill</span></a> 2020-2021
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
                                    
                                    <br/>
                                    <a href='https://drive.google.com/file/d/1RDSs88oL1Py_ZRDWseI1tRjBfUEya0wp/view?usp=sharing' className="rn-button-style--2 btn-solid"  type="button">Download Resume</a>  

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