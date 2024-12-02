import React from "react";

const references = [
  {
    title: "Archéorient. 'Les roues hydrauliques du Proche-Orient: Lieux, techniques et usages' [The Hydraulic Wheels of the Near East: Locations, Techniques, and Uses]. ArchéOrient – Le Blog, 25 May 2015.",
    url: "https://archeorient.hypotheses.org/3936",
  },
  {
    title: "University of Warsaw. 'Discovery of Oldest Representation of a Water Wheel on a Roman Mosaic from Apamea.' University of Warsaw.",
    url: "https://en.uw.edu.pl/discovery-of-oldest-representation-of-a-water-wheel-on-a-roman-mosaic-from-apamea/#lightbox[galleryid-27169-1]/0/",
  },
  {
    title: "American Society of Mechanical Engineers. 'Noria Al-Muhammadiyya.' ASME Engineering History.",
    url: "https://www.asme.org/wwwasmeorg/media/resourcefiles/aboutasme/who%20we%20are/engineering%20history/landmarks/241-noria-al-muhammadiyya.pdf",
  },
  {
    title: "Museum With No Frontiers. 'Norias (Nawa’ir) of Hama.' Explore Islamic Art Collections.",
    url: "https://explore.museumwnf.org/themes/t-1/c-sy/l-185/m-1197/lan-en",
  },
  {
    title: "Hafian, Waal. 'Norias (Nawa’ir) of Hama.' Discover Islamic Art, Museum With No Frontiers, 2024.",
    url: "https://islamicart.museumwnf.org/database_item.php?id=monuments;ISL;sy;Mon01;32;en",
  },
  {
    title: "de Miranda, A. 'Aesthetic Tradition and Ancient Technology: A Case Study of the Water-Wheel.' Design and Nature II, edited by M. W. Collins and C. A. Brebbia, WIT Press, 2004, pp. 105-114.",
    url: "https://www.witpress.com/Secure/elibrary/papers/DN04/DN04011FU.pdf",
  },
  {
    title: "Bartl, Karin, and Michel al-Maqdissi. 'Archaeological Survey in the Hama Region 2003–2005.' Syria, vol. HS IV, 2016. OpenEdition Journals, 1 Dec. 2018.",
    url: "http://journals.openedition.org/syria/5107",
  },
  {
    title: "Astour, Michael C. 'Tunip-Hamath and Its Region: A Contribution to the Historical Geography of Central Syria.' Orientalia, vol. 46, no. 1, 1977, pp. 51–64.",
    url: "http://www.jstor.org/stable/43074742",
  },
  {
    title: "Hill, Donald R. 'Mechanical Engineering in the Medieval Near East.' Scientific American, vol. 264, no. 5, 1991, pp. 100–05.",
    url: "http://www.jstor.org/stable/24936907",
  },
  {
    title: "D. W. W. Stevenson. 'A Proposal for the Irrigation of the Hanging Gardens of Babylon.' Iraq, vol. 54, 1992, pp. 35–55.",
    url: "https://doi.org/10.2307/4200351",
  },
  {
    title: "'Waterwheel in Syria.' Alternative Energy, edited by K. Lee Lerner, et al., 2nd ed., UXL, 2012. Gale In Context: Science.",
    url: "https://link.gale.com/apps/doc/PC4205137010/SCIC?u=ncc_paul&sid=ebsco&xid=efe45fc5",
  },
  {
    title: "Laessøe, Jørgen. 'Reflexions on Modern and Ancient Oriental Water Works.' Journal of Cuneiform Studies, vol. 7, no. 1, 1953, pp. 5–26.",
    url: "https://doi.org/10.2307/1359477",
  },
  {
    title: "Wilson, Andrew. 'Machines, Power and the Ancient Economy.' The Journal of Roman Studies, vol. 92, 2002, pp. 1–32.",
    url: "https://doi.org/10.2307/3184857",
  },
  {
    title: "National Museum of Denmark. 'Life in an Ancient Near Eastern Town.' National Museum of Denmark.",
    url: "https://en.natmus.dk/historical-knowledge/historical-knowledge-the-world/the-lands-of-the-mediterranean/the-far-east/digital-hama-a-window-on-syrias-past/life-in-an-ancient-near-eastern-town/",
  },
  {
    title: "The Metropolitan Museum of Art. 'Hama (Syria): View of Water Wheels and Aqueduct along the Orontes River.' Ernst Herzfeld Papers, Series 2.2: Individual Photographs: The Near East, Central Asia, South Asia and Europe, Metropolitan Museum of Art.",
    url: "https://libmma.contentdm.oclc.org/digital/collection/p16028coll11/id/5273",
  },
  {
    title: "The Metropolitan Museum of Art. 'Hama (Syria): View of Water Wheels on the Orontes River.' Ernst Herzfeld Papers, Series 2.2: Individual Photographs: The Near East, Central Asia, South Asia and Europe, Metropolitan Museum of Art.",
    url: "https://libmma.contentdm.oclc.org/digital/collection/p16028coll11/id/5243",
  },
  {
    title: "The Metropolitan Museum of Art. 'Hama (Syria): View of Water Wheel on the Orontes River.' Ernst Herzfeld Papers, Series 2.2: Individual Photographs: The Near East, Central Asia, South Asia and Europe, Metropolitan Museum of Art.",
    url: "https://libmma.contentdm.oclc.org/digital/collection/p16028coll11/id/5249",
  },
  {
    title: "Steam Community. 'Kingdoms and Castles: Noria-the Water Mover.' Steam Community.",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=1790816488",
  },
];



const References: React.FC = () => {
  return (
    <div id="references" className="components">
      <h2>Works Cited</h2>
      <cite>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {references.map((reference, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <p style={{ margin: 0 }}>{reference.title}</p>
            <a
              href={reference.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {reference.url}
            </a>
          </li>
        ))}
      </ul>
      </cite>
    </div>
  );
};

export default References;


