import { Route } from 'react-router';
import './App.css';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomeView from './views/HomeView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Route path="/">
        <HomeView />
      </Route>
    </Container>
  );
}
