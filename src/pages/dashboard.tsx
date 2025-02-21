import { ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Selamat Datang di KontenAI</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Masa Uji Coba</span>
          <Star className="w-4 h-4 text-yellow-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex items-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Generasi AI</h3>
              <p className="text-sm text-gray-500">0/100 digunakan bulan ini</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex items-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Konten Dibuat</h3>
              <p className="text-sm text-gray-500">0 konten</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/generate/title"
          className="group p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Buat Judul Video</h3>
              <p className="text-sm text-gray-500">Buat judul yang menarik perhatian penonton</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </Link>

        <Link
          to="/generate/description"
          className="group p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Buat Deskripsi</h3>
              <p className="text-sm text-gray-500">Tulis deskripsi video yang optimal untuk SEO</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </Link>

        <Link
          to="/generate/script"
          className="group p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Buat Naskah</h3>
              <p className="text-sm text-gray-500">Buat naskah video yang menarik</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </Link>

        <Link
          to="/generate/prompt"
          className="group p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Buat Prompt</h3>
              <p className="text-sm text-gray-500">Buat prompt untuk AI pembuat gambar</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        </Link>
      </div>
    </div>
  );
}