import React, { useEffect, useState } from 'react';
import Card from './Card';
import Logo from "../assets/Logo3.png"
import axios from 'axios';
function Jobs() {
    const [jobsData, setJobdata] = useState([])
    

    useEffect(() => {
        currentUser()
    }, [])

    async function currentUser() {
        try {
            const userD = await axios.get(`http://localhost:8000/api/naukri/get`,
                { withCredentials: true }
            )
            setJobdata(userD.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className="App">
                <div className="card-container">

                    {jobsData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            subtitle={card.subtitle}
                            company={card.company}
                            matchScore={Math.floor(Math.random(100)*100)}
                            description={card.experience}
                            stipend={card.salary}
                            location={card.location}
                            imageUrl={card.company_image === "No company image" ? Logo : card.company_image}
                            link={card.link}
                            id={card._id}
                        />
                    ))}
                </div>

                
            </div>
        </div>
    );
}

export default Jobs;
