import React, { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import { useSelector } from 'react-redux'
import Resume from "./Bhudeo's Resume.pdf"
import axios from 'axios'

export default function Profile() {
    const sign = useSelector((state) => state.sign.value)
    const [userData,setUserData]=useState({name:"",email:"",phone:"",academic:"",college:"",linkedin:"",github:"",leetcode:"", passingYear:""})
    useEffect(()=>{
        setUserData({name:sign.name,email:sign.email,phone:sign.phone,academic:sign.accademinDet,college:sign.collegeName,linkedin:sign.linkedin,github:sign.github,passingYear:sign.passingYear,leetcode:sign.leetcode})
    },[sign])

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const userD = await axios.put(`http://localhost:8000/api/users/update`,{name:userData.name,email:userData.email,phone:userData.phone,accademinDet:userData?.academic,collegeName:userData.college,linkedin:userData.linkedin,github:userData.github,passingYear:userData.passingYear,leetcode:userData.leetcode},
                { withCredentials: true }
            )
            // console.log(userD.data)
        }
        catch (err) {
            
            // localStorage.removeItem("userData")
            console.log(err)
        }
    }
    function handleCancel(e){
        e.preventDefault()
    }
    function handleChange(e){
        e.preventDefault()
        setUserData({...userData,[e.target.name]:e.target.value})
    }
    // let url="https://res.cloudinary.com/dl5gqrtf0/image/upload/v1729070059/resume/ucrx2heysdmuku7axfr7.pdf"
    return (
        <div className={styles.main}>
            <div style={{color:"white"}}>
                <img src={sign.resume?.substring(0,sign.resume.length-3)+"jpg"} width="100%" />
                
            </div>
            <div className={styles.editProfile}>
                <div>
                    <h1>Edit Your Profile</h1>
                </div>
                <div>
                    <form action="" className={styles.formData}>
                        <div>
                            <input type="text" placeholder='Enter Your Name' name='name' value={userData.name} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="email" placeholder='Enter Your Email' name='email' value={userData.email} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Your Phone Number' name='phone' value={userData.phone} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Your Academic Details' name='academic' value={userData.academic} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Your College Name' name='college' value={userData.college} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Your Passing Year' name='passingYear' value={userData.passingYear} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Your LinkedIn Profile' name='linkedin' value={userData.linkedin} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Your Github Profile' name='github' value={userData.github} onChange={handleChange}/>
                        </div>
                        <div>
                            <input type="text" placeholder='Enter Your LeetCode Profile' name='leetcode' value={userData.leetcode} onChange={handleChange}/>
                        </div>
                        <div className={styles.btns}>
                            <button onClick={handleCancel}>Cancel</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
