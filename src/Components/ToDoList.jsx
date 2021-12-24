import React, { useState, useEffect } from "react";
import Work from "./Work";
import WorkInput from "./WorkInput";

function ToDoList() {
    let [works, setWork] = useState([]);
    const workStorage = window.localStorage;

    // Get works from local storage when component mounted firstly

    useEffect(() => {
        if (workStorage.getItem("works")) {
            setWork(JSON.parse(workStorage.getItem("works")))
        }
        // eslint-disable-next-line
    }, [])

    // Save list work to local storage when works change
    useEffect(() => {
        workStorage.setItem("works", JSON.stringify(works));
        // eslint-disable-next-line
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
            const newId = prev[prev.length - 1] === undefined ? 1 : prev[prev.length - 1].id + 1;
            return [
                ...prev,
                {
                    id: newId,
                    tilte: event.target.name.value,
                    description: event.target.description.value,
                    deadline: event.target.deadline.value
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