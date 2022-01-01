import React, { useState, useEffect } from "react";
import Work from "./Work";
import WorkInput from "./WorkInput";

function ToDoList() {
    const [works, setWork] = useState([]);

    // Get works from local storage when component mounted firstly
    useEffect(() => {
        if (localStorage.getItem("works")) {
            setWork(JSON.parse(localStorage.getItem("works")))
        }
    }, [])

    // Save list work to local storage when works change
    useEffect(() => {
        localStorage.setItem("works", JSON.stringify(works));
    }, [works])

    function handleRemoveWork(removeId) {
        setWork((prev) => {
            return prev.filter((work) => {
                return work.id !== removeId;
            });
        })
    }

    function sortWork() {
        setWork((prev) => {
            const sorted = [...prev];
            sorted.sort((a, b) => {
                return new Date(a.deadline) - new Date(b.deadline);
            })
            return sorted;
        })
    }

    return (
        <React.Fragment>
            <WorkInput setWork={setWork} />
            <div className="list-works">
                <button className="btn-sort" onClick={sortWork}>Sort By Time</button>
                {works.map((work, index) => {
                    return <Work key={index} work={work} handleRemove={handleRemoveWork} />
                })}
            </div>
        </React.Fragment>
    );
}

export default ToDoList;