import { MDBBox, MDBTypography, MDBCol, MDBRow} from "mdbreact";
import React from "react";
import Carousel from "../components/Carousel";
// import FeaturedCards from "../components/FeaturedCards";

function Home() {

  
  return (
    <div>
      <Carousel />

      {/* <FeaturedCards /> */}

      <h1 className="text-center mt-5">The Vinyl Comeback Continues</h1>

      <MDBTypography blockquote className="mt-5">
        <MDBRow center>
        <MDBCol md="6" className="align-center">
    <MDBBox className="mb-3" tag="h6" mb={0} style={{fontStyle: "italic", textAlign: "left"}}> " Vinyl records, over the past decade, made a strong comeback even among the younger generation. Music fans, either newbies or hard-core collectors, are now more appreciative of the record as a form of art, from the cover to the feel to the sound. "</MDBBox></MDBCol></MDBRow>
    <MDBBox tag="footer" mb={3} className="blockquote-footer text-center">Music Times by <cite title="Source Title">Laetare Rose</cite></MDBBox>
  </MDBTypography>
  


    
    </div>
  );
}
export default Home;
