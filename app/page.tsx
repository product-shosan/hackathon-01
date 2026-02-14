export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">

            {/* Header */}
            <div className="text-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚹</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                トイレ状況共有
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                SHOSANが提供する清潔サービス
              </p>
            </div>

            {/* Status Buttons */}
            <div className="space-y-4">
              <button className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                <span className="text-xl">✅</span>
                <span>人なし</span>
              </button>

              <button className="w-full h-14 bg-red-500 hover:bg-red-600 text-white font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
                <span className="text-xl">🚫</span>
                <span>人あり</span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                リアルタイム状況更新システム
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
