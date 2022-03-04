import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
type Data = {
  imgUrl: string;
  title: string;
  description: string;
};

const About = () => {
  const [abouts, setAbouts] = useState<Data[]>([]);

  const fetchData = async () => {
    const query = '*[_type ==  "abouts"]';
    const data = await client.fetch(query);

    setAbouts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>good Dev </span> <br />
        means <span>good business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            className="app__profile-item"
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={about.title + index}
          >
            {/* @ts-ignore */}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),

  'about',
  'app__whitebg'
);
