const structure = [
  'M0 700H1600',
  'M780 520V700M1300 520V700',
  'M760 500H1520V520H760Z',
  'M900 350V500M1500 350V500',
  'M880 335H1520V350H880Z',
  'M1430 520V700M1442 520V700',
  'M930 375H1070V480H930ZM1090 375H1230V480H1090ZM1250 375H1390V480H1250Z',
  'M1000 375V480M1160 375V480M1320 375V480',
  'M820 545H1120V700H820Z',
  'M895 545V700M970 545V700M1045 545V700',
  'M1160 560H1230V700H1160ZM1215 635V652',
]

export default function HeroBlueprint() {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMaxYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-carbon-400/60"
    >
      <defs>
        <pattern
          id="hero-hatch"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path d="M0 0V14" />
        </pattern>
      </defs>

      <rect
        x="0"
        y="700"
        width="1600"
        height="26"
        fill="url(#hero-hatch)"
        stroke="none"
        className="fade-in-slow"
      />

      {structure.map((d, index) => (
        <path
          key={d}
          d={d}
          pathLength="1"
          className="draw-line"
          style={{ animationDelay: `${index * 140}ms` }}
        />
      ))}

      <g className="fade-in-slow text-seproc/80">
        <g strokeDasharray="8 10">
          <path d="M600 700H780M600 500H760M600 335H880" />
          <path d="M780 190V790M1300 190V790M1500 190V790" />
        </g>
        <path d="M780 770H1500M780 758V782M1300 758V782M1500 758V782" />
        <circle cx="780" cy="168" r="20" />
        <circle cx="1300" cy="168" r="20" />
        <circle cx="1500" cy="168" r="20" />
        <g fill="currentColor" stroke="none" fontSize="16" className="font-mono">
          <text x="780" y="174" textAnchor="middle">A</text>
          <text x="1300" y="174" textAnchor="middle">B</text>
          <text x="1500" y="174" textAnchor="middle">C</text>
          <text x="590" y="694" textAnchor="end">±0.00</text>
          <text x="590" y="494" textAnchor="end">+3.20</text>
          <text x="590" y="329" textAnchor="end">+6.40</text>
          <text x="1040" y="750" textAnchor="middle">5.20</text>
          <text x="1400" y="750" textAnchor="middle">2.00</text>
        </g>
      </g>
    </svg>
  )
}