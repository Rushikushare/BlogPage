import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button';
import Image from 'next/image'
import { notFound } from 'next/navigation';
import { items } from './data';

const getData = (cat) => {
  const data = items[cat];
  if (data) return data;
  return notFound();
};

const Category = async ({ params }) => {
  const { category } = await params;   // ✅ await params
  const data = getData(category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{category}</h1>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p>{item.desc}</p>
            <Button text="See More " url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={item.image}
              width={600}
              height={400}
              alt={item.title || "Category image"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
