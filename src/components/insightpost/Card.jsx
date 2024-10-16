import React, { useState } from 'react'
import styles from "./InsightPost.module.css"
import { useSelector } from 'react-redux'
import Progress from '../progress/Progress'

export default function Card({ email, photo, linkedin, match }) {
    const sign = useSelector((state) => state.sign.value)
    const [display, setDisplay]=useState(false)
    return (
        <div className={display?styles.box2:styles.box}>
            <div className={display?styles.main2:styles.main}>
            <img src={photo} alt="img"  onClick={()=>setDisplay(true)}/>
            <div className={styles.btns}>
                <div className={styles.match}>
                    <span className={styles.prog}><Progress progress={match}/></span>
                    {display && <button onClick={()=>setDisplay(false)}>Close</button>}
                    
                </div>
                <div>
                <a href={linkedin} target='_blank'><button>
                    {/* <i class="fa-brands fa-linkedin"></i> */}
                Connect</button></a>
                <a href={`mailto:${email}
        ?subject=Application for <Job Title> Position
&body=Dear <Recruiter Name>, %0D%0A
%0D%0A
I hope this email finds you well. My name is <Your Name>, and I am reaching out to express my interest in the <Job Title> position at <Company Name>. With <number of years> years of experience in <your field/industry>, I believe my skills in <specific skills> make me a strong candidate for this role.%0D%0A
%0D%0A
Attached to this email, you will find my resume, which provides additional details about my background, experience, and accomplishments. I would greatly appreciate the opportunity to discuss how I can contribute to <Company Name> as part of your team.%0D%0A
%0D%0A
Thank you for considering my application. I look forward to your response.%0D%0A
%0D%0A
Sincerely,%0D%0A
${sign?.name} %0D%0A
${sign?.email} %0D%0A
${sign?.phone} %0D%0A

        `} target='_blank'><button><i class="fa-solid fa-envelope"></i> Mail Us</button></a>
            </div>
            </div>
            </div>
        </div>
    )
}
