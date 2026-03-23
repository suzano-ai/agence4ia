interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-10" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 180 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* AI Brain Icon */}
      <g>
        <circle cx="20" cy="20" r="16" fill="#8e59ff" stroke="#010101" strokeWidth="2" />
        <path
          d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="#FFC466"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="18" r="2" fill="#FFC466" />
        <circle cx="24" cy="18" r="2" fill="#FFC466" />
        <path
          d="M16 24c2 2 6 2 8 0"
          stroke="#FFC466"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="8" r="3" fill="#3ab598" stroke="#010101" strokeWidth="1" />
        <circle cx="32" cy="14" r="2" fill="#FFC466" stroke="#010101" strokeWidth="1" />
        <circle cx="8" cy="14" r="2" fill="#3ab598" stroke="#010101" strokeWidth="1" />
      </g>

      {/* Text */}
      <text
        x="44"
        y="28"
        fontFamily="Nunito, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#010101"
      >
        Agence
      </text>
      <text
        x="118"
        y="28"
        fontFamily="Nunito, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#8e59ff"
      >
        4IA
      </text>
    </svg>
  );
}
