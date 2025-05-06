import styles from './index.module.css';
import {ResumeType} from '../resumeType';
import { FaLinkedin, FaEnvelope, FaGlobe, FaGithub,FaPhone } from "react-icons/fa";

export default function ClassicTemplate ({ resumeData }:{resumeData:ResumeType}){
  const { name, title, contacts, experience, skills, education, summary } = resumeData;

  return (
    <div className={styles.resumeContainer}>
      <header className={styles.header}>
        <h1 className='nameTag' >{name}</h1>
        <p>{title}</p>
        <div className={styles.contactInfo}>
          <p className='contactList'> <FaPhone/>{contacts.phone}</p>
          <p className='contactList'><FaEnvelope/> <a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
          <p className='contactList'><FaLinkedin/> <a href={contacts.linkedin} target="_blank">{contacts.linkedin}</a></p>
          <p className='contactList'><FaGithub/>  <a href={contacts.github} target="_blank">{contacts.github}</a></p>
          <p className='contactList'> <FaGlobe/> <a href={contacts.website} target="_blank">{contacts.website}</a></p>
        </div>
      </header>
        <section>
        <h2 className='headerTag'>Professional Summary</h2>
        <p>{summary}</p>
        </section>

      <section>
        <h2 className='headerTag'>Work History</h2>
        {experience.map((job, index) => (
  <div key={index}>
    <h3 className='roleTag'>{job.role} - {job.company}</h3>
    <p>{job.location} | {job.years}</p>
    <ul className='listContainer'>
      {job.responsibilities.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
))}
      </section>
      <section>
        <h2 className='headerTag'>Skills</h2>
        <p>{skills.join(', ')}</p>
      </section>

      <section>
        <h2 className='headerTag'>Education</h2>
        <p>{education}</p>
      </section>
    </div>
  );
};
