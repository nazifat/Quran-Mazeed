import React from 'react';

const WaveDivider = ({ position = 'top', color = '#12D6DA' }) => {
  const isTop = position === 'top';

  return (
    <div className={`relative w-full w-screen overflow-hidden leading-none ${isTop ? 'rotate-180' : ''}`}>
      <div class="custom-shape-divider-bottom-1750309149">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

    </div>
  );
};

export default WaveDivider;
