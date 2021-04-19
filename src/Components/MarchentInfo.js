import React, { useState, useEffect } from 'react';
import { Form, Input, Button, InputNumber, DatePicker, Upload, Select, Skeleton } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ProfileApi, UpdateInfoApi } from '../service/api_url';
import { GetData, PostData } from '../service/ApiMethods';
import './MarchentInfo.css';

const MarchentInfo = () => {
    const [area, setArea] = useState({
        Country: '',
        District: '',
        City: ''
    });
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [districtApi, setDistrictApi] = useState([]);
    const [country, setCountry] = useState([]);

    const [is_merchent, setismerchent] = useState(false);
    const [userdata, setuserdata] = useState({})

    useEffect(() => {
        GetData(ProfileApi).then(result => {
            // console.log(result)
            if (result.issuccess) {
                let { is_merchent, data } = result.payload
                setismerchent(is_merchent)
                // let d = Object.entries(data)
                setuserdata(data);
                // console.log(data);
            }
        }).catch(e => {
            console.log(e)
        })
        GetData('http://api.mlajan.com:2010/api/address/country').then(result => {
            // console.log(result.payload);
            setCountry(result.payload);
        }).catch(e => {
            console.log(e)
        })
        GetData('http://api.mlajan.com:2010/api/address/city').then(result => {
            setCity(result.payload);
            // console.log(result.payload);
        }).catch(e => {
            console.log(e)
        })
        GetData('http://api.mlajan.com:2010/api/address/district').then(result => {
            // console.log(result.payload);
            setDistrict(result.payload);
            setDistrictApi(result.payload);
        }).catch(e => {
            console.log(e)
        })
    }, []);


    const onDistrictChange = (value) => {
        const newArea = { ...area }
        newArea.District = value;
        setArea(newArea);
    };
    const onCityChange = (value) => {
        const filteredDistrict = districtApi.filter((x) => x.City_Id === value);
        setDistrict(filteredDistrict);
        const newArea = { ...area }
        newArea.City = value;
        setArea(newArea);
    };
    const onCountryChange = (value) => {
        const newArea = { ...area }
        newArea.Country = value;
        setArea(newArea);
    };
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const onFinish = (values) => {
        const updatedData = { ...values, ...area }
        console.log('Success:', updatedData)
        const { Merchant_Name, Account_Contact_Email, Bank_Address, Business_Contact_Email, Communice, Street_House_No, Technical_Contact_Email, Account_Contact_Mobile, Account_Contact_Name, Account_Contact_Phone, Bank_Account_No, Bank_Branch_Code, Bank_Code, Bank_Swift_Code, Business_Contact_Mobile, Business_Contact_Name, Business_Contact_Phone, ID_Back_Image, ID_Expiry_Date, ID_Front_Image, ID_Image, ID_Issue_Date, ID_Number, Latitude, License_Image, License_No, Logo_Image, Longitude, Report_Email, Technical_Contact_Mobile, Technical_Contact_Name, Technical_Contact_Phone, Website, City, Country, District } = updatedData;
        
        PostData(UpdateInfoApi, { Merchant_Name, Account_Contact_Email, Bank_Address, Business_Contact_Email, Communice, Street_House_No, Technical_Contact_Email, Account_Contact_Mobile, Account_Contact_Name, Account_Contact_Phone, Bank_Account_No, Bank_Branch_Code, Bank_Code, Bank_Swift_Code, Business_Contact_Mobile, Business_Contact_Name, Business_Contact_Phone, ID_Back_Image, ID_Expiry_Date, ID_Front_Image, ID_Image, ID_Issue_Date, ID_Number, Latitude, License_Image, License_No, Logo_Image, Longitude, Report_Email, Technical_Contact_Mobile, Technical_Contact_Name, Technical_Contact_Phone, Website, City, Country, District }, "json")
            .then(result => {
                console.log(result);
                alert('Info UPdated!');
            }).catch(err => {
                console.log(err.config.data)
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container">
            <h1>Merchant User Info</h1>
            <hr />
            {userdata.Merchant_Name ? <Form name="basic" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} >
                <div className="row">
                    <div className="col-md-6 col-divider">
                        <Form.Item label="Merchant_Name" name="Merchant_Name" initialValue={userdata.Merchant_Name}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Id_Issued_Place" name="Id_Issued_Place" initialValue={userdata.Id_Issued_Place}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Merchant_Nature" name="Merchant_Nature" initialValue={userdata.Merchant_Nature}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Wallet_Type" name="Wallet_Type" initialValue={userdata.Wallet_Type}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="ID_Number" name="ID_Number">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="ID_Issue_Date" name="ID_Issue_Date">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="ID_Expiry_Date" name="ID_Expiry_Date">
                            <DatePicker />
                        </Form.Item>

                        <Form.Item name="ID_Image" label="ID_Image" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload name="ID_Image" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item label="License_No" name="License_No">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item name="License_Image " label="License_Image" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload name="License_Image" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item label="Website " name="Website ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Report_Email  " name="Report_Email  ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Email  " name="Email  ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Bank_Code" name="Bank_Code" initialValue={userdata.Acc_Code}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Bank_Code!',
                                },
                            ]}>
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="Bank_Account_No" name="Bank_Account_No" initialValue={userdata.Bank_Account_No}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Bank_Account_No!',
                                },
                            ]}>
                            <InputNumber />
                        </Form.Item>

                        <Form.Item name="Logo_Image " label="Logo_Image" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload name="Logo_Image" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item label="City">
                            <Select onChange={onCityChange}>
                                {city.map((x, index) => <Select.Option key={index} value={x.City_Id}>{x.City_Name_English}</Select.Option>)}
                            </Select>
                        </Form.Item>

                        {area.city ? <Form.Item label="District">
                            <Select onChange={onDistrictChange}>
                                {district.map((x, index) => <Select.Option key={index} value={x.District_Id}>{x.District_Name_English}</Select.Option>)}
                            </Select>
                        </Form.Item> : ''}

                        <Form.Item label="Country">
                            <Select onChange={onCountryChange}>
                                {country.map((x, index) => <Select.Option key={index} value={x.Country_Id}>{x.Country_Name}</Select.Option>)}
                            </Select>
                        </Form.Item>

                        <Form.Item label=" Bank_Address   " name=" Bank_Address   ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Bank_Swift_Code" name="Bank_Swift_Code">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="Bank_Branch_Code" name="Bank_Branch_Code" initialValue={userdata.Branch_Code}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Bank_Branch_Code!',
                                },
                            ]}>
                            <InputNumber />
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item label="Business_Contact_Name  " name="Business_Contact_Name  " initialValue={userdata.Business_Contact_Name}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Business_Contact_Name !',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Business_Contact_Mobile" name="Business_Contact_Mobile" initialValue={userdata.Business_Contact_Mobile}>
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="Business_Contact_Phone" name="Business_Contact_Phone">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label=" Business_Contact_Email   " name=" Business_Contact_Email   ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Technical_Contact_Name  " name="Technical_Contact_Name  ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Technical_Contact_Mobile" name="Technical_Contact_Mobile">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="Technical_Contact_Phone" name="Technical_Contact_Phone">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label=" Technical_Contact_Email   " name=" Technical_Contact_Email   ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Account_Contact_Name  " name="Account_Contact_Name  ">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Account_Contact_Mobile" name="Account_Contact_Mobile">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="Account_Contact_Phone" name="Account_Contact_Phone">
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label=" Account_Contact_Email   " name=" Account_Contact_Email   ">
                            <Input />
                        </Form.Item>

                        <Form.Item name="ID_Front_Image" label="ID_Front_Image" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload name="ID_Front_Image" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item name="ID_Back_Image" label="ID_Back_Image" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload name="ID_Back_Image" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item label="Latitude" name="Latitude" initialValue={40.7128}>
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label="Longitude" name="Longitude" initialValue={74.0060}>
                            <InputNumber />
                        </Form.Item>

                        <Form.Item label=" Communice   " name=" Communice   " initialValue={userdata.Communice}>
                            <Input />
                        </Form.Item>

                        <Form.Item label=" Street_House_No   " name=" Street_House_No   " initialValue={userdata.Street_House_No}>
                            <Input />
                        </Form.Item>
                    </div>
                </div >
                <Form.Item>
                    <Button className="w-100" type="primary" htmlType="submit"> Submit</Button>
                </Form.Item>
            </Form> : <div><Skeleton active /><Skeleton active /><Skeleton active /></div>}
        </div >
    );
};

export default MarchentInfo;