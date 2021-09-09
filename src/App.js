import React from 'react';
import Layout from './components/Layout';
import NoSearch from './components/No-search';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import useGithub from './hooks/github-hooks'

function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>  
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
