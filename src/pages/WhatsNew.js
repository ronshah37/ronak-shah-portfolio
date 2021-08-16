import React, { useState } from "react";
import Layout from "components/Layout";
import "css/style.css";

const WhatsNew = ({ categories }) => {
    return (
        <Layout>
            <div className="whatsnew-wrapper">
                <h2>Things I will be working on:</h2>
                <ul>
                    <li>
                        <p> REST API implementation POC </p>
                    </li>
                    <li>
                        <p> Design Patterns POC</p>
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default WhatsNew;
