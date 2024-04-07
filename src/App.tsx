import * as React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import Dashboard from './dashboard/DashBoard';
// import { QuizList, QuizCreate, QuizEdit, QuizShow } from './quizzes';
// import { UserList, UserEdit, UserShow } from './users';
// import { PromoCodeList, PromoCodeCreate, PromoCodeEdit } from './promoCodes';
import { EventList, EventCreate, EventEdit, EventShow } from './info/events';
import { TicketList, TicketShow } from './info/tickets';
import { ArtistsList, ArtistsEdit } from './info/artists';
import { TestList, TestEdit } from './info/test';
import { ThemeChanger } from './theme/ThemeChanger';
import { TicketCreate } from './info/tickets/TicketCreate';
import { TicketEdit } from './info/tickets/TicketEdit';

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} layout={ThemeChanger} >

    {/*<Resource name="users" list={UserList} edit={UserEdit} show={UserShow} />
    <Resource name="promoCodes" list={PromoCodeList} create={PromoCodeCreate} edit={PromoCodeEdit} /> */}

    <Resource name="event" list={EventList} create={EventCreate} edit={EventEdit} show={EventShow} />
    <Resource name="ticket" list={TicketList} create={TicketCreate} edit={TicketEdit} show={TicketShow} />
    <Resource name="test" list={TestList} edit={TestEdit} />
    <Resource name="artist" list={ArtistsList} edit={ArtistsEdit} />
  </Admin>
);

export default App;