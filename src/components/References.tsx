import React from "react";

const references = [
  {
    title: "Karin Bartl et Michel al-Maqdissi, « Archaeological Survey in the Hama Region 2003–2005 », Syria [En ligne], HS IV | 2016, mis en ligne le 01 décembre 2018, consulté le 24 novembre 2024.",
    url: "https://journals.openedition.org/syria/5107",
  },
  {
    title: "Astour, M. C. (1977). Tunip-Hamath and Its Region: A Contribution to the Historical Geography of Central Syria. Orientalia, 46(1), 51–64.",
    url: "http://www.jstor.org/stable/43074742",
  },
  {
    title: "Hill, D. R. (1991). Mechanical Engineering in the Medieval Near East. Scientific American, 264(5), 100–105.",
    url: "http://www.jstor.org/stable/24936907",
  },
  {
    title: "D. W. W. Stevenson. (1992). A Proposal for the Irrigation of the Hanging Gardens of Babylon. Iraq, 54, 35–55.",
    url: "https://www.jstor.org/stable/4200351",
  },
  {
    title: "Waterwheel in Syria. Alternative Energy, edited by K. Lee Lerner, et al., 2nd ed., UXL, 2012. Gale In Context: Science,",
    url: "https://link.gale.com/apps/doc/PC4205137010/SCIC?u=ncc_paul&sid=ebsco&xid=efe45fc5",
  },
  {
    title: "Laessøe, J. (1953). Reflexions on Modern and Ancient Oriental Water Works. Journal of Cuneiform Studies, 7(1), 5–26.",
    url: "https://www.jstor.org/stable/1359477",
  },
  {
    title: "Wilson, A. (2002). Machines, Power and the Ancient Economy. The Journal of Roman Studies, 92, 1–32.",
    url: "https://www.jstor.org/stable/3184857",
  },
  {
    title: "The American Society of Mechanical Engineers. (2006). Noria al-Muhammadiyya Historic Mechanical Engineering Landmark.",
    url: "https://www.asme.org/wwwasmeorg/media/resourcefiles/aboutasme/who%20we%20are/engineering%20history/landmarks/241-noria-al-muhammadiyya.pdf",
  },
  {
    title: "Syria, Hama, Noria on the Orontes River",
    url: "https://search.worldcat.org/search?q=Syria%2C+Hama%2C+Noria+on+the+Orontes+River&offset=1",
  },
  {
    title: "Noria al-Muhammadiyya. (n.d.) In Islamic Art in the Mediterranean Exhibition Trails",
    url: "https://explore.museumwnf.org/themes/t-1/c-sy/l-185/m-1197/lan-en",
  },
  {
    title: "Hama, Noria on the Orontes River",
    url: "https://www.archnet.org/sites/21020",
  },
  {
    title: "Waal Hafian Norias (nawa’ir) of Hama in Discover Islamic Art, Museum With No Frontiers, 2024. 2024.",
    url: "https://islamicart.museumwnf.org/database_item.php?id=monuments;ISL;sy;Mon01;32;en",
  },
  {
    title: "Orontes River Basin. Water Inventory",
    url: "https://waterinventory.org/sites/waterinventory.org/files/chapters/Chapter-07-Orontes-River-Basin-web_1.pdf",
  },
  {
    title: "Design and Nature II, M. W. Collins & C. A. Brebbia (Editors)  2004. Aesthetic tradition and ancient technology: A case study of the water-wheel. WIT Press,",
    url: "https://www.witpress.com/Secure/elibrary/papers/DN04/DN04011FU.pdf",
  },
  {
    title: " Derry, T. K. (Thomas Kingston), 1905. A Short History of the Middle East from the earliest times to A.D. 1900",
    url: "https://archive.org/details/shorthistoryofte0000derr_w2m5/page/n9/mode/2up",
  },
];


const References: React.FC = () => {
  return (
    <div id="references" className="components">
      <h2>References</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {references.map((reference, index) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            <p style={{ margin: 0 }}>
              {reference.title}
            </p>
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
    </div>
  );
};

export default References;

