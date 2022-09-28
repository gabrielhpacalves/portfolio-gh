import Description from '../../components/Description';
import CardsContainer from '../../components/CardsContainer';
import Profile from '../../components/Profile';

const Page = () => {
    return (
        <main className="main-container">
        <section className="main-content">
          <Description />
          <CardsContainer />
        </section>

        <Profile />
      </main>
    );
}

export default Page;