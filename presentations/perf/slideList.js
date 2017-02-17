import React from 'react';

import Intro from './Intro';
import ReactIntro from './ReactIntro';
import ReactInterpet from './ReactInterpret';
import ReactFixIt from './ReactFixIt';
import ReactFixIt2 from './ReactFixIt2';
import ReactCaseStudy from './ReactCaseStudy';

const slideComponents = [
  Intro,
  ReactIntro,
  ReactInterpet,
  ReactFixIt,
  ReactFixIt2,
  ReactCaseStudy
];

export default slideComponents.map((SlideComponent, idx) => {
  return <SlideComponent key={ idx } />;
});
