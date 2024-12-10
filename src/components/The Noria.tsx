import ImageCard from "./ImageCard";

const TheNoria = () => {
  return (
    <div className="container">
    <div className="components">
      <h1 id="thenoria" className="title">THE NORIA</h1>
      <p>
        The word "noria" in English means “device for raising water.” It was derived from the Arabic word <em>nurah</em>,
        which was used to describe water wheels, but the literal translation of <em>nurah</em> is “the wailer” (
        <em>ASME 4</em>). This is a fitting name for the deep, thundering cries emanating from the wooden structures they
        are made of. With each rotation, the norias fill their buckets, carrying water up into the stone aqueducts to be
        transported throughout the city.
      </p>
      <h2 className="subtitle">Design</h2>
      <p>
        A team of parts working in unison enables the noria to move water. The main components consist of the wheel,
        dam, and aqueduct. The wheel is the heart of the noria, pumping water with each breath, while the dam and
        aqueduct form the veins and arteries, supplying and carrying water (<em>see Fig. 2.1</em>).
      </p>
      <ImageCard figure="2.1"/>
      <h3 className="subheading">The Wheel</h3>
      <p>
        The wheel is constructed from a large wooden axle, made of hardwoods such as walnut, mulberry, poplar, or
        apricot, with timbers splaying out from the center hub in an intricate web toward its rim (<em>see Fig. 2.2</em>). The rim is a circular wooden frame with paddles around its perimeter; these paddles are key to
        harnessing the power of the water as it flows through the main channel (<em>see Fig. 2.3</em>). Between
        the paddles are enclosed wooden boxes, called sanadiq, with an opening on the outer side to allow water in from
        the river and dump it into the aqueduct (<em>see Figs. 2.4 and 2.5</em>) (<em>Hafian; de Miranda 107-111</em>).
      </p>
      <ImageCard figure="2.2"/>
      <ImageCard figure="2.3"/>
      <ImageCard figure="2.4"/>
      <ImageCard figure="2.5"/>
      <ImageCard figure="2.6"/>
      <h2 className="subtitle">Purpose</h2>
      <p>
        “Norias are water wheels, but not all water wheels are norias” (<em>ASME 4</em>). Norias are a type of water
        wheel used strictly for lifting water, which differentiates them from water wheels designed to grind wheat or
        power sawmills. The norias of Hama were used for a variety of purposes, such as supplying homes, bathhouses, and
        irrigating crops.
      </p>
      <p>
        Noria al-Muhammadiyya supplied water to the al-A’la Mosque, the bathhouse of Hammam al-Dahab, as well as the
        gardens, houses, and fountains in the area. Although norias are not used directly for milling wheat, traces of
        mills can still be found near some norias (<em>Hafian</em>). With the ability to move 120,000 liters (32,000
        gallons) of water per hour, a single noria could “irrigate no less than 75 hectares” (<em>Hafian</em>) of
        farmland.
      </p>
      <h2 className="subtitle">Age</h2>
      <p>
        In 1931 CE, Noria al-Muhammadiyya was built by Aydamar Ibn ‘Abd Allah al-Sayhi al-Turki. This noria can be dated
        thanks to an inscription located on its foundation, as seen in Figure 2.1. The earliest evidence of norias comes
        from a mosaic dated to 469 CE, found in the ancient city of Apamea, 50 km (31 mi) northwest of Hama, also
        located on the Orontes River. The mosaic tiles depict norias, as shown in Figures 2.2 and 2.3 (<em>University of
        Warsaw (UW)</em>).
      </p>
      <p>
        Stevenson makes a convincing argument that norias were used for the Hanging Gardens of Babylon. If true, this
        would date norias to the Neo-Babylonian era, around 600 BCE (<em>Stevenson 35-55</em>).
      </p>
      <ImageCard figure="2.7"/>
      <ImageCard figure="2.8"/>
      <ImageCard figure="2.9"/>
    </div>
    </div>
  );
};

export default TheNoria;
