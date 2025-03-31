import { Authenticator, Button, Heading, Flex } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import { generateClient } from 'aws-amplify/data';

import outputs from '../amplify_outputs.json';

import { StorageBrowser } from '@aws-amplify/ui-react-storage';

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

// Amplify.configure(outputs);

// const client = generateClient({
//   authMode: 'userPool',
// });
Amplify.configure(outputs);

const client = generateClient({
  authMode: 'userPool',

export default function App() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex
          className="App"
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="70%"
          margin="0 auto"
        >
          <Heading level={1}>S3 Storage browser</Heading>
          <StorageBrowser />
          <Button onClick={signOut}>Sign Out</Button>
        </Flex>
      )}
    </Authenticator>
  );
}
