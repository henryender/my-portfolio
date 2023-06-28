import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Blog from '../assests/images/projects/Blog.png'
import Car from '../assests/images/projects/Car.png'
import Covid from '../assests/images/projects/Covid.png'
import Domingo from '../assests/images/projects/Domingo.png'
import Form from '../assests/images/projects/Form.png'
import RealEstate from '../assests/images/projects/RealEstate.png'
import Shopify from '../assests/images/projects/Shopify.png'
import socialMedia from '../assests/images/projects/socialMedia.png'
import Todo from '../assests/images/projects/Todo.png'
import splash from '../assests/images/projects/splash.png'
import Weather from '../assests/images/projects/Weather.png'
import Zara from '../assests/images/projects/Zara.png'
import Resturant from '../assests/images/projects/Resturant.png'
import gym from '../assests/images/projects/gym.png'

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Creating User Friendly Pages",
    des: "Using a mark up language like HTML, CSS styling and Javascript",
  },
  {
    id: 9,
    title: "Content Management",
    des: "Creating dynamic web contents with sanity, graphCMS e.t.c",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Website Maintenance",
    des: "With browser testing and debugging and in depth understanding of the entire web development processess.",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Optimizing Applications",
    des: "This includes knowledge of SEO Principles",
  },
  {
    id: 7,
    icon: <AiFillAppstore />,
    title: "Collaborate with back-end developers",
    des: "Help back end developers with trouble shooting and coding",
  },
  {
    id: 8,
    icon: <SiProgress />,
    title: "Interactive UI and UX",
    des: "Get feedback and build solutions for users, clients or customers",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Responsive Websites",
    des: "Creating fully functional websites that fits across all screen sizes",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UI design",
    des: "Enusure high quality graphic standards, user interface and brand consistency.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Making website live on internet, web deployment and setups",
  },
];


