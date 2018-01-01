import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const PostList = (props) => (
    <List {...props}  title="List of posts">
        <Datagrid>
            <TextField source="id" />
            <TextField source="date" />
            <TextField source="recepient" />
            <TextField source="address" />
            <TextField source="status" />
            <TextField source="retailer" />
        </Datagrid>
    </List>
);