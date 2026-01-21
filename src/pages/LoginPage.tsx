import { login } from '@/api/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


type LoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

export default function loginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
    remember: true,
  });
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim()) return;

    try {
      setLoading(true);

      await login(form.email, form.password);
      navigate('/dashboard');

      console.log('login submit', form);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[420px] bg-white p-6 border rounded-lg shadow-md">
        {/* Header */}
        <div className="pb-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gray-200 flex items-center justify-center">
              {/* 로고 자리 */}
              <span className="text-gray-900 font-semibold">A</span>
            </div>
            <div>
              <div className="text-gray-900 text-lg font-semibold leading-tight">
                Sign in
              </div>
              <div className="text-gray-600 text-sm leading-tight">
                Welcome back. Please login to continue.
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="pb-1">
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </span>
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full h-11 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 px-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </label>

          <label className="block mt-4">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </span>
            <div className="relative">
              <input
                value={form.password}
                onChange={(e) =>
                  setForm((p) => ({ ...p, password: e.target.value }))
                }
                type={showPw ? 'text' : 'password'}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full h-11 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-400 px-4 pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 px-3 rounded-lg text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
                aria-label={showPw ? 'Hide password' : 'Show password'}
              >
                {showPw ? 'Hide' : 'Show'}
              </button>
            </div>
          </label>

          <div className="mt-4 flex items-center justify-between">
            <label className="flex items-center gap-2 select-none">
              <input
                checked={form.remember}
                onChange={(e) =>
                  setForm((p) => ({ ...p, remember: e.target.checked }))
                }
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 bg-white text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-800 underline underline-offset-4"
              onClick={() => alert('TODO: 비밀번호 찾기 페이지로 이동')}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || !form.email.trim() || !form.password.trim()}
            className="mt-5 w-full h-11 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              className="text-blue-600 hover:underline underline-offset-4"
              onClick={() => alert('TODO: 회원가입 페이지로 이동')}
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}