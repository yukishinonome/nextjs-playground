import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }: { children: ReactElement }) => {
  return children
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

const setup = (jsx: JSX.Element) => {
  return {
    user: userEvent.setup(),
    ...customRender(jsx)
  }
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
// export user-event
export { userEvent, setup }
