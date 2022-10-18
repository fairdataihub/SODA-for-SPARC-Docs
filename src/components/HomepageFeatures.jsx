/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import clsx from 'clsx';
import Lottie from 'react-lottie';
import styles from './HomepageFeatures.module.css';

import scienceAnimationData from './lotties/column1lottie.json';
import focusAnimationData from './lotties/column2lottie.json';
import programmingAnimationData from './lotties/column3lottie.json';

const FeatureList = [
  {
    title: 'Curate',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: scienceAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: <>Rapidly curate your data and metadata according to the SPARC Data Standards.</>,
  },
  {
    title: 'Share',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: focusAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <>Easily upload your curated dataset on the SPARC data platform Pennsieve to make it FAIR.</>
    ),
  },
  {
    title: 'Relax',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: programmingAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <>
        SODA comes with intuitive user interfaces and automation that streamline the process for you
        so you can chill.
      </>
    ),
  },
];

// eslint-disable-next-line react/prop-types
function Feature({ animationOptions, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="flex justify-center py-4">
        <Lottie options={animationOptions} height={300} width={300} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
