import React from'react';
import { Jumbotron ,Button,Container} from 'reactstrap';
import Footer from'./Footer'
function Home(){

    return(
        <div>
        <Jumbotron className="text-center">
            <h1 >Home  </h1>
            <br/>
            <p>This is a simple React web app, make up with the  help of covid api & instagram api .Displaying the number of covid cases around the world and also displaying instagram details of user with the recent profile pic .</p>
          {/* <Container>
              <Button color="primary">click me</Button>
          </Container> */}
          
            </Jumbotron>
            <Footer/>
        </div>
    );
}

export default Home;