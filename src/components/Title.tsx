
const Title = () => {
    return (
      <section>
      <div className="container">
      <div id="title" className="title">
        <h1>NORIAS OF HAMA</h1>
      </div>
      </div>
      <p
          style={{
            backgroundImage: `url("/assets/images/New Images/Pano Archnet.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px",
            borderRadius: ".15em",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 115%)",

          }}>
        </p>
      </section>
    );
  };
  
  export default Title;