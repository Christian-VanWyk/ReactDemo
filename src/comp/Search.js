import { useState } from "react";
import Model from "../comp/AboutModel";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Search({ modelData, onValueChange, categories }) {
    const [newSearch, setNewSearch] = useState("");
    
    function submit(val) {
        setNewSearch(val);
        onValueChange(val);
    }

    return (
        <>
            <div className="mb-4 form-group">
                <div className="d-flex justify-content-between">
                    <input onChange={e => submit(e.target.value)} value={newSearch} className="form-control" type="text" id="catSearch" placeholder="Category Search" />
                    <span className="divider"></span>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="cat-dropdown">
                            Categories
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="custom-dropdown-menu">
                            <Dropdown.Item active={newSearch === ""} key="default" onClick={() => submit('')}>All</Dropdown.Item>
                            {categories.length && categories.map((item, index) => (
                                <Dropdown.Item active={newSearch && newSearch === item} key={index} onClick={() => submit(item)}>{item}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <span className="divider"></span>
                    <Model modelData={modelData}/>
                </div>
            </div>
        </>
    );
}