import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        {/* Image Section */}
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Contact illustration"
            fill
            className={styles.image}
          />
        </div>

        {/* Contact Form */}
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Your Message"
            className={styles.textarea}
            required
          ></textarea>
          <Button url="#" text="Send Message" />
        </form>
      </div>
    </div>
  )
}

export default Contact
