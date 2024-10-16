import React, { useState } from 'react';
import styles from './SearchJobs.module.css';
import { useNavigate } from 'react-router-dom';

const SearchJobs = () => {
  const [domain, setDomain] = useState('');
  const [languages, setLanguages] = useState([]);

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
    setLanguages([]); // Reset languages if domain changes
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLanguages([...languages, value]);
    } else {
      setLanguages(languages.filter((lang) => lang !== value));
    }
  };
  const navigate=useNavigate()

  const getLanguagesOptions = () => {
    switch (domain) {
      case 'frontend':
        return [
          'JavaScript',
          'TypeScript',
          'HTML',
          'CSS',
          'Sass/SCSS',
          'Vue.js',
          'Angular',
          'React Native',
          'jQuery',
        ];
      case 'backend':
        return [
          'Node.js',
          'Python',
          'Java',
          'Ruby',
          'PHP',
          'C#',
          '.NET',
          'Golang',
          'Kotlin',
          'Rust',
        ];
      case 'fullstack':
        return [
          'MERN',
          'MEAN',
          'Django + React',
          'Rails + React',
          'Java + Angular',
          'C# + React',
          'Next.js',
          'Nuxt.js',
        ];
      case 'mobile':
        return [
          'Swift (iOS)',
          'Kotlin (Android)',
          'Java (Android)',
          'React Native',
          'Flutter',
          'Xamarin',
        ];
      case 'data-science':
        return [
          'Python',
          'R',
          'SQL',
          'TensorFlow',
          'PyTorch',
          'Pandas',
          'NumPy',
        ];
      case 'devops':
        return [
          'Docker',
          'Kubernetes',
          'Terraform',
          'Ansible',
          'Jenkins',
          'AWS',
          'Azure',
          'GCP',
        ];
      case 'game-development':
        return [
          'Unity (C#)',
          'Unreal Engine (C++)',
          'Godot',
          'Lua',
          'JavaScript',
          'Python',
        ];
      case 'embedded-systems':
        return [
          'C',
          'C++',
          'Python',
          'Arduino',
          'Raspberry Pi',
          'Assembly',
        ];
      case 'cloud-engineering':
        return [
          'AWS',
          'Azure',
          'GCP',
          'Terraform',
          'Kubernetes',
          'Docker',
          'Python',
        ];
      case 'cybersecurity':
        return [
          'Python',
          'JavaScript',
          'C',
          'Linux',
          'Networking',
          'Ethical Hacking',
          'Cryptography',
        ];
      case 'machine-learning':
        return [
          'Python',
          'TensorFlow',
          'PyTorch',
          'R',
          'scikit-learn',
          'Keras',
          'Pandas',
        ];
      case 'blockchain':
        return [
          'Solidity',
          'Rust',
          'JavaScript',
          'Python',
          'Ethereum',
          'Smart Contracts',
          'Hyperledger',
        ];
      default:
        return [];
    }
  };

  return (
    <div className={styles.main}>
    <div className={styles.container}>
      <h2>Preferred Domain</h2>
      <select value={domain} onChange={handleDomainChange} className={styles.select}>
        <option value="">Select Domain</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
        <option value="mobile">Mobile Development</option>
        <option value="data-science">Data Science</option>
        <option value="devops">DevOps</option>
        <option value="game-development">Game Development</option>
        <option value="embedded-systems">Embedded Systems</option>
        <option value="cloud-engineering">Cloud Engineering</option>
        <option value="cybersecurity">Cybersecurity</option>
        <option value="machine-learning">Machine Learning/AI</option>
        <option value="blockchain">Blockchain Development</option>
      </select>

      {domain && (
        <div className={styles.languages}>
          <h3>Known Technologies/Languages</h3>
          {getLanguagesOptions().map((lang) => (
            <label key={lang}>
              <input
                type="checkbox"
                value={lang}
                checked={languages.includes(lang)}
                onChange={handleLanguageChange}
              />
              {lang}
            </label>
          ))}
        </div>
      )}

      {domain && (
        <div className={styles.summary}>
          <h4>Selected Domain: {domain}</h4>
          <p>Known Languages/Technologies: <span style={{fontWeight:"900"}}>{languages.join(', ') || 'None'}</span></p>
        </div>
      )}
      <div>
        {languages.length!==0 && <button className={styles.btns} onClick={()=>navigate("/posts")}>Search Jobs in this Domain</button>}
      </div>
    </div>
    </div>
  );
};


export default SearchJobs;
