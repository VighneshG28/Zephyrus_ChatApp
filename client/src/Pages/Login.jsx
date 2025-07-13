import React, { useState } from 'react';

const Login = () => {
  const [curState, setCurState] = useState('Sign up');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (curState === 'Sign up' && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 rounded-xl w-full max-w-md text-white shadow-xl space-y-5"
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          {curState === 'Sign up' ? 'Create an Account' : 'Login'}
        </h1>

        {curState === 'Sign up' && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Username"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        )}

        {curState === 'Sign up' && isDataSubmitted && (
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => setIsDataSubmitted(false)}
              className="text-sm text-blue-400 hover:underline self-start"
            >
              ← Back
            </button>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              rows={4}
              placeholder="Tell us a bit about yourself..."
              className="w-full px-4 py-2 rounded-lg bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold"
        >
          {curState === 'Sign up'
            ? isDataSubmitted
              ? 'Finish Sign Up'
              : 'Create Account'
            : 'Login'}
        </button>

        <div className="flex items-center gap-2 text-sm mt-2">
          <input type="checkbox" className="accent-blue-600 w-4 h-4" />
          <p className="text-gray-300">
            Agree to the <span className="underline">terms of use</span> &{' '}
            <span className="underline">privacy policy</span>
          </p>
        </div>

        <p className="text-center text-sm text-gray-400 mt-3">
          {curState === 'Sign up' ? (
            <>
              Already have an account?{' '}
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => {
                  setCurState('Login');
                  setIsDataSubmitted(false);
                }}
              >
                Log in
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                className="text-blue-400 hover:underline cursor-pointer"
                onClick={() => {
                  setCurState('Sign up');
                  setIsDataSubmitted(false);
                }}
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
