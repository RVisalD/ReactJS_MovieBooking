import { AppBar, Button, ButtonGroup, Toolbar, Typography, Box, Grid} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import endgame from './image/endgame.jpeg';
import infinitywar from './image/infinitywar.jpeg';
import aou from './image/AOU.jpeg';
import avenger from './image/avenger.jpeg'
import ff from './image/ff.jpeg'
import f5 from './image/f5.jpeg'
import ff6 from './image/ff6.jpeg'
import fftd from './image/fftd.jpeg'
import ff4 from './image/ff4.webp'

const App = () =>{

  return(
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ bgcolor: "black"}}>
          <Typography sx={{width: "20%", fontWeight:"bold"}}>Movie Booking</Typography>
          <Box sx={{ width: "30%", margin:"auto", display: { xs: 'none', md: 'flex' }, justifyContent:"space-between" }} >
            <Button sx={{color:"white"}}>Home</Button>
            <Button sx={{color:"white"}}>Cinemas</Button>
            <Button sx={{color:"white"}}>Showtimes</Button>
            <Button sx={{color:"white"}}>Promotion</Button>
          </Box>
          <ButtonGroup sx={{marginLeft:"auto"}}>
            <Button sx={{border:"none", color:"white"}} variant="text">Log In</Button>
            <Button sx={{border:"none", color:"white"}} variant="text">Sign Up</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <a href="/" class="card">
              <img className="card-img-top" src={endgame} alt="logo"/>
              <div class="card-body">
                <h4 class="card-title">Avenger: End Game</h4>
              </div>
            </a>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img className="card-img-top" src={infinitywar} alt="logo"/>
                <div class="card-body">
                  <h4 class="card-title">Avenger: Infinity War</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img className="card-img-top" src={aou} alt="logo"/>
                <div class="card-body">
                  <h4 class="card-title">Avenger: Age of Ultron</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card">
              <img className="card-img-top" src={avenger} alt="logo"/>
              <div class="card-body">
                <h4 class="card-title">The Avenger</h4>
              </div>
            </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img className="card-img-top" src={ff} alt="logo"/>
                <div class="card-body">
                  <h4 class="card-title">The Fast and Furious</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img className="card-img-top" src={f5} alt="logo"/>
                <div class="card-body">
                  <h4 class="card-title">Fast Five</h4>
                </div>
              </div>
            </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card">
              <img className="card-img-top" src={ff6} alt="logo"/>
              <div class="card-body">
                <h4 class="card-title">Fast and Furious 6</h4>
              </div>
            </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img className="card-img-top" src={fftd} alt="logo"/>
                <div class="card-body">
                  <h4 class="card-title">Fast and Furious: Tokyo Drift</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img className="card-img-top" src={ff4} alt="logo"/>
                <div class="card-body">
                  <h4 class="card-title">Fast and Furious 4</h4>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
};

export default App;