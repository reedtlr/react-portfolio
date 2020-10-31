import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: 'image-2',
        category: 'Development',
        title: 'Exploring National Parks During Covid: Live Search',
        href: 'https://github.com/tutchings/exploringParksDuringCovidLiveSearch',
        href2: 'https://exploringparksduringcovid.live/'
    },
    {
        image: 'image-1',
        category: 'Development',
        title: 'Travel Forecast Dashboard',
        href: 'https://github.com/reedtlr/travel_forecast_dashboard',
        href2: 'https://reedtlr.github.io/travel_forecast_dashboard/'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Daily Office Planner',
        href: 'https://github.com/reedtlr/daily_office_planner',
        href2: 'https://reedtlr.github.io/daily_office_planner/'
    }
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
                                        <a className="rn-btn" href={value.href}>Github Repository</a>
                                        <a className="rn-btn" href={value.href2}>Live Demo</a>
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