import axios from "axios";
import React from "react";
import { FiSearch } from "react-icons/fi";
import  { useContext } from 'react';
import { MyContext } from "../App";
import { useTranslation } from "react-i18next";

export default function SearchComponent({setId ,id, handleClose}) {
    const {  setData } = useContext(MyContext);
    const { t } = useTranslation();

    const handleChange = (e)=>{
        const {value} = e.target;
        setId(value)
    }

    // Function to fetch data
    const getData = async()=>{
        try{
            const res = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`)
            setData(res.data);
            handleClose(false)
        } catch(error){
            console.error("The Error is  ==> ", Error.error)
        }
    }

	return (
		<div className="search-container">
			<p className="search-p">{t('trackYourCargo')}</p>
            <div className="search">
                <FiSearch className="search-icon" onClick={getData} />
                <input name="id" type="text" placeholder="Cargo ID" onChange={handleChange} />
            </div>
		</div>
	);
}
