import { useState } from 'react';

const messages = [
  "Are you sure? ",
  "Really really sure? ",
  "Think again! ",
  "You're breaking my heart! ",
  "Please reconsider! ",
  "Give it another thought! ",
  "Don't do this to me! ",
  "Maybe click the other button? ",
  "I'll be very sad! ",
  "Come on, say yes! ",
  "Pretty please? ",
  "I'll wait forever! ",
  "Just one yes! ",
  "Make my day special! ",
  "My heart beats for you! ",
  "Together forever? ",
  "You're my everything! ",
  "Let's write our story! ",
  "Last few chances! ",
  "Final chance to say yes! ",
];

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [yesScale, setYesScale] = useState(1);

  const handleNoClick = () => {
    if (noCount < 20) {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 50);
      setNoButtonStyle({ position: 'absolute', left: `${newX}px`, top: `${newY}px` });
      alert(messages[noCount]);
      setNoCount(prev => prev + 1);
    } else {
      alert("Blee, I refuse your refusal! 😤💝");
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 50);
      setNoButtonStyle({ position: 'absolute', left: `${newX}px`, top: `${newY}px` });
    }
    setYesScale(prev => prev + 1);
  };

  if (showSuccess) {
    return (
      <div className="h-screen bg-pink-100 flex flex-col items-center justify-center space-y-8 p-4 success-container">
        <h1 className="text-5xl font-bold text-pink-600 text-center mb-8">
          thank you for your consideration 
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {'(～￣▽￣)～'.split('').map((emoji, i) => (
            <span key={i} className="text-6xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-12">
        <h1 className="text-6xl font-bold text-pink-600 mb-8">
           is it unrequited (from my pov)?
        </h1>
        <div className="flex flex-wrap justify-center gap-8 relative">
          <button
            onClick={() => setShowSuccess(true)}
            style={{
              transform: `scale(${yesScale})`,
              transition: 'transform 0.3s ease'
            }}
            className="yes-button relative px-12 py-6 bg-pink-500 text-white text-xl rounded-full hover:bg-pink-600 transition-all flex items-center space-x-3"
          >
            <span>Yes</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={handleNoClick}
            style={noButtonStyle}
            className="no-button px-12 py-6 text-xl rounded-full hover:bg-gray-400 transition-all flex items-center space-x-3"
          >
            <span>No</span>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
