import React from "react";
import WorkItem from "components/WorkItem";

const WorkList = ({ items }) => {
    const workSummary = items.map((item) => (
        <WorkItem key={item.id} item={item} />
    ));
    return (
        <div className="worklist-wrapper">
            <section className="worklist">{workSummary}</section>
        </div>
    );
};

export default WorkList;
