import React, { useState } from "react";
import Layout from "components/Layout";
import "css/style.css";
import WorkList from "components/WorkList";

const Work = ({ categories }) => {
    let xdWork = [
        {
            id: 0,
            title: "Fast Grocery App UX Design",
            description:
                "This UX design helps understand the functionalities and how it is going to be used.",
            workAltText: "Fast Grocery App UX Design Image",
            workSourcePath: "work/xd/FastGrocery_Categories.jpg",
            workType: "Image",
        },
        {
            id: 1,
            title: "UI Kit for Fast Grocery App",
            description: "This helps us standardize the usage of components.",
            workAltText: "UI Kit Image",
            workSourcePath: "work/xd/UIKit_Buttons_and_Icons.jpg",
            workType: "Image",
        },
        {
            id: 2,
            title: "Mood/ Theme Board",
            description: "This helps us understand different options.",
            workAltText: "Mood board Image",
            workSourcePath: "work/xd/Theme_Board.jpg",
            workType: "Image",
        },
        {
            id: 3,
            title: "User Persona",
            description:
                "User persona helps understand the point of view of the user.",
            workAltText: "User Persona Image",
            workSourcePath: "work/xd/persona.jpg",
            workType: "Image",
        },
    ];

    let illustratorWork = [
        {
            id: 0,
            title: "Chole Batura Shop Logo",
            description:
                "This logo is designed for a shop which primarily sells famous Indian delicacy 'Chole Batura'.",
            workAltText: "Chole Batura Shop Logo Image",
            workSourcePath: "work/illustrator/CholeBatura_Final.jpg",
            workType: "Image",
        },
        {
            id: 1,
            title: "Banner for Adobe Illustrator",
            description:
                "This banner is used when the application is initializing.",
            workAltText: "Illustrator Banner Image",
            workSourcePath: "work/illustrator/Banner_project.jpg",
            workType: "Image",
        },
        {
            id: 2,
            title: "General UI webkit example",
            description: "This webkit can be used for customized website.",
            workAltText: "UI Webkit Image",
            workSourcePath: "work/illustrator/UI-Web-Kit.jpg",
            workType: "Image",
        },
    ];

    let photoshopWork = [
        {
            id: 0,
            title: "Fast Grocery Website Prototype in Photoshop",
            description:
                "This image shows the prototype for Fast Grocery website. they are designed in accordance to website metrics and all assets can be exported from photoshop to be used as it is.",
            workAltText: "Fast Grocery Website Prototype Image",
            workSourcePath: "work/photoshop/FastGrocery_Website_Prototype.png",
            workType: "Image",
        },
        {
            id: 1,
            title: "Facebook Advertisement for Fast Grocery",
            description:
                "This image shows how all the features of an application can be easily demonstrated in a facebook ad developed in Photoshop.",
            workAltText: "Facebook Advertisement Image",
            workSourcePath: "work/photoshop/FastCart_Facebook_Ad.jpg",
            workType: "Image",
        },
        {
            id: 2,
            title: "Fast Grocery GIF",
            description:
                "This gif can be used to show offers or for general advertisement.",
            workAltText: "Fast Grocery GIF",
            workSourcePath: "work/photoshop/FastGrocery_Final.gif",
            workType: "Image",
        },
    ];

    let aeWork = [
        {
            id: 0,
            title: "Fast Grocery App Shopping Usecase GIF",
            description:
                "This GIF helps user understand the usage of app within matter of seconds.",
            workAltText: "Fast Grocery App GIF",
            workSourcePath: "work/ae/FastFrocery_ConceptAnimation_v04.gif",
            workType: "Image",
        },
        {
            id: 1,
            title: "SpaceX GIF",
            description: "This GIF showcases a sample for SpaceX.",
            workAltText: "SpaceX GIF",
            workSourcePath: "work/ae/SpaceX.gif",
            workType: "Image",
        },
        {
            id: 2,
            title: "Logo Reveal Example",
            description:
                "Logo reveal helps launching a new brand into the market.",
            workAltText: "Logo Reveal Video",
            workSourcePath: "work/ae/LogoReveal_v03.mp4",
            workType: "Video",
        },
        {
            id: 3,
            title: "Kinetic Typography used for PSA",
            description:
                "This technique helps spread message for a particular subject in seconds.",
            workAltText: "Kinetic Typography Video",
            workSourcePath: "work/ae/Kinetic_Typography.mp4",
            workType: "Video",
        },
    ];

    return (
        <Layout>
            <div>
                <div className="work-page-wrapper">
                    <div className="work-example">
                        <h2> Examples of XD</h2>
                        <WorkList items={xdWork} />
                    </div>
                    <div className="work-example">
                        <h2> Examples of Illustrator</h2>
                        <WorkList items={illustratorWork} />
                    </div>
                    <div className="work-example">
                        <h2> Examples of Photoshop</h2>
                        <WorkList items={photoshopWork} />
                    </div>
                    <div className="work-example">
                        <h2> Examples of After Effects</h2>
                        <WorkList items={aeWork} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Work;
