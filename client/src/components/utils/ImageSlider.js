import React from "react";
import { Carousel } from "antd";

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <div key={index} style={{ width: "150px", maxHeight: "200px" }}>
                        <img
                            style={{
                                width: "150px",
                                height: "150px",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                            src={`/${image}`}
                            alt="productImage"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageSlider;
