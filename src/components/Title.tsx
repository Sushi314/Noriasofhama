
const Title = () => {
    return (
      <section>
      <div className="container">
      <div id="title" className="title">
        <h1>NORIAS OF HAMA</h1>
        <p>The norias of Hama were once an innovative solution for lifting water to drive agriculture. Now, these creaking behemoths have evolved into engineering masterpieces and cultural icons, shaping modern culture through tourism, recreation, and even appearances in video games. 
        </p>

      </div>

      </div>
      <p
          style={{
            backgroundImage: `url("/assets/images/Pano Archnet.jpg")`,
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