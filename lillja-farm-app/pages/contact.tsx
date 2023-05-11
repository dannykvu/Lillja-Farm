import type { NextPage } from 'next'
import styles from '../styles/Contact.module.css'

const Contact: NextPage = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          id='contact'
          className="py-12">
        <h1 className={`text-4xl font-extrabold text-gray-900 mb-6 ${styles.contactTitle}`}>Contact Us</h1>
          <p className={`mt-6 text-lg text-gray-700 ${styles.contactText}`}>
            Have any questions? We&rsquo;re here to help!
            <br /> 
            <br />
            Call us directly at <span className={`font-bold ${styles.contactPhone}`}>(281) 931-6558</span>, or come visit our store:
            <br /> 
            <span className={`font-bold ${styles.contactAddress}`}>
              14602 Lillja Rd<br />
              Houston, TX 77060
            </span>
            <br />
            <br />
            <br />
            Thank you for stopping by, and we look forward to hearing from you soon!
          </p>
      </div>
    </div>
  )
}

export default Contact
