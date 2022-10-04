import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './providers/GlobalStyle';

interface Props {
    children: ReactNode;
}

export const Providers = ({ children }: Props) => (
    <BrowserRouter>
        <GlobalStyle />
        {children}
    </BrowserRouter>
);
