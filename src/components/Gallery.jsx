import React, { useState } from "react";
import "../styles/Gallery.css";

const images = [
  { id: 1, src: "10.png", name: "Chair", type: "Wooden Furniture", likes: 210 },
  { id: 2, src: "1.png", name: "Chair", type: "sofa set", likes: 98 },
  { id: 3, src: "2.png", name: "Kitchen and dining set", type: "furniture", likes: 150 },
  { id: 4, src: "3.png", name: "Cool Pet Stuf", type: "Other", likes: 320 },
  { id: 5, src: "4.png", name: "Wood Table", type: "Furniture", likes: 320 },
  { id: 6, src: "5.png", name: "KITCHEN STUFF", type: "Other, Tableware", likes: 53 },
  { id: 7, src: "6.png", name: "Colourfull Lamps", type: "Lighiting, textile", likes: 43 },
  { id: 8, src: "7.png", name: "COOL MODERN LAMP", type: "Other, textile", likes: 15 },
  { id: 9, src: "8.png", name: "AFRICAN SCULPTURE", type: "sculpture", likes: 20 },
  { id: 10, src: "9.png", name: "AMAZING HANGER", type: "Other", likes: 13 },
  { id: 11, src: "11.png", name: "AMAZING LAMP", type: "Lighting", likes: 30 },
  { id: 12, src: "12.png", name: "FRUIT HOLDER", type: "Other, Tableware", likes: 34 }
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 items

  const showMore = () => {
    setVisibleCount((prev) => prev + 6); // Load 6 more each time
  };

  return (
    <>
      <div className="gallery">
        {images.slice(0, visibleCount).map((img) => (
          <div className="gallery-item" key={img.id}>
            <img src={img.src} alt={img.name} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>{img.name}</h3>
                <p>{img.type}</p>
                <span>❤️ {img.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show button only if there are hidden images */}
      {visibleCount < images.length && (
        <h5
          style={{
            textAlign: "center",
            margin: "30px",
            color: "gray",
            cursor: "pointer"
          }}
          onClick={showMore}
        >
          + MORE ITEMS
        </h5>
      )}
    </>
  );
};

export default Gallery;
