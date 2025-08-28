import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>2025 Rushikesh. All rights reserved.</div>
        <div>
          <div className={styles.social}><Image src="/1.png" alt='facebook' height={15} width={15}className={styles.icon}/>
          <Image src="/2.png" alt='facebook' height={15}className={styles.icon} width={15} />
          <Image src="/3.png" alt='facebook'height={15} className={styles.icon}width={15} />
          <Image src="/4.png" alt='facebook'height={15} className={styles.icon}width={15}/>
</div>
          
        </div>
    </div>
  )
}

export default Footer;