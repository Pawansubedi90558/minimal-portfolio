import React from 'react';

const DownloadResume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Resume.pdf'; // Update with the correct path to your resume
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
};

export default DownloadResume;
