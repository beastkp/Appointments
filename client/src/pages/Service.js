import React from "react";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4"></div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4">We at HCare</h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            aliquam elit. Etiam auctor risus quis tempus iaculis. Fusce dapibus
            elit non malesuada aliquet. Phasellus fermentum risus id tortor
            pharetra vehicula. Donec sem ligula, pharetra a malesuada vel,
            lobortis id turpis. Duis sagittis sed felis at mattis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-xl font-semibold mb-2">
                Medical Consultations
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                posuere lectus sed eleifend ultricies.
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
              <p className="text-gray-700">
                Ut aliquam eget nunc sed vestibulum. Proin interdum sapien id
                diam convallis, vel placerat est hendrerit.
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-xl font-semibold mb-2">
                Specialized Treatments
              </h3>
              <p className="text-gray-700">
                Fusce efficitur, quam eu sagittis elementum, lectus mauris
                semper libero, in scelerisque nunc leo auctor erat.
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-xl font-semibold mb-2">
                Intensive Care Units (ICU)
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                posuere lectus sed eleifend ultricies.
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-xl font-semibold mb-2">
                Rehabilitation Services
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                posuere lectus sed eleifend ultricies.
              </p>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-xl font-semibold mb-2">Best Doctors</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                posuere lectus sed eleifend ultricies.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Services;
