
const Title = () => {
    return (
      <section id="title" className="title">
        <h1>Analysis of the Ancient Waterworks of the Orontes</h1>
        <p>The evolution of hydraulic technology in ancient Syria, and the Norias of Hama's contributions to sustainable water management.
        </p>
        <p
          style={{
            backgroundImage: `url("/assets/images/Pano Archnet.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px",
            borderRadius: ".15em",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",


          }}>
        </p>
      </section>
    );
  };
  
  export default Title;