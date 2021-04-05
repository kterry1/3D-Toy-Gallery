import React, {Suspense} from 'react';
import ToyNavbar from './components/Navbar';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppState} from './store/rootStore';
import {toggleTheme} from './store/theme/ThemeActions';
import { Card } from "react-bootstrap";
import './App.css';
import HomeCar from './3d_Objects/HomeCar';
import Articles from './components/Articles';
const Products = React.lazy(() => import('./components/Products'));

interface AppProps {
  toggle: () => void;
}

function App(props: any) {
  return (
    <>
      <div className="trail">
  <div className="pointer pointer1"></div>
    <div className="pointer pointer2"></div>
    <div className="pointer pointer3"></div>
    <div className="pointer pointer4"></div>
    <div className="pointer pointer5"></div>
    </div>
    <ToyNavbar/>
    <img className="img-bee" src="https://i.pinimg.com/originals/3c/58/66/3c5866f78f57a15041acf1a31f59fe73.png"/>
    <HomeCar/>
    <Articles/>
    <img className="img-shelf" src="https://i.pinimg.com/736x/65/f3/13/65f31391a2924aa6a13aba030c3e84d1.jpg"/>
    <Suspense fallback={null}>
    <Products/>
    </Suspense>
    <Card.Footer className="footer">Created By Kevin T</Card.Footer>
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  theme: state.themeReducer.theme
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  toggle: () => dispatch(toggleTheme())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


