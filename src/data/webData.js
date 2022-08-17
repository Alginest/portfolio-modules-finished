import blogOne from "../img/projectImg/blog0.png";
import blogTwo from "../img/projectImg/blog1.png";
import blogThree from "../img/projectImg/blog2.png";
import blogFour from "../img/projectImg/blog3.png";
import cryptoOne from "../img/projectImg/crypto1.png";
import cryptoTwo from "../img/projectImg/crypto2.png";
import cryptoThree from "../img/projectImg/crypto3.png";
import cryptoFour from "../img/projectImg/crypto4.png";
import movieOne from "../img/projectImg/movie1.png";
import movieTwo from "../img/projectImg/movie2.png";
import movieThree from "../img/projectImg/movie3.png";
import movieFour from "../img/projectImg/movie4.png";
import foodOne from "../img/projectImg/food1.png";
import foodTwo from "../img/projectImg/food2.png";
import foodThree from "../img/projectImg/food3.png";
import foodFour from "../img/projectImg/food4.png";
import lavaOne from "../img/projectImg/lava1.png";
import lavaTwo from "../img/projectImg/lava2.png";
import lavaThree from "../img/projectImg/lava3.png";
import lavaFour from "../img/projectImg/lava4.png";
import shopOne from "../img/projectImg/shop1.png";
import shopTwo from "../img/projectImg/shop2.png";
import shopThree from "../img/projectImg/shop3.png";
import shopFour from "../img/projectImg/shop4.png";
import schoolOne from "../img/projectImg/school1.png";
import schoolTwo from "../img/projectImg/school2.png";
import schoolThree from "../img/projectImg/school3.png";
import schoolFour from "../img/projectImg/school4.png";
import kitchenOne from "../img/projectImg/kitchen1.png";
import kitchenTwo from "../img/projectImg/kitchen2.png";
import kitchenThree from "../img/projectImg/kitchen3.png";
import kitchenFour from "../img/projectImg/kitchen4.png";
import townOne from "../img/projectImg/town1.png";
import townTwo from "../img/projectImg/town2.png";
import townThree from "../img/projectImg/town3.png";
import webTwo from "../img/movie.png";
import webThree from "../img/resto.png";
import webFour from "../img/blog.png";
import webFive from "../img/lava.png";
import webSix from "../img/shop.png";
import webSeven from "../img/town.png";
import webEight from "../img/school.png";
import webNine from "../img/kitchen.png";
import webOne from "../img/webOne.png";

export const webData = [
  {
    id: 0,
    name: "Latos Crypto",
    program: "React-JS / Mui",
    images: [cryptoOne, cryptoTwo, cryptoThree, cryptoFour],
    image: webOne,
    about:
      "Latos Crypto is a platform that let's u explore all about crpyto,and the market changes live with the coin gecko API.For all the crypto enthusiast and enjoyers of the crypto market.",
    link: "https://latos-crypto.netlify.app/",
    project: "https://github.com/Alginest/Latos-Crypto-Final",
  },
  {
    id: 1,
    name: "Latos Movies",
    program: "React-JS / Mui",
    image: webTwo,
    images: [movieOne, movieTwo, movieThree, movieFour],
    about:
      "Latos Movie is a platform that let's u explore all movie's, it has the newest releases of all the upcoming movies and shows, using the moviedb API.",
    link: "https://imoviess.netlify.app/",
    project: "https://github.com/Alginest/IMovie-Project-Finished-",
  },
  {
    id: 2,
    name: "Latos Restourant",
    program: "React-JS / Mui",
    image: webThree,
    images: [foodOne, foodTwo, foodThree, foodFour],
    about:
      "Latose is a website made for a small food service, it contains a amazing menu, with a menu planner that's using the spooncular API to get foods based on calories u wanna intake.",
    link: "https://latosfood.netlify.app/",
    project: "https://github.com/Alginest/spoonecular-meal-plan-latos",
  },

  {
    id: 3,
    name: "Latos Blog",
    program: "React-JS / Mui",
    images: [blogOne, blogTwo, blogThree, blogFour],
    image: webFour,
    about:
      "Latos blog is a blogging website for people who like to share thought's about the world.Using Firebase google login authentication u can post massages on the post page.",
    link: "https://blog-website-4bdaa.web.app/posts",
    project: "https://github.com/Alginest/Blog-Website-Finished",
  },
  {
    id: 4,
    name: "Lava Mobile",
    about:
      "Lava Mobile a small but amazingly aesthetic looking website, for mobile product management.Inspired by the lava template, the coloring looks amazing.",
    program: "React-JS",
    image: webFive,
    images: [lavaOne, lavaTwo, lavaThree, lavaFour],
    link: "https://lava-mobile.netlify.app/",
    project: "https://github.com/Alginest/Lava-Mobile-Page",
  },
  {
    id: 5,
    name: "Zay Shop",
    program: "React-JS / Mui",
    image: webSix,
    about:
      "Zay Shop a is a platform that looks like a e-commerce website, it has a slick design.I love designing simple but clean websites with a'lot of gadgets.",
    images: [shopOne, shopTwo, shopThree, shopFour],
    link: "https://zayshop.netlify.app/",
    project: "https://github.com/Alginest/Zay-Shop-Website",
  },
  {
    id: 6,
    name: "The Town",
    program: "React-JS",
    image: webSeven,
    link: "https://the-town.netlify.app/",
    images: [townOne, townTwo, townThree],
    about:
      "The Town a simple website,one of the first one's i designed using react, its a simple template design  with a beautiful aesthetic and relaxing look.I made a'lot of progress since this one.",
    project:
      "https://github.com/Alginest/The-Town-Slider-Done-with-Full-responsivnes-for-all-screens",
  },
  {
    id: 7,
    name: "Grad School",
    program: "Javascript",
    image: webEight,
    images: [schoolOne, schoolTwo, schoolThree, schoolFour],
    about:
      "Also one of the first websites i designed,using javascript here while i was learning it.It's one page design with a video background on the top.",
    link: "https://grad-schools.netlify.app/",
    project: "https://github.com/Alginest/Grad-School-Website",
  },
  {
    id: 8,
    name: "Klassy Caffe",
    program: "Javascript",
    image: webNine,
    images: [kitchenOne, kitchenTwo, kitchenThree, kitchenFour],
    about:
      "Also one of my older designs,but i loved the look on this website, it's functions are made using javascript.After this website my react journey started.",
    link: "https://klassy-kitchen.netlify.app/",
    project: "https://github.com/Alginest/Klassy-Cafe-Website-Final",
  },
];
