/* eslint-disable react/button-has-type */
import React from 'react';
import Lottie from 'react-lottie';

import LikeAnimationData from './lotties/like.json';
import DislikeAnimationData from './lotties/dislike.json';
import SuccessAnimationData from './lotties/success.json';

// eslint-disable-next-line react/prop-types
function AskFeedback({ setShowSuccess }) {
  const [startLikeAnimation, setStartLikeAnimation] = React.useState(false);
  const [startDislikeAnimation, setStartDislikeAnimation] = React.useState(false);

  const likeAnimationOptions = {
    loop: true,
    autoplay: false,
    animationData: LikeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const dislikeAnimationOptions = {
    loop: true,
    autoplay: false,
    animationData: DislikeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const sendFeedback = (reaction) => {
    // eslint-disable-next-line no-console
    console.log(`Send feedback - Title: ${document.title} | Reaction: ${reaction}`, reaction);

    const windowTitle = document.title;
    const analyticsTitle = windowTitle.split(' | ')[0];

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: analyticsTitle, action: reaction }),
    };
    fetch('/api/feedback', requestOptions).then(async (response) => {
      const { status } = response;

      if (status === 200) {
        const res = await response.json();

        if (res.success) {
          // eslint-disable-next-line no-console
          console.log(`Feedback sent successfully. Message: ${res.message}`);
        } else {
          // eslint-disable-next-line no-console
          console.log('There was an error with sending the feedback');
        }
      } else {
        // eslint-disable-next-line no-console
        console.log('There was an error with sending the feedback');
      }
    });

    setShowSuccess(true);
  };

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center sm:flex-row">
      <h3 className="mb-5 w-max pr-5 sm:mb-0"> Was this page helpful? </h3>

      <div className="flex items-center justify-center space-x-4">
        <button
          className="feedback-button feedback-button-yes"
          onClick={() => sendFeedback('Like')}
          onMouseEnter={() => setStartLikeAnimation(true)}
          onMouseLeave={() => setStartLikeAnimation(false)}
        >
          <Lottie
            options={likeAnimationOptions}
            height={25}
            width={25}
            isClickToPauseDisabled
            isStopped={!startLikeAnimation}
          />
          <span className="px-2">Yes</span>
        </button>
        <button
          className="feedback-button feedback-button-no"
          onClick={() => sendFeedback('Dislike')}
          onMouseEnter={() => setStartDislikeAnimation(true)}
          onMouseLeave={() => setStartDislikeAnimation(false)}
        >
          <Lottie
            options={dislikeAnimationOptions}
            height={25}
            width={25}
            isClickToPauseDisabled
            isStopped={!startDislikeAnimation}
          />
          <span className="px-2">No</span>
        </button>
      </div>
    </div>
  );
}

function ShowSuccessMessage() {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <h3 className="mb-0 w-max"> Thank you for your feedback! </h3>
      <Lottie
        options={animationOptions}
        height={70}
        width={70}
        isClickToPauseDisabled
        style={{ margin: '0' }}
      />
    </div>
  );
}

function PageFeedback() {
  const [showSuccess, setShowSuccess] = React.useState(false);

  return (
    <div className="mt-4 w-full ">
      <hr className="feedback-divider" />

      {showSuccess ? <ShowSuccessMessage /> : <AskFeedback setShowSuccess={setShowSuccess} />}
    </div>
  );
}

export default PageFeedback;
