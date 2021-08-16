import React from "react";
import Image from "components/Image";
import Video from "components/Video";

const WorkItem = ({ key, item }) => {
    let work;
    if (item.workType === "Image") {
        work = (
            <Image
                src={item.workSourcePath}
                alt={item.workAltText}
                className="workitem-img"
            />
        );
    } else if (item.workType === "Video") {
        work = <Video src={item.workSourcePath} alt={item.workAltText} />;
    }
    return (
        <div className="workitem-wrapper">
            <div className="workitem">
                <div className="workitem-work-wrapper">
                    {work}
                    <p>
                        <b> Note: </b> Open in new tab to see in original size.
                    </p>
                </div>
                <div className="workitem-content">
                    <h3> {item.title} </h3>
                    <p> {item.description} </p>
                </div>
            </div>
        </div>
    );
};

export default WorkItem;
