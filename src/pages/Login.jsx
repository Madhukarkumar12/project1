import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';;
import login from "../assets/login.png";
import loginLogo from "../assets/login-logo.svg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'jockmartin@email.com' && password === 'jock#2026') {
      authLogin();
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${login})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(102.41deg,_rgba(2,3,9,0.9)_7.74%,_rgba(3,8,27,0.9)_100.35%)] opacity-90"></div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className=" bg-[#020309]/80 backdrop-blur-sm border border-gray-800/50 shadow-2xl flex flex-col">
            <div className="mb-1 flex items-center justify-center bg-[#000000] py-4">
              <span className='text-[#68B5C7] font-bold text-xl' style={{fontStyle:"Poppins"}}>Qualcomm Airport Security</span>
               <img src={loginLogo} alt="Intelligent Ops" className="h-7 w-7" />
            </div>

            <div className='px-12 mt-5'>
              <span className='text-[#B0BEFB] font-semibold text-[2.5vh]'>Welcome</span>
            </div>

            {/* Form */}
            <div className='px-12 py-4 mt-3 mb-4'>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@email.com"
                      className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 pr-12 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      required
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="mb-2 block text-sm text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="• • • • • • • • •"
                      className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 pr-12 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
                    >
                      <svg
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/50 px-4 py-2 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="cursor-pointer w-full rounded-lg bg-[#0044cc] py-3 mt-5 font-medium text-white transition-all hover:bg-[#0055ee] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0f1d33] active:scale-[0.98]"
                >
                  Login
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;