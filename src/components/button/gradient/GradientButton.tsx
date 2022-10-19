import { GradientButtonBase } from './GradientButtonBase';

export type Size = 'small' | 'medium' | 'big';

interface Props {
    size: Size;
    disabled: boolean;
    text: string;
    onClick?: () => void;
}

export const GradientButton = ({ size, disabled, text, onClick }: Props) => (
    <GradientButtonBase size={size} disabled={disabled} onClick={onClick}>
        <div className="w-full flex justify-center px-2">
            <span className="text-xs tracking-[.1em]">{text}</span>
        </div>
    </GradientButtonBase>
);
