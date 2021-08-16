import React, { useState } from "react";
import Layout from "components/Layout";
import "css/style.css";

const Contact = ({ categories }) => {
    return (
        <Layout>
            <div className="contact-wrapper">
                <h2>You reach me via:</h2>
                <ul>
                    <li>
                        <p>
                            <b> Email: </b> 37ronakshah@gmail.com{" "}
                        </p>
                    </li>
                    <li>
                        <p>Form below</p>
                    </li>
                </ul>
                <div>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSf8e-OMF90-tOrYGRTL_fjmEizgxz4ciER5UL1a1L5AwE_uEQ/viewform?embedded=true"
                        width="640"
                        height="844"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
