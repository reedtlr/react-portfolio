import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-2',
        category: 'role: Frontend/Lead',
        title: 'Exploring National Parks During Covid: Live Search',
        href: 'https://github.com/reedtlr/exploringParksDuringCovidLiveSearch',
        href2: 'https://exploringparksduringcovid.live/',
        hrefTitle: 'Github Repository',
        hrefTitle2: 'Live Demo'
    },
    {
        image: 'image-3',
        category: 'role: Full-Stack',
        title: 'DroneZones Next.js Frontend',
        href: 'https://github.com/reedtlr/dronezonesfrontend',
        href2: 'http://dronezones.io/',
        hrefTitle: 'Github Repository',
        hrefTitle2: 'Live Demo'
    },
    {
        image: 'image-1',
        category: 'role: Full-Stack',
        title: 'ASGM Vue.js Frontend',
        href: 'https://github.com/reedtlr/ASGMfrontEnd',
        href2: 'https://asgmwfu.com/about.html',
        hrefTitle: 'Github Repository',
        hrefTitle2: 'Live Demo'
    }
    // ,
    // {
    //     image: 'image-1',
    //     category: 'Development',
    //     title: 'MediaInfo Python Lambda',
    //     href: 'https://github.com/reedtlr/mediaInfo-python-lambda',
    //     href2: 'http://dronezones.io/',
    //     hrefTitle: 'Github Repository',
    //     hrefTitle2: 'Project Demo'
    // },
    // {
    //     image: 'image-7',
    //     category: 'Development',
    //     title: 'User Directory with React',
    //     href: 'https://github.com/reedtlr/user-directory-with-react',
    //     href2: 'https://reedtlr.github.io/user-directory-with-react/',
    //     hrefTitle: 'Github Repository',
    //     hrefTitle2: 'Live Demo'
    // },
    // {
    //     image: 'image-8',
    //     category: 'Development',
    //     title: 'Budget Tracker with IndexedDB',
    //     href: 'https://github.com/reedtlr/budget-tracker-with-indexedDB',
    //     href2: 'https://safe-escarpment-35566.herokuapp.com/',
    //     hrefTitle: 'Github Repository',
    //     hrefTitle2: 'Live Demo'
    // }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.href}>{value.hrefTitle}</a>
                                        <a className="rn-btn" href={value.href2}>{value.hrefTitle2}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;