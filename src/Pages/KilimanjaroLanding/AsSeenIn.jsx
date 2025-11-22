import React from "react";

const AsSeenIn = () => {
  const items = [
    {
      id: 1,
      image:
        "https://www.contiki.com/media/qr1ndoz0/group-sat-in-boat-in-peru.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1200&height=600&quality=80", // replace with your exact image
      title: "Contiki travel brochure",
      text: "Discover everything that makes a Contiki trip unique, from hassle-free booking to immersive experiences and local guides on your trip.",
      link: "Find out more",
    },
    {
      id: 2,
      image:
        "https://evarest-adventures.com/uploads/6%20Days%20Umbwe%20Route%20Kilimanjaro%20Climb_1618822290.jpg",
      title: "Travel requirements & visa guide",
      text: "Looking for up-to-date information about the latest visa and travel document requirements? We’ve got you covered with this guide.",
      link: "Find out more",
    },
    {
      id: 3,
      image:
        "https://cdn2.rhinoafrica.com/thumbnails/media/_en/destinations/root/africa/east-africa/tanzania/kilimanjaro-arusha/_img/4516/image-thumb__4516__background-cover/mt-kilimanjaro-landscape-tanzania.02943757.jpg",
      title: "Travel Guides",
      text: "Ready for your next trip? Get a feel for each of the world’s magnificent continents with our helpful travel guides.",
      link: "Find out more",
    },
    {
      id: 4,
      image:
        "https://www.algiftcards.com/blog/wp-content/uploads/Gifts-for-travel-Lovers-2.jpg",
      title: "Travel gift card",
      text: "They say travel is the only thing you can buy that makes you richer. A Contiki gift card truly is the gift that keeps on giving.",
      link: "Get yours now",
    },
    {
      id: 5,
      image:
        "https://www.costsavertour.com/media/1rzp23t1/three-local-female-weavers-in-colourful-traditional-local-dress-including-festooned-hats-weaving-colourful-alpaca-wool-on-the-ground-chumbe-community-peru-1153913879.jpg",
      title: "Make Travel Matter",
      text: "We know all about the power of travel. Contiki’s mission is to MAKE TRAVEL MATTER™.",
      link: "Find out more",
    },
    {
      id: 6,
      image:
        "https://mpforest.co.in/image/tour/large/68282c3a2d834-mukki-zone-safari-6.jpg",
      title: "Contact us 24/7",
      text: "Need help anytime? We're just one call away. You can also write to us.",
      link: "Contact us",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 lg:px-18 2xl:px-28 bg-white">
      <h2 className="text-center text-2xl md:text-3xl capitalize font-bold mb-4">
        As seen in
      </h2>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
        Welcome to the Complete Travel Experience for 18–35s. Incredible
        experiences in incredible places. All sorted for you by the travel
        experts. All you need to do is show up.
      </p>

      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
        Journalist or partnership rep? Want the latest press info or see what’s
        already been said about us? Look no further 👀
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="font-semibold text-[24px] mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.text}
              </p>

              <button className=" font-semibold underline">
                {item.link}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AsSeenIn;
