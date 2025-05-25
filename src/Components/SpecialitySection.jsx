import React from "react";

const specialities = [
  {
    title: "General physician",
    img: "https://img.icons8.com/ios-filled/100/000000/doctor-male.png",
  },
  {
    title: "Gynecologist",
    img: "https://img.icons8.com/ios-filled/100/000000/pregnant.png",
  },
  {
    title: "Dermatologist",
    img: "https://img.icons8.com/ios-filled/100/000000/acne.png",
  },
  {
    title: "Pediatricians",
    img: "https://img.icons8.com/ios-filled/100/000000/baby.png",
  },
  {
    title: "Neurologist",
    img: "https://img.icons8.com/ios-filled/100/000000/brain.png",
  },
  {
    title: "Gastroenterologist",
    img: "https://img.icons8.com/ios-filled/100/000000/stomach.png",
  },
];

const SpecialitySection = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-2">Find by Speciality</h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  justify-center items-center max-w-6xl mx-auto">
        {specialities.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
          >
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <img src={item.img} alt={item.title} className="w-12 h-12" />
            </div>
            <p className="text-sm font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialitySection;
