const Arrow = ({color,veiw}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M28.3333 25L23.3333 30M23.3333 30L28.3333 35M23.3333 30H36.6667M45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30Z"
        stroke={!veiw?"white":"#19192E"}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;
