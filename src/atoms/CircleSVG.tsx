type CircleSVGProps = {
    progress: number;
    color: string;
}

export const CircleSVG: React.FC<CircleSVGProps> = ({progress,color}) => (
    <svg viewBox="0 0 36 36">
    <path
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke={color.toString()}
      stroke-width="3"
      stroke-dasharray={`${progress.toString()},100`}
    />
  </svg>
)