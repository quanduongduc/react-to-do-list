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

    function handleSubmit(event) {
        event.preventDefault();
        setWork((prev) => {
            const deadline = new Date(event.target.deadline.value).toLocaleString();
            const title = event.target.title.value;
            const description = event.target.description.value;
            const id = prev[prev.length - 1] === undefined ? 1 : prev[prev.length - 1].id + 1;
            return [
                ...prev,
                {
                    id,
                    title,
                    description,
                    deadline
                },
            ]
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
            <WorkInput handleSubmit={handleSubmit} />
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