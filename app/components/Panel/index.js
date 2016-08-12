import React, { PropTypes } from 'react';
import styles from './styles.css';

import Text from 'components/Text';

import tinderCardFemale from 'static/tinder_female.png';
import tinderCardMale from 'static/tinder_male.png';

const placeholderMapping = {
  1: tinderCardFemale,
  0: tinderCardMale,
};

export default function Panels(props) {
  return (
    <div
      className={styles.detailView_placeholder}
    >
      <img src={placeholderMapping[props.targetGender]} role="presentation" style={{ maxHeight: 300, opacity: 0.5, alignSelf: 'center' }} />
      <Text type="placeholder">Pick a match to find out more!</Text>
    </div>);
}

Panels.propTypes = {
  targetGender: PropTypes.number,
  type: PropTypes.string,
};
