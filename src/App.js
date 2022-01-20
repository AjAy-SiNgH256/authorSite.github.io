import './App.css';
import './responsive.css';
import Header from './components/header';
import Banner from './components/banner';
import Testimonials from './components/testimonials';
import Portfolio from './components/portfolio';
import Pricing from './components/pricing';
import Team from './components/team';
import Review from './components/review';
import Footer from './components/footer';

function App() {
  const testimonials = [
    {
      image: "assets/service-1.png",
      heading: 'Custom Designs',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnText: "Read More",
      btnLink: "#"
    },
    {
      image: "assets/service-2.png",
      heading: 'Web Designs',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      btnText: "Read More Content",
      btnLink: "#"
    },
    {
      image: "assets/service-3.png",
      heading: 'Blog Pages',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnText: "Read More",
      btnLink: "#"
    },
    {
      image: "assets/service-4.png",
      heading: 'Mobile Friendly',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      btnText: "Read More",
      btnLink: "#"
    }
  ]
  // const team = [
  //   {
  //     image: "assets/circle.png",
  //     heading: 'Adrian Thomson',
  //     position: 'CEO & Founder',
  //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //   },
  //   {
  //     image: "assets/circle.png",
  //     heading: 'Narate Ketram',
  //     position: 'Creative Director',
  //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //   },
  //   {
  //     image: "assets/circle.png",
  //     heading: 'Fernando Comet',
  //     position: 'CEO & Founder',
  //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //   },
  //   {
  //     image: "assets/circle.png",
  //     heading: 'Adedayo saheed',
  //     position: 'CEO & Founder',
  //     text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //   }
  // ]
  const pricing = [
    {
      pricingHeader: 'Basic',
      offerPrice: '$5.01/ Per Month',
      btnText: 'Buy now'
    },
    {
      pricingHeader: 'Pro',
      offerPrice: '$10.01/ Per Month',
      btnText: 'Buy now'
    },
    {
      pricingHeader: 'Premium',
      offerPrice: '$20.01/ Per Month',
      btnText: 'Buy now'
    }
  ]
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className='testimonials-outer-main-block'>
        {
          testimonials.map((presentData, index) => (
            <Testimonials key={index} data={presentData}/>
          ))
        }
      </div>
      <Portfolio /> 
      <Team team={team}/>
      <Pricing pricing={pricing}/>
      <Review />
      <Footer />
    </div>
  );
}

export default App;
