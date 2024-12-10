import ImageCard from "./ImageCard";

const Introduction = () => {
  return (
    <div className="container">
    <div id="introduction" className="components">
      <h1>Introduction</h1>
      <p>
      Have you ever considered what it takes to get water to your cup? In ancient times, prisoners were tortured on "treadwheels," screaming in agony as they pumped water (<em>de Miranda 112</em>). Yet, in medieval Syria, those screams were replaced by the deep, ominous tones of {" "}
        <a
          href="https://youtu.be/2uHhPDFRum0?si=oDavAy4JSUhJ4tX5"
          target="_blank"
          rel="noopener noreferrer"
        >
          "the wailer."
        </a>{" "}
        (loud sound warning).
      </p>
      <div className="poem-container">
      <p className="poem">
        “Ali, Ali you cry as you turn, O wheel.
        <br />
        Why do you groan, O wheel, where is your pain?
        <br />
        Were you separated from your beloved, or your homeland?
        <br />
        Why do you groan, O wheel, where is your pain?”
        <br />
        <br /> (<em>Öztelli qtd. In Alvan 476</em>)
      </p>
      </div>
      <p>
      The pain comes from the wood of the wailers, called noria or norias, as they spin on their axles, creaking from the force of the river. These colossal water-lifting devices tower over the Orontes River, with the largest, Noria al-Muhammadiyya, reaching an impressive height of 69 feet (<em>ASME 7</em>). These engineering marvels were instrumental in transforming the declining settlement of Hama into “the city of water wheels,” one of the oldest continuously occupied cities in the world (<em>Astour 51-54; Wilson 1-32</em>). At Hama’s city center lies “the mound,” a prehistoric settlement dating back to 6000 BCE (<em>See Fig. 1.2</em>) (
        <em>National Museum of Denmark (NMOD)</em>).
      </p>
      <p>
      As the heartbeat of Hama’s historical transformation, the norias continue to resonate in the city’s cultural identity. Even today, the drone of the norias echoes through the gardens of Hama. With fourteen of these medieval goliaths still revolving, they no longer carry agony but joy as visitors ride them and leap into the water below  (<em>See Fig. 1.3</em>).
      </p>
      <p>
      The norias of Hama were once an innovative solution for lifting water to drive agriculture. Now, these creaking behemoths have evolved into engineering masterpieces and cultural icons, shaping modern culture through tourism, recreation, and even appearances in video games.
      </p>
    </div>
    <ImageCard figure="1.2"/>
    <ImageCard figure="1.3"/>
    </div>
  );
};

export default Introduction;
