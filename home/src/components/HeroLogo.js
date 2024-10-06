import {motion} from "framer-motion";
const HeroLogo = () => {
    const icon = {
        hidden: {
          pathLength: 0,
          stroke: "rgba(255,255,255,0)",
          opacity:0
        },
        visible: {
          pathLength: 1,
          stroke: "rgba(255,255,255,0.5)",
          opacity:1
        }
      }
  return (
    <svg
      width="50%"
      height="800px"
      viewBox="0 0 1051 726"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        {/* h1 */}
      <motion.line
        x1="88.5"
        y1="107.998"
        x2="90.5"
        y2="677.998"
        stroke="url(#paint0_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:3}}
      />
      {/* h2 */}
      <motion.line
        x1="198.5"
        y1="11.0022"
        x2="195.5"
        y2="678.002"
        stroke="url(#paint1_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:3.5}}
      />
      {/* h3 */}
      <motion.line
        x1="356.5"
        y1="11"
        x2="356.5"
        y2="678"
        stroke="url(#paint2_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:3.25}}
      />
      {/* v1 */}
      <motion.line
        x1="624.001"
        y1="10.5"
        x2="0.00172274"
        y2="11.5955"
        stroke="url(#paint3_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:2}}
      />
      {/* v2 */}
      <motion.line
        x1="574"
        y1="108.5"
        x2="16.0009"
        y2="108.595"
        stroke="url(#paint4_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:2.25}}

      />
      {/* v1 */}
      <motion.line
        x1="460.5"
        y1="107.998"
        x2="462.525"
        y2="684.998"
        stroke="url(#paint5_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:3.25}}
      />
      <motion.line
        x1="530.405"
        y1="107.707"
        x2="960.405"
        y2="702.707"
        stroke="url(#paint6_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:2.5}}
      />
      <motion.line
        x1="624.404"
        y1="10.7057"
        x2="1050.4"
        y2="595.706"
        stroke="url(#paint7_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:3}}
      />
      <motion.line
        x1="890.427"
        y1="0.260448"
        x2="472.427"
        y2="685.26"
        stroke="url(#paint8_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:2.75}}
      />
      <motion.line
        x1="1009.43"
        y1="74.2603"
        x2="612.427"
        y2="725.26"
        stroke="url(#paint7_linear_246_252)"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:2.75}}
      />
      <defs>
        <linearGradient
          id="paint0_linear_246_252"
          x1="89.5"
          y1="678.002"
          x2="87.5"
          y2="108.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#FF5F00" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_246_252"
          x1="194.5"
          y1="677.998"
          x2="197.5"
          y2="10.9978"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.455" stop-color="white" />
          <stop offset="1" stop-color="#006989" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_246_252"
          x1="355.5"
          y1="678"
          x2="355.5"
          y2="11"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="0.405" stop-color="white" />
          <stop offset="1" stop-color="#006989" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_246_252"
          x1="-3.28411e-05"
          y1="10.5955"
          x2="623.999"
          y2="9.49999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#006989" />
          <stop offset="0.295" stop-color="#FF8343" />
          <stop offset="0.635" stop-color="white" />
          <stop offset="1" stop-color="#006989" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_246_252"
          x1="16.0008"
          y1="107.595"
          x2="574"
          y2="107.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#006989" />
          <stop offset="0.37" stop-color="white" />
          <stop offset="0.535" stop-color="#FF8343" />
          <stop offset="1" stop-color="#006989" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_246_252"
          x1="461.525"
          y1="685.002"
          x2="459.5"
          y2="108.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#FF5F00" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_246_252"
          x1="959.595"
          y1="703.293"
          x2="529.595"
          y2="108.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#006989" />
          <stop offset="0.335" stop-color="white" />
          <stop offset="0.565" stop-color="#FF8343" />
          <stop offset="0.98" stop-color="#006989" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_246_252"
          x1="1049.6"
          y1="596.294"
          x2="623.596"
          y2="11.2943"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.055" stop-color="#006989" />
          <stop offset="0.365" stop-color="white" />
          <stop offset="0.625" stop-color="#FF8343" />
          <stop offset="1" stop-color="#006989" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_246_252"
          x1="471.573"
          y1="684.74"
          x2="889.573"
          y2="-0.260449"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.025" stop-color="#006989" />
          <stop offset="0.305" stop-color="white" />
          <stop offset="0.745" stop-color="#FF5F00" />
          <stop offset="1" stop-color="#006989" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_246_252"
          x1="611.573"
          y1="724.74"
          x2="1008.57"
          y2="73.7397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#006989" />
          <stop offset="0.32" stop-color="white" />
          <stop offset="0.56" stop-color="#FF5F00" />
          <stop offset="1" stop-color="#006989" stop-opacity="0.972549" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroLogo;
