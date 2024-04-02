import React, { useState } from 'react';

const options = [
  {
    id: 1,
    icon: 'student.svg',
    label: 'Student',
    description: 'Soon to be enrolled',
  },
  // Add other options similarly
];

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-2 bg-green-500" style={{ width: `${progress}%` }}></div>
  );
};

const Option = ({ option, onSelect }) => {
  return (
    <div
      className="flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(option.id)}
    >
      <div className="flex items-center space-x-2">
        <img src={option.icon} alt={option.label} className="w-6 h-6" />
        <p className="font-bold">{option.label}</p>
      </div>
      <p>{option.description}</p>
    </div>
  );
};

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSelect = (id) => {
    setSelectedOption(id);
    setProgress(20);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <ProgressBar progress={progress} />
      <h1 className="text-xl font-bold mb-2 text-center">Which describes you best?</h1>
      <p className="text-gray-600 mb-4 text-center">
        This will help us personalize your experience.
      </p>
      <div className="space-y-4">
        {options.map((option) => (
          <Option
            key={option.id}
            option={option}
            onSelect={handleSelect}
            disabled={selectedOption !== null}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className={`py-2 px-4 rounded ${
            selectedOption !== null ? 'bg-black text-white' : 'bg-gray-400'
          }`}
          disabled={selectedOption === null}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Form;
