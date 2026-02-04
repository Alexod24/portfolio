export const MapLines = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMinYMin slice"
    >
        <path
            d="M0 50 H100 L150 100 V200 L50 300 H0 M150 100 H300 L350 150 M100 50 V0 M50 300 V400 L100 450 H200 M350 150 V300 L250 400 H200 M200 450 V600 L150 650 H0 M250 400 V500 L300 550 H400"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="opacity-50"
        />
        <path
            d="M20 80 H80 L130 130 V250 L30 350 H0"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-30"
        />
        <path
            d="M300 20 V100 L250 150 M400 500 H350 L300 450 V350"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-30"
        />
    </svg>
);
