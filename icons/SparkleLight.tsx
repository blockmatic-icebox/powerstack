const SparkleLight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g filter="url(#filter0_d_872_1067)">
      <path
        d="M13.75 4.5L10 8.25L6.25 4.5"
        stroke="#282A30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_872_1067"
        x="0"
        y="0"
        width="20"
        height="20"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_872_1067" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_872_1067"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default SparkleLight
