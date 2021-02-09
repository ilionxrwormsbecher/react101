import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { NavbarComponent } from './components/navbarComponents/NavbarComponent';
import './App.scss';
import { SidebarComponent } from './components/sidebarComponent/SidebarComponent';
import { MainComponente } from './components/mainComponent/MainComponente';
import { ICity } from './models/ICity';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AddBootcampComponent1 } from './components/addBootcampComponent/AddBootcampComponent1';

function App() {
  const [selectedCity, setSelectedCity] = useState<ICity>({} as ICity);

  console.log('selected city', selectedCity);
  return (

    <BrowserRouter>
      <nav>
        <NavbarComponent />
      </nav>

      <Container>
        <Row>
          <Switch>

            <Route path="/" exact>

              <aside className="col-4">
                <SidebarComponent selectCityHandler={setSelectedCity} currentSelectedCity={selectedCity} />
              </aside>

              <MainComponente selectedCityObject={selectedCity} />
            </Route>
            <Route path="/add-bootcamp">
              <div className="col-12 bootcamp-container">

                <AddBootcampComponent1 />
              </div>
            </Route>


            <Route path="/">
              <div className="col-12 bootcamp-container">404 route</div>
            </Route>
          </Switch>

        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;



