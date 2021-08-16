import React, { useState } from "react";
import Layout from "components/Layout";
import "css/style.css";

const Resume = ({ categories }) => {
    return (
        <Layout>
            <div className="resume">
                <h2>Ronak Shah's Resume</h2>
                <div>
                    <iframe
                        src="https://drive.google.com/file/d/1oge99Q-HwnCf7wwneVj3WBvDmiyy57Z2/preview"
                        width="640"
                        height="480"
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </Layout>
    );
};

export default Resume;
