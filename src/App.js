import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList } from './posts';
// import { TaskList } from './tasks';

import authClient from './authClient';

const App = () => (
    <Admin authClient={authClient} restClient={jsonServerRestClient('http://localhost:3004')}>
        <Resource name="posts" list={PostList} />
        {/* <Resource name="tasks" list={TaskList} /> */}
    </Admin>
);

export default App;