import hos from "../../../image/hosein.jpg";
export const ProfileUser = () => {
  return (
    <div className="flex  justify-center  w-full items-center h-4/5 rounded-3xl bg-gray-100 mt-3 mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 w-4/5 flex flex-col">
        <div className="text-center">
          <h1>Tech Nyx</h1>
        </div>
        {/* two line */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Hosein Gholami</h2>
            <p>Front-End Developer</p>
          </div>
          <div>
            <img
              src={hos}
              alt="User Avatar"
              className="rounded-full w-[200px] "
            />
          </div>
        </div>
        {/* three line */}

        <div>
          <p className="text-gray-600">johndoe@example.com</p>
          <p className="text-gray-600">+989371606733</p>
        </div>
        {/* four line */}
        <div className="border-t border-gray-300 mt-4 pt-4">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
