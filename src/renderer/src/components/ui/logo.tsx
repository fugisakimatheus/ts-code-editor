type LogoProps = {
  className?: string
  color?: string
}

export const Logo = (props: LogoProps) => {
  const { className, color } = props
  return (
    <svg
      width="80"
      height="53"
      viewBox="0 0 80 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.42884 3.46919e-06C2.41281 3.46919e-06 0 2.63902 0 5.65505V17.2667C0 17.9453 0.603209 18.5485 1.28181 18.5485H5.95664C8.97267 18.3977 11.3855 15.9095 11.3855 12.8935V1.28181C11.3855 0.603205 10.7823 3.46919e-06 10.1037 3.46919e-06H5.42884ZM15.0801 3.46919e-06C14.4015 3.46919e-06 13.7983 0.603209 13.7983 1.28181V51.4986C13.7983 52.1772 14.4015 52.7804 15.0801 52.7804H19.3779C22.6202 52.7804 25.2592 50.1414 25.2592 46.8992V1.28181C25.2592 0.603201 24.656 0 23.9774 0L15.0801 3.46919e-06ZM28.9538 3.46919e-06C28.2752 3.46919e-06 27.672 0.603209 27.672 1.28181V12.8935C27.672 15.9095 30.0848 18.3977 33.1008 18.5485H37.7757C38.4543 18.5485 39.0575 17.9453 39.0575 17.2667V5.65505C39.0575 2.63902 36.6447 3.46919e-06 33.6287 3.46919e-06H28.9538ZM60.4713 3.46919e-06C49.689 3.46919e-06 40.9425 8.67107 40.9425 19.4534C40.9425 30.2356 49.6136 38.8313 60.3959 38.9067H60.4713C63.6381 38.9067 66.1263 36.3431 66.1263 33.2517C66.1263 30.0848 63.6381 27.5966 60.4713 27.5212C56.0226 27.5212 52.4034 23.902 52.4034 19.4533C52.4034 15.0047 56.0226 11.4609 60.4713 11.4609H70.0471C73.1385 11.4609 75.7776 8.82187 75.7776 5.73044V1.28181C75.7776 0.603201 75.2498 0 74.4204 0L60.4713 3.46919e-06ZM60.4713 13.8737C57.3044 13.8737 54.8162 16.4373 54.8162 19.5288C54.8162 22.6956 57.3044 25.1838 60.4713 25.2592C64.9199 25.2592 68.5391 28.8784 68.5391 33.3271C68.5391 37.7757 64.9199 41.3195 60.4713 41.3195H50.8954C47.804 41.3195 45.1649 43.9585 45.1649 47.05V51.4986C45.1649 52.1772 45.6927 52.7804 46.5222 52.7804H60.4713C71.2535 52.7804 80 44.1093 80 33.3271C80 22.5448 71.3289 13.9491 60.5466 13.8737L60.4713 13.8737Z"
        fill={color ?? 'currentColor'}
      />
    </svg>
  )
}
