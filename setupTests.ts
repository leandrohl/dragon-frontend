import '@testing-library/jest-dom'; // Adiciona matchers como `toBeInTheDocument`

import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
