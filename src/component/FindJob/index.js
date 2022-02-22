import React from 'react';
import JobContainer from './JobContainer';
// import data from './data.json'

function index(props) {
    return (
        <div className='container'>
            {/* {data.map(item => <JobContainer title={item.title}/>)} */}
            <JobContainer title="Need to develop Static WordPress Web Website"
             price="Fixed-price-Posted 21 hours ago"
             budget="$120" 
             text="We require a static WordPress website .Need to add 4  pages including Homepage, About, Services and Contact page.The budget is negotiable.Very simple job for anyone familiar with WordPress and WPBakery. I have bought a theme from ThemeForest and installed it, along with the demo data/layout/content. We need to remove the majority of the demo data and just build out a very simple 3-4 page set up with content which will be provided."/>

            <JobContainer title="Design A Responsive 4 Page Events Website"
             price="Fixed-price-Posted 1 hours ago"
             budget="$150" 
             text="We require a static WordPress website .Need to add 4  pages including Homepage, About, Services and Contact page.The budget is negotiable.Very simple job for anyone familiar with WordPress and WPBakery. I have bought a theme from ThemeForest and installed it, along with the demo data/layout/content. We need to remove the majority of the demo data and just build out a very simple 3-4 page set up with content which will be provided."/>
            
        </div>
    );
}

export default index;