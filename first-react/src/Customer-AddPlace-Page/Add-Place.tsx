import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Add-Place.css'

import React, { useState } from 'react';

function AddPlace() {
    const [selectedProvince, setSelectedProvince] = useState("SELECT PROVINCE");

    const handleProvinceSelect = (province: any) => {
        setSelectedProvince(province);
    };

    return (

        <div className="container bg-image">

            <div className='body'>
                <div className="dropdown">
                    <label htmlFor="" id='cardID'>Card ID</label>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedProvince}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" id="drpProvince">
                        <li><a className="dropdown-item active" href="#" onClick={() => handleProvinceSelect("CENTRAL PROVINCE")}>CENTRAL PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("EASTERN PROVINCE")}>EASTERN PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("NORTH CENTRAL PROVINCE")}>NORTH CENTRAL PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("NORTHERN PROVINCE")}>NORTHERN PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("NORTH WESTERN PROVINCE")}>NORTH WESTERN PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("SABARAGAMUWA PROVINCE")}>SABARAGAMUWA PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("SOUTHERN PROVINCE")}>SOUTHERN PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("UVA PROVINCE")}>UVA PROVINCE</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => handleProvinceSelect("WESTERN PROVINCE")}>WESTERN PROVINCE</a></li>
                    </ul>
                </div>
                <div className='row1 row'>
                    <div className='col-3'>
                        <label htmlFor="placeName">Input Name of the Place</label>
                    </div>
                    <div className="col-7">
                        <div className="input-group mb-3">
                            <span className="input-text input-text" id="txt"></span>
                            <input type="text" className="form-control" id="placeName" placeholder="eg : Sigiriya Rock" aria-label="Username" />
                        </div>
                    </div>
                </div>

                <div className='row1 row'>
                    <div className='col-3'>
                        <label htmlFor="placeName">Add Description About the Place</label>
                    </div>
                    <div className="col-7">
                        <div className="input-group mb-3">
                            <span className="input-text"></span>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </div>

                <div className='row1 row'>
                    <div className='col-3'>
                        <label htmlFor="placeName">Add Image of the Place</label>
                    </div>
                    <div className="col-7">
                        <div className="mb-3">
                            <input className="form-control" type="file" id="imgPlace"/>
                        </div>

                    </div>
                </div>

            </div>
            <div className='col-10'><button type="button" id='btnAddPlace' className="btn btn-primary">Add Place</button></div>

        </div>


    );
}

export default AddPlace;
