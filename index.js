const data = [
  { id: "1", name: "Lunar Horzon Lounge" },
  { id: "2", name: "Stellar Sky View" },
  { id: "3", name: "Galactic Cafe" },
  { id: "4", name: "Cosmic Corner" },
  { id: "5", name: "Asteroid Alley" },
  { id: "6", name: "Neptune's Nook" },
  { id: "7", name: "Saturn's Sanctuary" },
  { id: "8", name: "Venus Veranda" },
  { id: "9", name: "Mars Matrix" },
  { id: "10", name: "Jupiter Junction" },
  { id: "11", name: "Mercury Melange" },
  { id: "12", name: "Uranus Uphoria" },
  { id: "13", name: "Pluto's Paradise" },
  { id: "14", name: "Alpha Centauri Arcade" },
  { id: "15", name: "Betelgeuse Bistro" },
  { id: "16", name: "Sirius Salad Bar" },
  { id: "17", name: "Andromeda Atelier" },
  { id: "18", name: "Orion's Outpost" },
  { id: "19", name: "Cassiopeia Cantina" },
  { id: "20", name: "Pegasus Pavilion" },
  { id: "21", name: "Aquila Ascent" },
  { id: "22", name: "Lyra Lounge" },
  { id: "23", name: "Cygnus Cafe" },
  { id: "24", name: "Crux Corner" },
  { id: "25", name: "Leo's Lair" },
  { id: "26", name: "Virgo's Venue" },
  { id: "27", name: "Libra's Lookout" },
  { id: "28", name: "Scorpio's Shadow" },
  { id: "29", name: "Sagittarius Saloon" },
  { id: "30", name: "Capricorn Cavern" },
  { id: "31", name: "Aquarius Abyss" },
  { id: "32", name: "Pisces Pool" },
  { id: "33", name: "Ophiuchus Observatory" },
  { id: "34", name: "Orion Outlook" },
  { id: "35", name: "Taurus Tavern" },
  { id: "36", name: "Gemini Gallery" },
  { id: "37", name: "Cancer's Cradle" },
  { id: "38", name: "Leo's Library" },
  { id: "39", name: "Virgo's Vault" },
  { id: "40", name: "Libra's Laboratory" },
  { id: "41", name: "Scorpio's Study" },
  { id: "42", name: "Sagittarius' Sanctuary" },
  { id: "43", name: "Capricorn's Castle" },
  { id: "44", name: "Aquarius' Arcade" },
  { id: "45", name: "Pisces' Patio" },
  { id: "46", name: "Ophiuchus' Oasis" },
  { id: "47", name: "Orion's Odyssey" },
  { id: "48", name: "Taurus' Theater" },
  { id: "49", name: "Gemini's Gym" },
  { id: "50", name: "Cancer's Courtyard" },
  { id: "51", name: "Leo's Lounge" },
  { id: "52", name: "Virgo's Veranda" },
  { id: "53", name: "Libra's Labyrinth" },
  { id: "54", name: "Scorpio's Spa" },
  { id: "55", name: "Sagittarius' Studio" },
  { id: "56", name: "Capricorn's Classroom" },
  { id: "57", name: "Aquarius' Alcove" },
  { id: "58", name: "Pisces' Poolroom" },
  { id: "59", name: "Ophiuchus' Observatory" },
  { id: "60", name: "Orion's Outpost" },
];

const imgSrcs = [
  "https://images.unsplash.com/photo-1718556256225-82afc1b30580?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1717866545967-68fdae38861b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1716749231987-63c02babbdfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713028531390-eca66ff81a27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
];

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const gallery = document.querySelector(".gallery");
  const numberOfItems = data.length;
  const radius = 1100;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const angleIncrement = (2 * Math.PI) / numberOfItems;

  for (let i = 0; i < numberOfItems; i++) {
    const item = document.createElement("div");
    item.className = "item";
    const p = document.createElement("p");
    const count = document.createElement("span");
    p.textContent = data[i].name;
    count.textContent = `(${Math.floor(Math.random() * 50) + 1})`;
    item.appendChild(p);
    p.appendChild(count);
    gallery.appendChild(item);

    const angle = i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const rotation = (angle * 180) / Math.PI;

    gsap.set(item, {
      x: x + "px",
      y: y + "px",
      rotation,
    });

    item.addEventListener("mouseover", () => {
      const imgSrc = imgSrcs[Math.floor(Math.random() * imgSrcs.length)];
      const img = document.createElement("img");
      img.src = imgSrc;
      img.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      cursor.appendChild(img);

      gsap.to(img, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.out",
      });
    });

    item.addEventListener("mouseout", () => {
      const imgs = cursor.getElementsByTagName("img");
      if (imgs.length) {
        const lastImg = imgs[imgs.length - 1];
        Array.from(imgs).forEach((img, index) => {
          if (img !== lastImg) {
            gsap.to(img, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: 1,
              ease: "power3.out",
              onComplete: () => {
                setTimeout(() => {
                  img.remove();
                }, 1000);
              },
            });
          }
        });

        gsap.to(lastImg, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "power3.out",
          delay: 0.25,
        });
      }
    });
  }

  const updatePostion = () => {
    const scrollAmout = window.scrollY * 0.001;
    document.querySelectorAll(".item").forEach((item, index) => {
      // 更新每个ITEM的角度和偏移
      const angle = index * angleIncrement + scrollAmout;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const rotation = (angle * 180) / Math.PI;
      gsap.to(item, {
        x: x + "px",
        y: y + "px",
        rotation,
        duration: 0.05,
        ease: "elastic.out(3, 0.3)",
      });
    });
  };

  updatePostion();

  document.addEventListener("scroll", updatePostion);

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX - 150 + "px",
      y: e.clientY - 200 + "px",
      duration: 1,
      ease: "power3.out",
    });
  });
});
