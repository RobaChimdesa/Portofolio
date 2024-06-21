import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
// import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="contact h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  Feel free to reach out to us if you have any questions or would like to discuss a potential collaboration.
                </p>
                <p className="text-lg mb-4">
                  You can contact us by email, phone, or using the form below.
                </p>
                <div className="space-y-4">
                  <p className="text-lg">
                    <span className="font-bold">Email:</span> info@company.com
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Phone:</span> +1 (555) 123-4567
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Address:</span> 123 Main Street, Anytown, CA 12345
                  </p>
                </div>
              </div>
              {/* <div>
                <ContactForm />
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;