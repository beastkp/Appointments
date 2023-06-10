import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-800 font-bold mb-4">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <img
              src="https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-videoSixteenByNine3000.jpg?year=2017&h=1688&w=3000&sig=0x34446ee56203045f76c334c39d398eb5&tw=1"
              alt="Doctor"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              Best Facility
            </h3>
            <p className="text-gray-700 mb-4">
              We pride ourselves on offering superior medical care and a range
              of exceptional facilities to ensure the well-being and comfort of
              our patients. Our commitment to excellence is reflected via state
              of art Medical Results
            </p>
            <p className="text-gray-700">
              State-of-the-Art Diagnostic Equipment, Comfortable and Relaxing
              Environment, Highly Skilled and Compassionate Staff, Comprehensive
              Medical Services, Efficient Appointment Management, Collaborative
              Approach to Care
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.5N8utTEdQtqeVQGtBEB-fgHaDZ?pid=ImgDet&rs=1"
              alt="Doctor"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              Better Treatment
            </h3>
            <p className="text-gray-700 mb-4">
              The treatment provided by our Hospital is characterized by a
              patient-centric approach and a commitment to delivering
              high-quality care.
            </p>
            <p className="text-gray-700">
              You can expect exceptional medical care with a focus on advanced
              technology, patient comfort, and comprehensive services. We are
              committed to delivering the highest standards of healthcare,
              supporting you on your journey towards better health and
              well-being.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.ezfWS5PkAGynTaLlhEeVLgHaEK?pid=ImgDet&rs=1"
              alt="Doctor"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              No Extra Expense
            </h3>
            <p className="text-gray-700 mb-4">
              We beleive in providing treatment first and in a reasonable
              expense, there are many schemes that the patient can apply to in
              order to complete the payments
            </p>
            <p className="text-gray-700">
              The expenses at our Hospital can vary depending on several
              factors, including the specific medical services required, the
              complexity of the condition, the duration of treatment, and any
              additional procedures or tests that may be necessary. It is best
              to contact the clinic directly or consult with their
              administrative staff to obtain detailed information about the
              costs associated with specific treatments or services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
