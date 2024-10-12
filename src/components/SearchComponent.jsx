import axios from "axios";
import React from "react";
import { FiSearch } from "react-icons/fi";
import  { useContext } from 'react';
import { MyContext } from "../App";

export default function SearchComponent({setId ,id}) {
    const {  setData } = useContext(MyContext);

    const handleChange = (e)=>{
        const {value} = e.target;
        setId(value)
    }

    // Function to fetch data
    const getData = async()=>{
        try{
            console.log("the id == >", id)
            const res = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`)
            setData(res.data);
            console.log("res.data: ", res.data)
        } catch(error){
            console.error("The Error is  ==> ", Error.error)
        }
    }

	return (
		<div className="search-container">
			<p className="search-p">Track Your Cargo</p>
            <div className="search">
                <FiSearch className="search-icon" onClick={getData} />
                <input name="id" type="text" placeholder="Cargo ID" onChange={handleChange} />
            </div>
		</div>
	);
}
