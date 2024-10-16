import React from 'react';
import Card from './Card';
import Logo from "../assets/Logo.png"
function Jobs() {
  const cardData = [
    {
      title: "Amazon",
      subtitle: "Required 3-4 years of expeiences",
      description: "Software Developer",
      stipend: "25-30 Lakhs",
      discountText: "Delhi",
      imageUrl: "https://pngimg.com/uploads/amazon/amazon_PNG5.png" // Replace with actual image URL
    },
    {
      title: "Google",
      subtitle: "Required 3-4 years of expeiences",
      description: "Software Developer",
      discountText: "Mumbai",
      imageUrl: "https://pngimg.com/uploads/google/google_PNG19635.png" // Replace with actual image URL
    },
    {
      title: "Wallmart",
      subtitle: "Required 3-4 years of expeiences",
      description: "Software Developer",
      newPrice: "",
      oldPrice: "",
      discountText: "Delhi",
      imageUrl: "https://th.bing.com/th/id/OIP.yvIZVXOSEsOixw6eZxQndQAAAA?rs=1&pid=ImgDetMain" // Replace with actual image URL
    },
    {
      title: "Microsoft",
      subtitle: "Required 3-4 years of expeiences",
      description: "Software Developer",
      newPrice: "",
      oldPrice: "",
      discountText: "Pune",
      imageUrl: "https://th.bing.com/th/id/R.ceaf8384322af790486cff176a0a2f24?rik=miqL9LHAiG2FBQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fmicrosoft%2f28350-5-microsoft-logo-photos.png&ehk=gLNeUUMG1tz9FSTh4v1gEOdCeSICRm2gC8CoPEk9eU0%3d&risl=&pid=ImgRaw&r=0" // Replace with actual image URL
    }
  ];

  const jobsData=[
      
      {
        "_id": {
          "$oid": "670d06b5ccebf1981626ead7"
        },
        "title": "Research Analyst",
        "link": "https://mordorintelligence.darwinbox.in/ms/candidate/careers/a66bf35db2370f",
        "company": "Mordor Intelligence",
        "location": "Rangareddy",
        "experience": "2-5 Yrs",
        "salary": "Not disclosed",
        "date_updated": "3 Days Ago",
        "imageUrl":"https://pbs.twimg.com/profile_images/1438400102226227200/3njgcQHD_400x400.png"
      },
      {
        "_id": {
          "$oid": "670d06b5ccebf1981626ead8"
        },
        "title": "Team Leader",
        "link": "https://www.naukri.com/job-listings-team-leader-verdant-bioagri-llp-bagalkot-1-to-3-years-111024009197",
        "company": "No company found",
        "location": "Bagalkot",
        "experience": "1-3 Yrs",
        "salary": "Not disclosed",
        "date_updated": "3 Days Ago",
        "imageUrl":"data:image/jpeg;base64,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"
      },
      {
        "_id": {
          "$oid": "670d06b5ccebf1981626ead9"
        },
        "title": "Hiring EDI Support Analyst For Garmin (Product Development company)!",
        "link": "https://www.naukri.com/job-listings-hiring-edi-support-analyst-for-garmin-product-development-company-garmin-hyderabad-5-to-10-years-111024006137",
        "company": "Garmin",
        "location": "Hybrid - Hyderabad",
        "experience": "5-10 Yrs",
        "salary": "Not disclosed",
        "date_updated": "3 Days Ago",
        "imageUrl":"https://th.bing.com/th/id/OIP.yvIZVXOSEsOixw6eZxQndQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "_id": {
          "$oid": "670d06b4ccebf1981626ead5"
        },
        "title": "Android Engineer (Remote)- B2B Software Product Company",
        "link": "https://www.naukri.com/job-listings-android-engineer-remote-b2b-software-product-company-fieldcircle-noida-1-to-4-years-240824010079",
        "company": "No company found",
        "location": "Remote",
        "experience": "1-4 Yrs",
        "salary": "Not disclosed",
        "date_updated": "Just Now",
        "imageUrl":"https://pngimg.com/uploads/amazon/amazon_PNG5.png"
      },
      {
        "_id": {
          "$oid": "670d06b5ccebf1981626eadb"
        },
        "title": "Product QA Specialist | Marketplace Specialist",
        "link": "https://www.naukri.com/job-listings-product-qa-specialist-marketplace-specialist-bayone-techno-bengaluru-5-to-7-years-091024009339",
        "company": "Bayone Techno",
        "location": "Remote",
        "experience": "5-7 Yrs",
        "salary": "Not disclosed",
        "date_updated": "5 Days Ago",
        "imageUrl":"https://th.bing.com/th/id/OIP.yvIZVXOSEsOixw6eZxQndQAAAA?rs=1&pid=ImgDetMain"
      },
      {
        "_id": {
          "$oid": "670d06b5ccebf1981626eae8"
        },
        "title": "Tech Business Correspondent",
        "link": "https://www.naukri.com/job-listings-tech-business-correspondent-medianama-new-delhi-2-to-4-years-091024502712",
        "company": "No company found",
        "location": "New Delhi",
        "experience": "2-4 Yrs",
        "salary": "Not disclosed",
        "date_updated": "4 Days Ago",
        "imageUrl":"https://pngimg.com/uploads/google/google_PNG19635.png"
      },
      {
        "_id": {
          "$oid": "670d06b5ccebf1981626eae7"
        },
        "title": "QA,QC ,R&D ,ARD , FRD, RA ,CRA ,PV , Production In Pharma Company",
        "link": "https://www.naukri.com/job-listings-qa-qc-r-d-ard-frd-ra-cra-pv-production-in-pharma-company-re-navi-mumbai-pune-0-to-4-years-071024017549",
        "company": "No company found",
        "location": "Navi Mumbai, Pune",
        "experience": "0-4 Yrs",
        "salary": "1.75-3.75 Lacs PA",
        "date_updated": "7 Days Ago",
        "imageUrl":"https://th.bing.com/th/id/R.ceaf8384322af790486cff176a0a2f24?rik=miqL9LHAiG2FBQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fmicrosoft%2f28350-5-microsoft-logo-photos.png&ehk=gLNeUUMG1tz9FSTh4v1gEOdCeSICRm2gC8CoPEk9eU0%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        "_id": {
          "$oid": "670d06b5ccebf1981626eae3"
        },
        "title": "Quality Auditing Associate",
        "link": "https://www.naukri.com/job-listings-quality-auditing-associate-accenture-solutions-pvt-ltd-bengaluru-1-to-3-years-071024909089",
        "company": "Accenture",
        "location": "Bengaluru",
        "experience": "1-3 Yrs",
        "salary": "Not disclosed",
        "date_updated": "7 Days Ago",
        "imageUrl":"https://th.bing.com/th/id/OIP.yvIZVXOSEsOixw6eZxQndQAAAA?rs=1&pid=ImgDetMain"
      }
  ]

  return (
    <div>
      <div className="App">
      <div className="card-container">

        {jobsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.experience}
            stipend={card.salary}
            discountText={card.location}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </div>
      
    </div>
    </div>
  );
}

export default Jobs;
