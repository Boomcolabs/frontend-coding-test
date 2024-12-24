import React from 'react'

const BigCircle = () => {
  return (
      <svg
          width="722"
          height="456"
          viewBox="0 0 722 456"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <g filter="url(#filter0_bii_4012_1497)">
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-392.933 -131.558C-392.933 159.206 -157.222 394.917 133.543 394.917C424.307 394.917 660.018 159.206 660.018 -131.559C660.018 -422.323 424.307 -658.034 133.543 -658.034C-157.222 -658.034 -392.933 -422.323 -392.933 -131.558ZM133.543 456C-190.957 456 -454.016 192.941 -454.016 -131.558C-454.016 -456.058 -190.957 -719.117 133.543 -719.117C458.042 -719.117 721.102 -456.058 721.102 -131.559C721.102 192.941 458.042 456 133.543 456ZM-299.053 -131.558C-299.053 107.358 -105.373 301.038 133.543 301.038C372.459 301.038 566.139 107.358 566.139 -131.559C566.139 -370.475 372.459 -564.155 133.543 -564.155C-105.373 -564.155 -299.053 -370.475 -299.053 -131.558ZM133.543 362.121C-139.109 362.121 -360.136 141.093 -360.136 -131.558C-360.136 -404.21 -139.109 -625.238 133.543 -625.238C406.194 -625.238 627.222 -404.21 627.222 -131.559C627.222 141.093 406.194 362.121 133.543 362.121Z"
                  fill="url(#paint0_linear_4012_1497)"
              />
          </g>
          <defs>
              <filter
                  id="filter0_bii_4012_1497"
                  x="-543.186"
                  y="-808.288"
                  width="1353.46"
                  height="1353.46"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
              >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="44.5853"
                  />
                  <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_4012_1497"
                  />
                  <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_4012_1497"
                      result="shape"
                  />
                  <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                  />
                  <feOffset dx="2.11733" dy="2.11733" />
                  <feGaussianBlur stdDeviation="3.17599" />
                  <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                  />
                  <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                  />
                  <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_4012_1497"
                  />
                  <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                  />
                  <feOffset dx="44.5853" dy="53.5024" />
                  <feGaussianBlur stdDeviation="35.6683" />
                  <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                  />
                  <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                  />
                  <feBlend
                      mode="normal"
                      in2="effect2_innerShadow_4012_1497"
                      result="effect3_innerShadow_4012_1497"
                  />
              </filter>
              <linearGradient
                  id="paint0_linear_4012_1497"
                  x1="1103.42"
                  y1="-133.391"
                  x2="-1569.09"
                  y2="1652.02"
                  gradientUnits="userSpaceOnUse"
              >
                  <stop stop-color="white" stop-opacity="0.05" />
                  <stop offset="1" stop-color="#1E1E1F" stop-opacity="0.01" />
              </linearGradient>
          </defs>
      </svg>
  );
}

export default BigCircle