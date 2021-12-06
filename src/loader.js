import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={450}
      viewBox="0 0 450 400"
      preserveAspectRatio="xMidYMax slice" x="0" y="30"
      backgroundColor="grey"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="180" y="80" rx="0" ry="0" width="2" height="285" />
      <rect x="400" y="82" rx="0" ry="0" width="2" height="281" />
      <rect x="180" y="80" rx="0" ry="0" width="290" height="2" />
      <rect x="181" y="363" rx="0" ry="0" width="218" height="2" />
      <circle cx="287" cy="157" r="44" />
      <rect x="241" y="246" rx="0" ry="0" width="92" height="9" />

      
    </ContentLoader>
  )
}


export default Loader