import React from 'react'
import styles from "./InsightPost.module.css"
import Card from './Card'
import jobArray from './jobArray'

export default function InsightPost() {
    return (
        <div className={styles.mainBox}>
            {
                jobArray.map((element, index)=>
                    <Card email={element.email} photo={element.img} match={element.match} linkedin={element.linkedin} key={index}/>
                )
                
            }
        </div>
    )
}
