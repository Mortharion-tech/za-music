import styled from "styled-components";
const Play = ({ size = 19, color = "white", strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={Math.round((size * 21) / 19)} // Maintain aspect ratio
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.16677 5.44832L1.16677 15.552L1.16677 15.5521C1.16677 17.4467 1.16677 18.3937 1.56464 18.9413C1.91169 19.419 2.44519 19.7272 3.03239 19.7889C3.70559 19.8596 4.5259 19.3861 6.16672 18.4388L14.9167 13.387C16.5575 12.4396 17.3781 11.9658 17.6534 11.3474C17.8935 10.808 17.8935 10.1918 17.6534 9.65242C17.3782 9.0343 16.5583 8.56092 14.9189 7.61442L14.9167 7.61318L6.16672 2.56136C4.5259 1.61403 3.70559 1.14051 3.03239 1.21126C2.44519 1.27298 1.91169 1.58117 1.56464 2.05884C1.16677 2.60646 1.16677 3.55363 1.16677 5.44819L1.16677 5.44832Z"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SkipLeft = ({ size = 19, color = "white", ...props }) => (
  <svg
    width={size}
    height={Math.round((size * 21) / 19)}
    viewBox="0 0 19 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.2499 9.41666V13.5836V13.5989C17.2499 16.2532 17.2499 17.5817 16.6916 18.3479C16.2038 19.0175 15.4545 19.4481 14.6303 19.5321C13.6853 19.6284 12.5345 18.9571 10.233 17.6146L6.66134 15.5311C4.39055 14.2065 3.25524 13.5442 2.87309 12.6817C2.5397 11.9293 2.5397 11.071 2.87309 10.3186C3.25524 9.45607 4.39054 8.79372 6.66134 7.46909L10.233 5.38559C12.5345 4.04306 13.6853 3.37183 14.6303 3.46816C15.4544 3.55217 16.2038 3.98278 16.6916 4.65233C17.2499 5.41856 17.2499 6.74714 17.2499 9.40144V9.41666Z"
      fill={color}
    />
    <path
      d="M2.20825 1.29169C2.20825 0.739402 1.76054 0.291687 1.20825 0.291687C0.655967 0.291687 0.208252 0.739402 0.208252 1.29169L2.20825 1.29169ZM0.208253 21.7084C0.208253 22.2606 0.655968 22.7084 1.20825 22.7084C1.76054 22.7084 2.20825 22.2606 2.20825 21.7084H0.208253ZM10.233 17.6146L10.7369 16.7508V16.7508L10.233 17.6146ZM6.66134 15.5311L6.15746 16.3949L6.66134 15.5311ZM6.66134 7.46909L7.16521 8.33287L6.66134 7.46909ZM10.233 5.38559L9.72917 4.52182L10.233 5.38559ZM2.87309 12.6817L1.95882 13.0868L2.87309 12.6817ZM2.87309 10.3186L1.95882 9.91346L2.87309 10.3186ZM16.6916 18.3479L17.4999 18.9368L16.6916 18.3479ZM14.6303 19.5321L14.7317 20.5269L14.6303 19.5321ZM16.6916 4.65233L17.4999 4.06346L16.6916 4.65233ZM14.6303 3.46816L14.7317 2.47332L14.6303 3.46816ZM17.2499 13.5989H18.2499H17.2499ZM17.2499 9.40144H16.2499H17.2499ZM0.208252 1.29169L0.208253 21.7084H2.20825L2.20825 1.29169L0.208252 1.29169ZM16.2499 9.41666V13.5836H18.2499V9.41666H16.2499ZM10.7369 16.7508L7.16521 14.6673L6.15746 16.3949L9.72917 18.4784L10.7369 16.7508ZM7.16521 8.33287L10.7369 6.24937L9.72917 4.52182L6.15746 6.60531L7.16521 8.33287ZM7.16521 14.6673C6.01281 13.9951 5.20888 13.525 4.63964 13.119C4.06667 12.7103 3.8676 12.4577 3.78736 12.2766L1.95882 13.0868C2.26073 13.7682 2.82039 14.278 3.4783 14.7472C4.13996 15.2191 5.03908 15.7425 6.15746 16.3949L7.16521 14.6673ZM6.15746 6.60531C5.03906 7.25771 4.13995 7.78106 3.47828 8.253C2.82036 8.72228 2.26072 9.23208 1.95882 9.91346L3.78736 10.7237C3.86761 10.5426 4.06669 10.2899 4.63966 9.88125C5.20889 9.47524 6.01282 9.0051 7.16521 8.33287L6.15746 6.60531ZM3.78736 12.2766C3.56828 11.7822 3.56828 11.2181 3.78736 10.7237L1.95882 9.91346C1.51113 10.9238 1.51113 12.0764 1.95882 13.0868L3.78736 12.2766ZM9.72917 18.4784C10.8629 19.1397 11.7726 19.6715 12.5175 20.0191C13.2575 20.3644 13.9842 20.6031 14.7317 20.5269L14.5289 18.5373C14.3314 18.5574 14.0103 18.5087 13.3632 18.2067C12.7212 17.9071 11.9047 17.432 10.7369 16.7508L9.72917 18.4784ZM15.8834 17.759C15.5627 18.1992 15.0703 18.4821 14.5289 18.5373L14.7317 20.5269C15.8386 20.4141 16.8449 19.8358 17.4999 18.9368L15.8834 17.759ZM10.7369 6.24937C11.9047 5.56817 12.7211 5.09309 13.3632 4.79352C14.0103 4.49161 14.3314 4.44287 14.5289 4.46301L14.7317 2.47332C13.9842 2.39712 13.2575 2.63584 12.5175 2.9811C11.7726 3.32869 10.8629 3.86048 9.72917 4.52182L10.7369 6.24937ZM17.4999 4.06346C16.8449 3.16446 15.8386 2.58615 14.7317 2.47332L14.5289 4.46301C15.0703 4.5182 15.5628 4.80109 15.8834 5.2412L17.4999 4.06346ZM16.2499 13.5836V13.5989H18.2499V13.5836H16.2499ZM16.2499 13.5989C16.2499 14.9458 16.2489 15.8869 16.1843 16.5899C16.1192 17.2984 15.9999 17.5992 15.8834 17.759L17.4999 18.9368C17.9417 18.3304 18.1015 17.5838 18.1759 16.7729C18.2509 15.9566 18.2499 14.9063 18.2499 13.5989L16.2499 13.5989ZM15.8834 5.2412C15.9999 5.40103 16.1192 5.70183 16.1843 6.41033C16.2489 7.11344 16.2499 8.05455 16.2499 9.40144L18.2499 9.40144C18.2499 8.09402 18.2509 7.0437 18.1759 6.22739C18.1015 5.41647 17.9417 4.66986 17.4999 4.06346L15.8834 5.2412ZM16.2499 9.40144V9.41666H18.2499V9.40144H16.2499ZM18.2499 9.41666C18.2499 9.41158 18.2499 9.40651 18.2499 9.40144L16.2499 9.40144C16.2499 9.40651 16.2499 9.41158 16.2499 9.41666H18.2499ZM16.2499 13.5836C16.2499 13.5887 16.2499 13.5938 16.2499 13.5989L18.2499 13.5989C18.2499 13.5938 18.2499 13.5887 18.2499 13.5836H16.2499Z"
      fill={color}
    />
  </svg>
);

const SkipRight = styled(SkipLeft)`
  transform: rotate(180deg);
`;

const Pause = ({ size = 21, color = "#C6C6C6", strokeWidth = 2, ...props }) => (
  <svg
    width={size}
    height={Math.round((size * 23) / 21)}
    viewBox="0 0 21 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.875 18.8125V4.1875C13.875 3.66476 13.875 3.40344 13.9182 3.1861C14.0958 2.29354 14.793 1.59577 15.6855 1.41823C15.9029 1.375 16.1648 1.375 16.6875 1.375C17.2102 1.375 17.4716 1.375 17.689 1.41823C18.5815 1.59577 19.2796 2.29354 19.4572 3.1861C19.5 3.40153 19.5 3.66016 19.5 4.17374V4.1875V18.8125V18.8263C19.5 19.3398 19.5 19.5985 19.4572 19.814C19.2796 20.7065 18.5815 21.4042 17.689 21.5817C17.4716 21.625 17.2097 21.625 16.687 21.625C16.1643 21.625 15.9029 21.625 15.6855 21.5817C14.793 21.4042 14.0958 20.7065 13.9182 19.814C13.875 19.5966 13.875 19.3352 13.875 18.8125Z"
      fill={color}
    />
    <path
      d="M1.5 18.8125V4.1875C1.5 3.66476 1.5 3.40344 1.54323 3.1861C1.72077 2.29354 2.41799 1.59577 3.31055 1.41823C3.52789 1.375 3.78976 1.375 4.3125 1.375C4.83524 1.375 5.0966 1.375 5.31395 1.41823C6.20651 1.59577 6.90461 2.29354 7.08215 3.1861C7.12501 3.40153 7.125 3.66016 7.125 4.17374V4.1875V18.8125V18.8263C7.125 19.3398 7.12501 19.5985 7.08215 19.814C6.90461 20.7065 6.20651 21.4042 5.31395 21.5817C5.09661 21.625 4.83473 21.625 4.312 21.625C3.78927 21.625 3.52789 21.625 3.31055 21.5817C2.41799 21.4042 1.72077 20.7065 1.54323 19.814C1.5 19.5966 1.5 19.3352 1.5 18.8125Z"
      fill={color}
    />
    <path
      d="M19.5 4.1875V18.8125M19.5 4.1875V4.17374M19.5 4.1875C19.5 4.18289 19.5 4.1783 19.5 4.17374M19.5 18.8125V18.8263M19.5 18.8125C19.5 18.8171 19.5 18.8217 19.5 18.8263M7.125 4.1875V18.8125M7.125 4.1875V4.17374M7.125 4.1875C7.125 4.18289 7.125 4.1783 7.125 4.17374M7.125 18.8125V18.8263M7.125 18.8125C7.125 18.8171 7.125 18.8217 7.125 18.8263M19.5 4.17374C19.5 3.66016 19.5 3.40153 19.4572 3.1861C19.2796 2.29354 18.5815 1.59577 17.689 1.41823C17.4716 1.375 17.2102 1.375 16.6875 1.375C16.1648 1.375 15.9029 1.375 15.6855 1.41823C14.793 1.59577 14.0958 2.29354 13.9182 3.1861C13.875 3.40344 13.875 3.66476 13.875 4.1875V18.8125C13.875 19.3352 13.875 19.5966 13.9182 19.814C14.0958 20.7065 14.793 21.4042 15.6855 21.5817C15.9029 21.625 16.1643 21.625 16.687 21.625C17.2097 21.625 17.4716 21.625 17.689 21.5817C18.5815 21.4042 19.2796 20.7065 19.4572 19.814C19.5 19.5985 19.5 19.3398 19.5 18.8263M7.125 4.17374C7.125 3.66016 7.12501 3.40153 7.08215 3.1861C6.90461 2.29354 6.20651 1.59577 5.31395 1.41823C5.0966 1.375 4.83524 1.375 4.3125 1.375C3.78976 1.375 3.52789 1.375 3.31055 1.41823C2.41799 1.59577 1.72077 2.29354 1.54323 3.1861C1.5 3.40344 1.5 3.66476 1.5 4.1875V18.8125C1.5 19.3352 1.5 19.5966 1.54323 19.814C1.72077 20.7065 2.41799 21.4042 3.31055 21.5817C3.52789 21.625 3.78927 21.625 4.312 21.625C4.83473 21.625 5.09661 21.625 5.31395 21.5817C6.20651 21.4042 6.90461 20.7065 7.08215 19.814C7.12501 19.5985 7.125 19.3398 7.125 18.8263"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Volume = ({ size = 24, color = "white", strokeWidth = 1.5, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 9.99997V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.40997C15 4.42997 12.93 3.28997 10.41 4.86997L7.49 6.69997C7.17 6.88997 6.8 6.99997 6.43 6.99997H5C3 6.99997 2 7.99997 2 9.99997Z"
      stroke={color}
      strokeWidth={strokeWidth}
    />
    <path
      d="M18 8C19.78 10.37 19.78 13.63 18 16"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8301 5.5C22.7201 9.35 22.7201 14.65 19.8301 18.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Music = ({ size = 22, color = "#878787", strokeWidth = 1.5, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75673 20.1667C7.33626 20.1667 8.61673 18.8862 8.61673 17.3067C8.61673 15.7271 7.33626 14.4467 5.75673 14.4467C4.17719 14.4467 2.89673 15.7271 2.89673 17.3067C2.89673 18.8862 4.17719 20.1667 5.75673 20.1667Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.1034 15.4V4.21669C19.1034 1.83336 17.6092 1.50336 16.0967 1.91586L10.3767 3.47419C9.3317 3.75836 8.6167 4.58336 8.6167 5.77502V7.76419V9.10253V17.2975"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.2433 18.26C17.8228 18.26 19.1033 16.9795 19.1033 15.4C19.1033 13.8204 17.8228 12.54 16.2433 12.54C14.6638 12.54 13.3833 13.8204 13.3833 15.4C13.3833 16.9795 14.6638 18.26 16.2433 18.26Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.6167 8.72664L19.1034 5.86664"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ size = 9, color = "#878B92", strokeWidth = 2, ...props }) => {
  <svg
    width={size}
    height={Math.round((size * 16) / 9)}
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 15L1 8L8 1"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
};

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);
`;

const Heart = ({ size = 29, color = "white", strokeWidth = 2, ...props }) => {
  <svg
    width={size}
    height={Math.round((size * 26) / 29)}
    viewBox="0 0 29 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.125 5.59999C11.2083 -1.24607 1 -0.516902 1 8.23314C1 16.9832 14.125 24.2748 14.125 24.2748C14.125 24.2748 27.25 16.9832 27.25 8.23314C27.25 -0.516902 17.0417 -1.24607 14.125 5.59999Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>;
};

const Search = ({ size = 20, color = "white", ...props }) => {
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929C11.9024 12.6834 11.9024 13.3166 12.2929 13.7071L13.7071 12.2929ZM18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L18.2929 19.7071ZM8 14C4.68629 14 2 11.3137 2 8H0C0 12.4183 3.58172 16 8 16V14ZM2 8C2 4.68629 4.68629 2 8 2V0C3.58172 0 0 3.58172 0 8H2ZM8 2C11.3137 2 14 4.68629 14 8H16C16 3.58172 12.4183 0 8 0V2ZM14 8C14 11.3137 11.3137 14 8 14V16C12.4183 16 16 12.4183 16 8H14ZM12.2929 13.7071L18.2929 19.7071L19.7071 18.2929L13.7071 12.2929L12.2929 13.7071Z"
      fill={color}
    />
  </svg>;
};

/* const Play = styled(PlayIcon)`
  fill: "white";
  stroke: "white";
`;
 */
export { Play, SkipLeft, SkipRight, Pause, Volume, Music, ArrowRight, ArrowLeft, Heart, Search };
