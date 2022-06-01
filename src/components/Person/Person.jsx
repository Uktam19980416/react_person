// filename: Person.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ personalInfo }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = personalInfo;

  const partner = sex === 'm' ? 'wife' : 'husband';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          {`My name is ${name}`}
        </h2>
        <p className="Person__age">
          {age && (`I am ${age}`)}
        </p>
        <p className="Person__partner">
          {isMarried
            ? `My ${partner}'s name is ${partnerName}`
            : 'I am not married' }
        </p>
      </section>
    </>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: 'Not Married',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};