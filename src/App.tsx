/* eslint-disable react-refresh/only-export-components */
import './App.css'

import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export function App({ signOut, user }: WithAuthenticatorProps) {
  console.log(user)
  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);