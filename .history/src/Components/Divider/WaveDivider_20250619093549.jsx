import React from 'react';

const WaveDivider = ({ position = 'bottom', color = '#ECFBF9' }) => {
  const isTop = position === 'top';

  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${isTop ? 'rotate-180' : ''}`}>
      <svg
        className="relative block w-full h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.73,22,103.93,29.88,158,19.05
             C230.44,50.27,284,17.59,339.14,11.69
             c54.38-5.82,104.17,19.74,158,35.05
             C571.18,66.75,628,61.07,684,48.13
             c44.58-10,87.18-27,131.91-31.59
             C876.94,10.45,921,22.36,965,32.37
             c58.69,13.12,112.27,3.28,170-14.08V0Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
