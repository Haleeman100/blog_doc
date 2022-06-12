import React, {useEffect, useState} from 'react';
import '../styles/globals.scss';
import {Layout} from '../components';
//import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  
)}

export default MyApp
