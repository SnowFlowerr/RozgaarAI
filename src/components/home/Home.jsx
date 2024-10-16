import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../profile/Profile';

export default function Home() {
    const [selectedFile, setSelectedFile] = useState(null);
    // const [data, setData] = useState({});
    const [extractedData, setExtractedData] = useState([{prediction:[]}]);
    const sign = useSelector((state) => state.sign.value)
    const navigate=useNavigate()
    
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const scanPdfForSpecificData = async () => {
        if (!selectedFile) {
            alert("Please select a PDF file to scan.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post(
                'https://app.nanonets.com/api/v2/OCR/Model/7065502f-6edf-44fa-a463-9249b80e4472/LabelFile/',
                formData,
                {
                    headers: {
                        'Authorization': 'Basic ' + btoa('943d2958-8927-11ef-9d9b-72f1edabb222' + ':'),
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.data.result && response.data.result.length > 0) {
                setExtractedData(response.data.result); // Display extracted data
                const d=response.data.result[0].prediction
                // console.log(response.data.result[0].prediction)
                let obj={}
                for(let i=0;i<d.length;i++){
                    obj[`${d[i].label}`]=`${d[i].ocr_text}`
                }
                // setData(()=>obj)
                currentUser(obj)
                console.log(response.data.result)
            } else {
                alert("No specific data was extracted. Please check the PDF file.");
            }
        } catch (error) {
            console.error("Error extracting specific data from PDF:", error.response.data);
        }
    };
        async function currentUser(data) {
          try {
                const userD = await axios.put(`http://localhost:8000/api/users/update`,{name:data.Name,email:data.Email,phone:data.Phone,accademinDet:data?.Bachelor,collegeName:data.Education,project1:data.Project_1,project2:data.Project_2},
                    { withCredentials: true }
                )
            }
            catch (err) {
                
                // localStorage.removeItem("userData")
                console.log(err)
            }
        }
    return (
        <div>
            <button onClick={currentUser}>btt</button>
            <h1>Scan PDF for Specific Data</h1> {!sign&&<button onClick={()=>navigate("/signin")}>signin</button>}
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={scanPdfForSpecificData}>Scan PDF</button>
            {/* {JSON.stringify(data)} */}
            <pre>
                {extractedData[0].prediction.map((ele,ind)=>
                    <div key={ind}>
                        {ele.label} : {ele.ocr_text}
                    </div>
                )}
            </pre>
            {JSON.stringify(sign)}


            <div>
      {/* <img src={sign.img} alt="" width={"40px"} height={"40px"}/> */}
    </div>

        </div>
    );
}




