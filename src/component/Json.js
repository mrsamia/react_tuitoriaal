import React, { Component } from 'react';
// TODO JSON লিস্ট আলাদা file e করে ম্যাপিং use করতে চাই 

class Json extends Component {
    render() {

        const mylist=[
            {
                city:"Dhaka",
                zip:"6000"
            },
            {
                city:"Rangpur",
                zip:"4000"
            },
            {
                city:"Shibpur",
                zip:"3000"
            },
            {
                city:"Narsingdi",
                zip:"2000"
            }
        ]

        const dataitemcity=mylist.map((data)=>{
            return <option>{data.city}</option>
        });

        const dataitemZip=mylist.map((data)=>{
            return <option>{data.zip}</option>
        });

        return (
            <div>
                <select>{dataitemcity}</select> 
                <select>{dataitemZip}</select>  
            </div>
        );
    }
}

export default Json;