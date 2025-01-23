/* eslint-disable react-refresh/only-export-components */
import React, { ReactElement } from 'react'

import {render, RenderOptions} from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { store } from '@redux/store';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}