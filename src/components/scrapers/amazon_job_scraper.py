from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set up MongoDB connection
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(os.getenv('MONGO_URI'))
db = client[os.getenv('MONGO_DB_NAME')]

# Define a list of platforms to scrape with customizable fields and class structures
platforms = [
    {
        'url': "https://www.naukri.com/listed-companies-jobs?jobPostType=1&functionAreaIdGid=3&functionAreaIdGid=4&functionAreaIdGid=5&functionAreaIdGid=8&functionAreaIdGid=13&jobAge=7",
        'collection_name': 'naukri_jobs',
        'fields': {
            'job_card': {'tag': 'div', 'class': 'cust-job-tuple layout-wrapper lay-2 sjw__tuple'},
            'title': {'tag': 'a', 'class': 'title'},
            'company': {'tag': 'a', 'class': 'comp-name mw-25'},
            'location': {'tag': 'span', 'class': 'locWdth'},
            'experience': {'tag': 'span', 'class': 'expwdth'},
            'salary': {'tag': 'span', 'class': 'ni-job-tuple-icon ni-job-tuple-icon-srp-rupee sal'},
            'date_updated': {'tag': 'span', 'class': 'job-post-day'},
            'company_image': {'tag': 'img', 'class': 'logoImage'},  
        }
    },
    {
        'url': "https://www.amazon.jobs/content/en/job-categories/software-development",
        'collection_name': 'amazon_jobs',
        'fields': {
            'job_card': {'tag': 'div', 'class': 'job-card-module_root__QYXVA'},
            'title': {'tag': 'a', 'class': 'header-module_desktop__Dnj66 header-module_title__9-W3R'},
            'location': {'tag': 'span', 'class': 'map-location-to-element-module_item__H5wqD'},
            'date_updated': {'tag': 'div', 'class': 'metadatum-module_text__ncKFr css-1ruyw7v'},
        },
        'company_name': "Amazon"
    }
]

# Set up the Chrome driver
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

for platform in platforms:
    # Step 1: Fetch the web page
    driver.get(platform['url'])
    time.sleep(5)  # Wait for content to load

    # Step 2: Parse the page source
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    collection = db[platform['collection_name']]

    # Step 3: Extract job listings
    jobs = []
    for job_card in soup.find_all(platform['fields']['job_card']['tag'], class_=platform['fields']['job_card']['class']):
        # Title
        title_tag = job_card.find(platform['fields']['title']['tag'], class_=platform['fields']['title']['class'])
        if title_tag is None:
            continue
        title_text = title_tag.text.strip()
        link = title_tag['href']
        if link.startswith("/"):
            link = platform['url'] + link

        # Extract company name
        company_tag = job_card.find(platform['fields'].get('company', {}).get('tag'), class_=platform['fields'].get('company', {}).get('class'))
        company = company_tag.text.strip() if company_tag else platform.get('company_name', "No company found")

        # Location
        location_tag = job_card.find(platform['fields']['location']['tag'], class_=platform['fields']['location']['class'])
        location = location_tag.text.strip() if location_tag else "No location found"

        # Experience (if applicable)
        experience_tag = job_card.find(platform['fields'].get('experience', {}).get('tag'), class_=platform['fields'].get('experience', {}).get('class'))
        experience = experience_tag.text.strip() if experience_tag else "No experience found"

        # Salary (if applicable)
        salary_tag = job_card.find(platform['fields'].get('salary', {}).get('tag'), class_=platform['fields'].get('salary', {}).get('class'))
        salary = salary_tag.text.strip() if salary_tag else "No salary information"

        # Date updated
        date_tag = job_card.find(platform['fields']['date_updated']['tag'], class_=platform['fields']['date_updated']['class'])
        date_updated = date_tag.text.strip() if date_tag else "No date found"

        # Extract company image (logo)
        company_image_tag = job_card.find(platform['fields'].get('company_image', {}).get('tag'), class_=platform['fields'].get('company_image', {}).get('class'))
        company_image = company_image_tag['src'] if company_image_tag else "No company image"

        # Create a job object
        job = {
            'title': title_text,
            'link': link,
            'company': company,
            'location': location,
            'experience': experience,
            'salary': salary,
            'date_updated': date_updated,
            'company_image': company_image
        }

        collection.insert_one(job)
        jobs.append(job)

    # Step 4: Print the jobs we found (Optional)
    if jobs:
        print(f"Jobs from {platform['collection_name']}:")
        for job in jobs:
            print(f"Job Title: {job['title']}, Apply Link: {job['link']}, Company: {job['company']}, Location: {job['location']}, Experience: {job['experience']}, Salary: {job['salary']}, Updated: {job['date_updated']}, Company Image: {job['company_image']}")
    else:
        print(f"No jobs found for {platform['collection_name']}.")


        

# Close the browser and MongoDB connection
driver.quit()
client.close()