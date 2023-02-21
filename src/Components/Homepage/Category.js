import React from "react";

const Category = () => {
  return (
    <div className="flex justify-center py-5 dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
      <div className="flex justify-between w-10/12">
        <div>
          <img src="./Electronics.png" alt="laptop" />
        </div>
        <div>
          <img src="./Fashion.png" alt="laptop" />
        </div>
        <div>
          <img src="./Appliances.png" alt="laptop" />
        </div>
        <div>
          <img src="./Babies.png" alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default Category;
