import { login } from '@/api/auth';
import React, { useState } from 'react';


type LoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

export default function loginPage() {
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

      // TODO: 여기에 로그인 API 연결
      // await loginApi(form.email, form.password, form.remember);
      login(form.email, form.password);

      console.log('login submit', form);
      alert('로그인 시도 (콘솔 확인)');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
        {/* Header */}
        <div className="px-6 pt-7 pb-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
              {/* 로고 자리 */}
              <span className="text-white font-semibold">A</span>
            </div>
            <div>
              <div className="text-white text-lg font-semibold leading-tight">
                Sign in
              </div>
              <div className="text-white/60 text-sm leading-tight">
                Welcome back. Please login to continue.
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="px-6 pb-7">
          <label className="block">
            <span className="block text-sm font-medium text-white/80 mb-2">
              Email
            </span>
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full h-11 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/35 px-4 outline-none focus:border-white/25 focus:ring-2 focus:ring-white/10"
            />
          </label>

          <label className="block mt-4">
            <span className="block text-sm font-medium text-white/80 mb-2">
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
                className="w-full h-11 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-white/35 px-4 pr-12 outline-none focus:border-white/25 focus:ring-2 focus:ring-white/10"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 px-3 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
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
                className="h-4 w-4 rounded border-white/20 bg-black/30 text-white focus:ring-white/20"
              />
              <span className="text-sm text-white/75">Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm text-white/70 hover:text-white underline underline-offset-4"
              onClick={() => alert('TODO: 비밀번호 찾기 페이지로 이동')}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading || !form.email.trim() || !form.password.trim()}
            className="mt-5 w-full h-11 rounded-xl bg-white text-slate-900 font-semibold hover:bg-white/90 active:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="mt-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/45">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          
          <p className="mt-6 text-center text-sm text-white/60">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              className="text-white hover:underline underline-offset-4"
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
