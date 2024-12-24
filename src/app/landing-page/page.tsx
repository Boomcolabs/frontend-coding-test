import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ModelList from './components/ModelList';
import NavBar from './components/NavBar';
import Reasons from './components/Reasons';
import SuccessStories from './components/SuccessStories';
import '@/styles/mainPage.scss';

export default function LandingPage() {
    return (
        <div className="main">
            <NavBar />
            <Banner />
            <ModelList />
            <SuccessStories />
            <Reasons />
            <Contact />
            <Footer />
        </div>
    );
}
