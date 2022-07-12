import React from 'react';
import {ExtendedAppProvider} from '@shopify/channels-ui';
import {Outlet} from 'react-router';
import polarisTranslations from '@shopify/polaris/locales/en.json';
import translations from '@shopify/channels-ui/locales/en.json';
import GraphQLProvider from './GraphQL';
import Link from './Link';


import '@shopify/polaris/dist/styles.css';
import '@shopify/channels-ui/build/esm/styles.css';
import RoutePropagator from './RoutePropagator';

const AppProvider = () => {

  var shopifyDomain = 'abbassays9.myshopify.com';
  var host = window.btoa(shopifyDomain + '/admin');   

  return  (
    <ExtendedAppProvider
      polaris={{i18n: polarisTranslations, linkComponent: Link}}
      i18n={translations}
      config={{
        // host: new URL(location).searchParams.get('host'),
        // host: 'abbassays9.myshopify.com/admin',
        host: host,
        apiKey: 'e5bedd8f8c06b119b190ffe2c247fd44',
        forceRedirect: true,
      }}
    >
      <GraphQLProvider>
        <Outlet />
      </GraphQLProvider>
    </ExtendedAppProvider>
  );
};

export default AppProvider;
