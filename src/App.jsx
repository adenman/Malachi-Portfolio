import './css/App.css';
import './css/index.css';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Nav />
        <main className="justify-center align-center" style={{ paddingTop: '80px' }}>
          <Outlet />
        </main>
        
      </>
    </ApolloProvider>
  );
}

export default App
