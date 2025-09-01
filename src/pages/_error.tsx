import React from 'react'
import { NextPageContext } from 'next'

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <p style={{ color: 'white', textAlign: 'center', marginTop: '20vh' }}>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404
  return { statusCode }
}

export default Error