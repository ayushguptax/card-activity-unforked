import styled from 'styled-components';
import logo from '../../../assets/icons/logo.svg';
import { colors } from '../../../constants/colors';
import { IVestingSchedule } from '../../../interfaces/vestingSchedule.interface';
import { GradientButton } from '../../button/gradient/GradientButton';

interface Props {
    data: IVestingSchedule[];
}

export const Withdraw = ({ data }: Props) => {
    const withdraw = () => {
        console.log('withdraw');
    };
    return (
        <div className="w-full flex flex-col items-center justify-between bg-black-700 rounded-[30px] inset-shadow px-8 py-6">
            <div className="w-full flex justify-center font-kanit-medium color-gray-gradient text-shadow text-lg tracking-[.12em]">
                WITHDRAW
            </div>
            <div className="w-full flex flex-col items-center my-6">
                <div className="flex flex-col text-gray-600">
                    <div>
                        <span className="text-4xl tracking-[.1em]">900</span>
                        <span className="tracking-[.1em]">.00</span>
                    </div>
                    <span className="text-sm tracking-[.1em] mt-1">
                        TOTAL LOCKED
                    </span>
                </div>
                <Line />
                <div className="flex items-center justify-center">
                    <img
                        className="w-[3rem] h-[3rem] mr-2"
                        src={logo}
                        alt="logo"
                    ></img>
                    <div className="flex flex-col">
                        <div>
                            <span className="text-4xl tracking-[.1em] color-gradient">
                                2700
                            </span>
                            <span className="tracking-[.1em] color-gradient">
                                .00
                            </span>
                        </div>
                        <span className="text-sm tracking-[.1em] text-gray-600">
                            TOTAL UNLOCKED
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center my-6">
                <GradientButton
                    size="small"
                    disabled={false}
                    text="WITHDRAW 2700 LAKE"
                    onClick={withdraw}
                />
            </div>
        </div>
    );
};

const Line = styled.div`
    background: ${colors.gray['700']};
    width: 100%;
    height: 0.5px;
    margin: 1.5rem 0;
`;