export const ProjectData = [

  {
    id: 10,
    title: 'A Blog with graphCMS',
    des: <div className="highlight-box">
      <h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li>This Application was built on Create React App and MUI components</li>
        <li>Fully Responsive Application styled with CSS</li>
        <li>Page Navigation with React-router-dom </li>
        <li>State Management with react hooks</li>
        <li>Web contents were made dynamic with graphCMS</li>
        <li>Data are fetched with graphql-request and axios</li>
      </ul>
    </div>,
    src: Blog,
    GitLink: 'https://github.com/henryender/morning-rise-blog',
    LiveLink: 'https://morning-rise-blog.vercel.app/'
  },
  {
    id: 22,
    title: 'A Car Showcase App',
    des: <div className="highlight-box">
      <h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li>Project was built on latest Next.JS 13 and TypeScript</li>
        <li>Fully Responsive Application styled with Tailwind CSS</li>
        <li>Next.JS App Router and server side rendering</li>
        <li>Enhanced filtering capabilities</li>
        <li>Well Organised file and folder structure</li>
        <li>Advanced Search and Fetch functionality</li>
      </ul>
    </div>,
    src: Car,
    GitLink: 'https://github.com/henryender/car-hub',
    LiveLink: 'https://car-hub-livid.vercel.app/',
  },
  {
    id: 23,
    title: 'Gym Membership Website',
    des: <div className="highlight-box">
      <h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li>Project built on Vite and TypeScript</li>
        <li>Fully Responsive Application styled with Tailwind CSS</li>
        <li>Animations with Framer Motion</li>
        <li>Smooth Page navigation/ scroll</li>
        <li>Well Organised file and folder structure</li>
        <li>Good state Management with React Hooks</li>
      </ul>
    </div>,
    src: gym,
    GitLink: 'https://github.com/henryender/gym-app',
    LiveLink: 'https://evolve-gym-xi.vercel.app/',
  },

  {
    id: 11,
    title: 'Fetch & Display on Table',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li>A simple Application that fetch data from RESTful API</li>
        <li>Display Fetched data on table </li>
        <li>Table with sort ascending, desending order</li>
        <li>Search and Filter Functions</li>
        <li>Check box functions, mark and delete</li>
        <li> Table data rearrangement</li>
      </ul>
    </div>,
    src: Covid,
    GitLink: 'https://github.com/henryender/covid-table',
    LiveLink: 'https://covid-table-eta.vercel.app/'
  },

  {
    id: 12,
    title: 'Domingo Landing Page',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li>Built entirely on React and Styled with CSS</li>
        <li>This could be customised for different businesses</li>
        <li> Javascript array method was used to map array of objects in the Application </li>
        <li>Proper Data Structure and DOM manipulation</li>
        <li>User Interface was designed from scratch with CSS</li>
        <li>Fully Responsive Website</li>

      </ul>
    </div>,
    src: Domingo,
    GitLink: 'https://github.com/henryender/landing-page2',
    LiveLink: 'https://domingo-landing-page.vercel.app/'
  },
  {
    id: 13,
    title: 'Fully Validated Form',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li> React Project Built on HTML, CSS and Javascript</li>
        <li>Inputs are read, stored in States and managed throughout the Application</li>
        <li>The Form was validated with React-hook-form and Yup resolver</li>
        <li>These validations provide specific rules for input data </li>
        <li>The autocomplete for country and state shows only the states in selected country</li>
        <li>Input are read and displayed on submission or can be sent to Database</li>
      </ul>
    </div>,
    src: Form,
    GitLink: 'https://github.com/henryender/form-validation-app',
    LiveLink: 'https://form-validation-autocomplete-app.vercel.app/'
  },

  {
    id: 14,
    title: 'Real Estate Website',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li> React Project Built on HTML, CSS and Javascript</li>
        <li>Entries are read, stored in States and managed throughout the Application</li>
        <li>Data were fetched from RestApI</li>
        <li>Search and Filter Fetched Data</li>
        <li>With Dependencies like React-carousel, multiple images were displayed nicely</li>
        <li>Fully responsive with grids and flexBox</li>
      </ul>
    </div>,
    src: RealEstate,
    GitLink: 'https://github.com/henryender/real-estate-website',
    LiveLink: 'https://real-estate-website-2yw3.vercel.app/'
  },

  {
    id: 15,
    title: 'Resturant Landing Page',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li> React Project Built on HTML5, CSS3 and Javascript</li>
        <li>It could be cutomised for different businesses</li>
        <li>It is all about UI designs with CSS; z-index and positioning </li>
        <li>Images well responsive and eye catchy fonts</li>
        <li>Smooth Page navigation with react-scroll</li>
        <li>Cross browser HTML5 video player with functions enabled with ES6</li>
      </ul>
    </div>,
    src: Resturant,
    GitLink: 'https://github.com/henryender/resturant-landing-page',
    LiveLink: 'https://resturant-landing-page-lake.vercel.app/'
  },

  {
    id: 16,
    title: 'E-commerce + GraphCMs',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li> React Project Built on HTML5, CSS3 and Javascript</li>
        <li>It is fully dynamic and contents are managed with GraphCMS</li>
        <li>Can be customised to any type of Market and updated dynamically</li>
        <li>Javascript logics were used in DOM manipulation </li>
        <li>Data are constantly fetched with graphql-request and axios</li>
        <li>Smooth Page navigation with react-scroll and react-router-dom</li>
      </ul>
    </div>,
    src: Shopify,
    GitLink: 'https://github.com/henryender/shopify-ecommerce',
    LiveLink: 'https://shopify-ecommerce-mocha.vercel.app/'
  },

  {
    id: 17,
    title: 'Social Media Website',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li> React Project Built on HTML5, CSS3, Javascript and Firebase</li>
        <li>Firebase Authentication for verifying and registering user details</li>
        <li>Sign up, Log in and Log out functions with Loading state</li>
        <li>Firebase Storage for saving user comments, posts and online activities</li>
        <li>Javascript logics were used in DOM manipulation </li>
        <li>Smooth Page navigation with react-scroll and react-router-dom</li>
      </ul>
    </div>,
    src: socialMedia,
    GitLink: 'https://github.com/henryender/social-media-website',
    LiveLink: 'https://social-media-website-alpha.vercel.app/'
  },

  {
    id: 18,
    title: 'Productivity App',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li> React Project Built on HTML5, CSS3, Javascript </li>
        <li>Most basic react application</li>
        <li>Create, Edit, Read, Update and Delete inputs or enteries</li>
        <li>Javascript logics were used in DOM manipulation </li>
        <li>The logic is similar to transfering or removing lists, names, data from tables.</li>
        <li>Fully responsive with grids and Flexbox </li>
      </ul>
    </div>,
    src: Todo,
    GitLink: 'https://github.com/henryender/TodoAppCode',
    LiveLink: 'https://todo-app-black-sigma.vercel.app/'
  },

  {
    id: 19,
    title: 'Get Weather Condition',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
      <ul className="highlight-text">
        <li> React Project Built on HTML5, CSS3, Javascript </li>
        <li>A powerful autocomplete to filter locations based on entries</li>
        <li>Data are fetched on selection with nice loading state and Error handling</li>
        <li>Javascript logics were used in DOM manipulation </li>
        <li>State Management with useContext & useState hook</li>
        <li>Fully responsive with grids and Flexbox </li>
      </ul>
    </div>,
    src: Weather,
    GitLink: 'https://github.com/henryender/weather-app',
    LiveLink: 'https://weather-app-omega-ten-98.vercel.app/'
  },

  {
    id: 20,
    title: 'Zara Shop',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
    <ul className="highlight-text">
      <li> React Project Built on HTML5, CSS3, Javascript </li>
      <li>This can be customised to any business or product sales page</li>
      <li>Javascript logics were used in DOM manipulation </li>
      <li>Deigns are interactive with notifications on DOM manipulation</li>
      <li>React-router-dom and react-scroll were used for somooth naviagtion</li>
      <li>Fully responsive fonts and images with grids and Flexbox </li>
    </ul>
  </div>,
    src: Zara,
    GitLink: 'https://github.com/henryender/e-commerce-shop',
    LiveLink: 'https://e-commerce-shop-pearl.vercel.app/'
  },

  {
    id: 21,
    title: 'Splash Event Planners',
    des: <div className="highlight-box"><h2 className="highlight">HighLights of the Project</h2>
    <ul className="highlight-text">
      <li> React Project Built on HTML5, CSS3, Javascript. </li>
      <li>This can be customised to any business landing page.</li>
      <li>CSS theming with light and dark mode functions.</li>
      <li>Nice and beautiful font and image animation, image collage.</li>
      <li>Fully responsive fonts and images with grids and Flexbox. </li>
    </ul>
  </div>,
    src: splash,
    GitLink: 'https://github.com/henryender/splash-event-planners',
    LiveLink: 'https://splash-event-planners.vercel.app/'
  },
]