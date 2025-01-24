/* eslint-disable react-refresh/only-export-components */
import React, { ReactElement } from 'react'

import {render, RenderOptions} from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@redux/store';
import { MemoryRouter } from 'react-router-dom';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <MemoryRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </MemoryRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}