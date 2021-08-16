import React, { useState } from "react";
import Layout from "components/Layout";
import Image from "components/Image";
import "css/style.css";

const Home = ({ categories }) => {
    return (
        <Layout>
            <div className="about-wrapper">
                <div>
                    <Image
                        src="personal/Photo_Ronak_Shah.jpg"
                        alt="Ronak Shah Photo"
                        className="about-picture"
                    />
                </div>
                <div className="about-content">
                    <h2> About me</h2>
                    <p>
                        Hi everyone! I am Ronak Shah. I have graduated from
                        Mumbai University in th year 2016 with Bachelors in
                        Information Technology(B.E.I.T.). Post graduation, I
                        have worked as an Application Developer (2) with Oracle
                        Financial Services Software Ltd. (OFSS) for 4.6 years. I
                        will soon complete my post graduate certification
                        program in 'Web Design and Development' from Humber
                        College. I have always made an attempt to do better
                        things in both personal and professional life. That is
                        why I have been pro-active and a learner in everything I
                        like to do. To know more about me, you can see my
                        resume, work and things I will be working on, in their
                        respective pages.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
