import { colors } from '../../constants/colors';
import { GradientProgressBar } from './GradientProgressBar';

interface Props {
    completed: number;
}

export const TabProgressBar = ({ completed }: Props) => (
    <GradientProgressBar
        completed={completed}
        customLabel=" "
        baseBgColor={colors.gray[600]}
        bgColor="linear-gradient(90.21deg, #ec6ca9 11.91%, #7b61ff 91.55%)"
        width="7rem"
        height="1rem"
    />
);
