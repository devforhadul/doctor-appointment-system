import React, { useState } from "react";

const departments = [
  { label: "🫀 Cardiology", value: "Cardiology" },
  { label: "🧠 Neurology", value: "Neurology" },
  { label: "🩺 General Medicine", value: "General Medicine" },
  { label: "🔪 General Surgery", value: "General Surgery" },
  { label: "🦴 Orthopedics", value: "Orthopedics" },
  { label: "👶 Pediatrics", value: "Pediatrics" },
  { label: "👩‍⚕️ Gynecology & Obstetrics", value: "Gynecology & Obstetrics" },
  { label: "👂 ENT (Ear, Nose, Throat)", value: "ENT" },
  { label: "👁 Ophthalmology", value: "Ophthalmology" },
  { label: "😬 Dentistry", value: "Dentistry" },
  { label: "🫁 Pulmonology", value: "Pulmonology" },
  { label: "🩸 Hematology", value: "Hematology" },
  { label: "🧬 Oncology", value: "Oncology" },
  { label: "🧫 Pathology", value: "Pathology" },
  { label: "🧂 Endocrinology", value: "Endocrinology" },
  { label: "🧪 Nephrology", value: "Nephrology" },
  { label: "🧻 Gastroenterology", value: "Gastroenterology" },
  { label: "🧴 Dermatology", value: "Dermatology" },
  { label: "🧘 Psychiatry", value: "Psychiatry" },
  { label: "🧑‍⚕️ Urology", value: "Urology" },
  { label: "🧠 Neurosurgery", value: "Neurosurgery" },
  { label: "🦵 Rheumatology", value: "Rheumatology" },
  { label: "🚑 Emergency Medicine", value: "Emergency Medicine" },
];

const AddDoctor = () => {
  const [file, setFile] = useState(null);
  const [addChamber, setAddChamber] = useState(false);

  console.log(addChamber);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    //const speciality = form.speciality.value;
  };

  // Function to convert 0 → A, 1 → B, etc.
const getAlphabet = (index) => String.fromCharCode(65 + index);
  

  return (
    <section className="">
      <h3>Add Doctor</h3>
      <div>
        <div className="flex items-center">
          <div className="bg-white border-2 border-blue-400 rounded-lg p-8 w-full max-w-4xl">
            <form className="space-y-6" onSubmit={handleAddDoctor}>
              <div className="">
                {/* Avatar Upload */}
                <div className="flex flex-col mb-3">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center  text-gray-400 mb-2">
                    {file?.type?.startsWith("image") && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                  </div>
                  <input
                    type="file"
                    name=""
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="w-25"
                  />

                  <span className="text-xs text-gray-500">
                    Upload doctor picture
                  </span>
                </div>
                {/* Form Inputs */}
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Doctor name
                    </label>
                    <input
                      type="text"
                      placeholder="Doctor full name"
                      name="name"
                      className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  {/* <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Department
                    </label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    name="speciality">
                      <option>General physician</option>
                      <option>Pediatrician</option>
                      <option>Cardiologist</option>
                      <option>Dentist</option>
                      
                    </select>
                  </div> */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Doctor Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Education
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Degrees and Qualifications"
                      className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Specialty
                    </label>
                    <input
                      type="text"
                      placeholder="Example: Pediatric Surgery Specialist"
                      className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Designation & Department *
                    </label>
                    <input
                      type="text"
                      placeholder="Example: Medical Officer (Pediatric Surgery)"
                      className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  {/* Department */}
                  <div className="w-full max-w-md ">
                    <label
                      htmlFor="department"
                      className="block mb-2 font-semibold"
                    >
                      Select Doctor Department:
                    </label>
                    <select
                      id="department"
                      //value={selectedDept}
                      //onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    >
                      <option value="">-- Choose Department --</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept.value}>
                          {getAlphabet(index)}. {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Workplace */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Workplace
                    </label>
                    <input
                      type="text"
                      placeholder="Example: Dhaka Medical College & Hospital"
                      className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  {/* Doctor Experience*/}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">
                      Experience
                    </label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400">
                      <option>1 year</option>
                      <option>2 years</option>
                      <option>3 years</option>
                      <option>5+ years</option>
                    </select>
                  </div>
                  {/* About Me */}
                  <div className="mt-4">
                    <label className="block text-sm text-gray-600 mb-1">
                      About me
                    </label>
                    <textarea
                      placeholder="write about yourself"
                      className="w-full border border-gray-300 rounded px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                  </div>

                  {/* Doctor Chambers */}
                  <div>
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-semibold">
                        Chamber and Appointment:
                      </h2>
                      <div className="flex items-center gap-1">
                        <label className="block text-sm text-gray-600 font-medium">
                          Add more Chamber
                        </label>
                        <button
                          onClick={() => setAddChamber(!addChamber)}
                          className="btn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Chamber place */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Chamber Name
                      </label>
                      <input
                        type="text"
                        placeholder="Example: Ibn sina Medical College & Hospital"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Address */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Chamber Address
                      </label>
                      <input
                        type="text"
                        placeholder="Chamber Full Address"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Vsisiting hour */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Visiting Hour
                      </label>
                      <input
                        type="text"
                        placeholder="Example: 6AM to 8PM (Close Friday)"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Appointment Number * */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Appointment Number
                      </label>
                      <input
                        type="number"
                        placeholder="Example: 018********, 019********"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Fees */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Fees
                      </label>
                      <input
                        type="number"
                        placeholder="Consultancy fee"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>

                  {/* Doctor Chambers 1 */}
                  <div className={`${addChamber && "hidden"}`}>
                    <div className="flex justify-between items-center my-3">
                      <h2 className="text-xl font-semibold">Chamber 1</h2>
                      {/* <div className="flex items-center gap-1">
                        <label className="block text-sm text-gray-600 font-medium">
                          Add more Chamber
                        </label>
                        <button className="btn">+</button>
                      </div> */}
                    </div>
                    {/* Chamber place */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Chamber Name
                      </label>
                      <input
                        type="text"
                        placeholder="Example: Ibn sina Medical College & Hospital"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Address */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Chamber Address
                      </label>
                      <input
                        type="text"
                        placeholder="Chamber Full Address"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Vsisiting hour */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Visiting Hour
                      </label>
                      <input
                        type="text"
                        placeholder="Example: 6AM to 8PM (Close Friday)"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Appointment Number * */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Appointment Number
                      </label>
                      <input
                        type="number"
                        placeholder="Example: 018********, 019********"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    {/* Fees */}
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Fees
                      </label>
                      <input
                        type="number"
                        placeholder="Consultancy fee"
                        className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Add doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
