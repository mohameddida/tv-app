import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const Shimmer = props => (
  <ShimmerPlaceholder
    isInteraction={false}
    LinearGradient={LinearGradient}
    shimmerColors={[
      'rgba(255, 255, 255, 0.03)',
      'rgba(255, 255, 255, 0.06)',
      'rgba(255, 255, 255, 0.03)',
    ]}
    style={props.style}
  />
);

export default Shimmer;
