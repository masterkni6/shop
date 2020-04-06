import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Brands = [
    { key: 1, value: "Apple" },
    { key: 2, value: "Google" },
    { key: 3, value: "Samsung" },
    { key: 4, value: "HTC" },
    { key: 5, value: "Sony" },
    { key: 6, value: "OnePlus" },
    { key: 7, value: "Other" }
];

function UploadProductPage(props) {
    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [BrandValue, setBrandValue] = useState(1);
    const [AmountValue, setAmountValue] = useState(1);

    const [Images, setImages] = useState([]);

    const onTitleChange = event => {
        setTitleValue(event.currentTarget.value);
    };

    const onDescriptionChange = event => {
        setDescriptionValue(event.currentTarget.value);
    };

    const onPriceChange = event => {
        setPriceValue(event.currentTarget.value);
    };

    const onQtyChange = event => {
        setAmountValue(event.currentTarget.value);
    };

    const onBrandsSelectChange = event => {
        setBrandValue(event.currentTarget.value);
    };

    const updateImages = newImages => {
        setImages(newImages);
    };
    const onSubmit = event => {
        event.preventDefault();

        if (!TitleValue || !DescriptionValue || !PriceValue || !BrandValue || !Images || !AmountValue) {
            return alert("fill all the fields first!");
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            quantity: AmountValue,
            images: Images,
            brands: BrandValue
        };

        Axios.post("/api/product/uploadProduct", variables).then(response => {
            if (response.data.success) {
                alert("Product Successfully Uploaded");
                props.history.push("/");
            } else {
                alert("Failed to upload Product");
            }
        });
    };

    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>

            <Form onSubmit={onSubmit}>
                {/* DropZone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Title</label>
                <Input onChange={onTitleChange} value={TitleValue} />
                <br />
                <br />
                <label>Description</label>
                <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
                <br />
                <br />
                <label>Price($)</label>
                <Input onChange={onPriceChange} value={PriceValue} type="number" />
                <br />
                <label>Quantity</label>
                <Input onChange={onQtyChange} value={AmountValue} type="number" />
                <br />
                <br />
                <select onChange={onBrandsSelectChange}>
                    {Brands.map(item => (
                        <option key={item.key} value={item.key}>
                            {item.value}{" "}
                        </option>
                    ))}
                </select>
                <br />
                <br />

                <Button onClick={onSubmit}>Submit</Button>
            </Form>
        </div>
    );
}

export default UploadProductPage;
