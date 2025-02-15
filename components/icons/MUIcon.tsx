import React from 'react';
import Image from 'next/image';

const MUIcon = () => (
    <div className="flex items-center justify-center w-24 h-24 relative rounded-full overflow-hidden filter grayscale">
    <Image
      src="./logos/VIT.png"
      alt="jocata logo"
      width={80}
      height={80}
      objectFit="cover"
    />
  </div>
);

export default MUIcon;
