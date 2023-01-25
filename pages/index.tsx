import Banner from '../components/Homepage/Banner';
import Category from '../components/Homepage/Category';
import Events from '../components/Homepage/Events';
import HowItWorks from '../components/Homepage/HowItWorks';
import Newsletter from '../components/Homepage/Newsletter';
import MainLayout from '../components/Layouts/MainLayout';
import { useApp } from '../context/AppContext';

const IndexPage = () => {
  const { events }: any = useApp();
  return (
    <MainLayout title='Evema | Decentralized events booking & ticketing system'>
      <section>
        <div className=''>
          <section className='bg-white pb-8 lg:pb-16'>
            <Banner />
            <HowItWorks />
          </section>
          <section className='bg-[#1F3578]/50 pb-8 lg:pb-16'>
            <Events events={events} />
          </section>
          <section className='bg-white pb-8 lg:pb-12 '>
            <Category />
          </section>
          <section className='bg-[#1F3578]/50 pb-8 lg:pb-12 '>
            <Newsletter />
          </section>
        </div>
      </section>
    </MainLayout>
  );
};

export default IndexPage;

// // This gets called on every request
// export async function getServerSideProps(context: any) {
//   // Fetch data from external API
//   const res: any = getAllEvents();
//   const data = JSON.parse(res);

//   // Pass data to the page via props
//   return { props: { data } };
// }
