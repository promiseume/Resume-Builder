import React from 'react'
import styles from './home.module.css'
import ClassicTemplate from '@/templates/classicTemplate'
import {resumeData} from '@/templates/resumeData'

export default function Home() {
  return ( 
    <>
      <section className={styles.header}>
      <h3>Build Your
         Professional Resume</h3>
      <p>Create a standout resume in minute with our easy to use builder</p>
      <button>Get Started</button>
      </section>
      <div className={styles.about_section}>
      <div>
        <h4>Easy to use</h4>
        <p>Our intuitive builder helps you create your resume easily and effectively</p>
        </div>
        <div>
        <h4>Customizables Template</h4>
        <p>Choose from a dozens of professionally designed template to suit yourn need</p>
        </div>
        <div>
        <h4>Land Your Dream Job</h4>
        <p>Craft the perfect resume to impress employers and get hired faster</p>
        </div>
      </div>
      <ClassicTemplate resumeData={resumeData} />
    </>
  )
}
