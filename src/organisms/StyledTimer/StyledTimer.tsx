import { CircleSVG } from "../../atoms/CircleSVG";

type StyledTimerProps = {
    progress?: number;
    color?: string;
}

export const StyledTimer: React.FC<StyledTimerProps> = ({ progress, color }: StyledTimerProps) => (
    <CircleSVG progress={progress ? progress : 100} color={color ? color : "#000"} />
)