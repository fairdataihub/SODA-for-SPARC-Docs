/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import clsx from 'clsx';
import Lottie from 'react-lottie';
import styles from './HomepageFeatures.module.css';

import scienceAnimationData from './lotties/science.json';
import focusAnimationData from './lotties/focus.json';
import programmingAnimationData from './lotties/programming.json';

const FeatureList = [
  {
    title: 'Easy to Use',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: scienceAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <>
        SODA for SPARC was designed from the ground up to be easily installed and used to get your
        data made available to the world.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: focusAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    description: (
      <>
        SODA for SPARC is built to be as simple as possible. We want to make it as easy as possible
        for you to focus on what matters most.
      </>
    ),
  },
  {
    title: 'Powered by open source',
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
        SODA for SPARC is built on top of the open source software that powers the internet. We are
        proud to be a part of the open source community. Your data is yours.
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
