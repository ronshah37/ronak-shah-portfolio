import React, { useState } from "react";

const Video = ({ src, alt, ...attr }) => {
    // State will hold the image url
    const [video, setVideo] = useState(``);

    if (src) {
        import(`img/${src}`).then((image) => setVideo(image.default));
    }

    // return <img src={img ? img : noImg} alt={alt} {...attr} />;
    return (
        <video
            src={video}
            type="video/mp4"
            alt={alt}
            width="320"
            height="240"
            {...attr}
            autoPlay={true}
            muted
            playsInline
            controls
        />
    );
};

export default Video;
