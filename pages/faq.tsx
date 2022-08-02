import { ReactElement } from 'react';
import Accordion from '../app/components/faq-item';
import AdminLayout from '../app/components/Layout/adminLayout';

const FAQ = () => {
  return (
    <>
      <section className="faq-euphoria">
        <div className="container">
          <h2 className="faq-euphoria-title">Frequently Asked Questions</h2>
          <Accordion
            title="What does it mean to be an enjoyer?"
            content="Decompress and connect. An enjoyer’s role is to simply enjoy. Sign up to have an immersive 
            playful experience. Interact with creators via messages, video calls, and special requests."
          />
          <Accordion
            title="What does it mean to be an enjoyer?"
            content="Creators produce alluring content, and their focus is to connect with enjoyers."
          />
          <Accordion
            title="How old do I have to be to join Euporia at Seven?"
            content="All parties MUST be 18 or older."
          />
          <Accordion
            title="How do I pay creators?"
            content="You can support creators by tipping them, requesting personalized content, and subcribing to their profile."
          />
          <Accordion
            title="Is Euphoria at Seven an escort site?"
            content="While Euphoria at Seven respects all forms of sex work, we don't encourage or allow any escorting on our platform."
          />
        </div>
      </section>
    </>
  );
};
FAQ.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default FAQ;
