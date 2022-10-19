import { ReactNode } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { Size } from './GradientButton';

interface Props {
    size: Size;
    disabled: boolean;
    children: ReactNode;
    onClick?: () => void;
}

export const GradientButtonBase = ({
    size,
    disabled,
    children,
    onClick,
}: Props) => (
    <button disabled={disabled} onClick={onClick} className="cursor-pointer">
        <GradientBackground
            className={`${
                size === 'small'
                    ? 'w-[12rem] h-[3rem] px-2'
                    : size === 'medium'
                    ? 'w-[14rem] h-[3rem] px-4'
                    : 'w-[17rem] h-[4rem] px-6'
            } flex justify-center items-center rounded-[32px]`}
        >
            {children}
        </GradientBackground>
    </button>
);

const GradientBackground = styled.div`
    background: linear-gradient(
        90.21deg,
        ${colors.purple['900']},
        ${colors.blue['900']}
    );
    box-shadow: inset 2px 2px 14px rgba(255, 255, 255, 0.46);
    filter: drop-shadow(0px 0px 6px ${colors.purple['600']})
        drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: ${colors.white};
`;
