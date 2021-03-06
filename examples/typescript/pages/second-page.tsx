import React, { Fragment } from 'react'

import { withNamespaces, Link } from '../i18n'


const SecondPage: React.FunctionComponent = ({ t }) => (
  <Fragment>
    <h1>{t('h1')}</h1>
    <Link href='/'>
      <button
        type='button'
      >
        {t('back-to-home')}
      </button>
    </Link>
  </Fragment>
)

SecondPage.getInitialProps = () => ({
  namespacesRequired: ['second-page'],
})

export default withNamespaces('second-page')(SecondPage)
