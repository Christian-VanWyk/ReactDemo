import { useState } from "react";
import Model from "../comp/AboutModel";

export default function Search({ modelData, onValueChange }) {
    const [newSearch, setNewSearch] = useState("");

    function submit(val) {
        setNewSearch(val);
        onValueChange(val); // Call the function passed from the parent
    }

    return (
        <>
            <div className="mb-4 form-group">
                <div className="d-flex justify-content-between">
                    <input onChange={e => submit(e.target.value)} value={newSearch} className="form-control" type="text" id="catSearch" placeholder="Category Search" />
                    <span className="divider"></span>
                    <Model modelData={modelData}/>
                </div>
            </div>
        </>
    );
}