import { Link } from 'react-router-dom';
import { Youtube, Type, FileText, PenTool, Palette, Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link to="/" className="flex ml-2 md:mr-24">
                <Youtube className="h-8 w-8 text-red-600" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ml-2">
                  KontenAI
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Button variant="outline" size="sm">
                Masuk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-6 h-6 text-gray-500 transition duration-75" />
                <span className="ml-3">Beranda</span>
              </Link>
            </li>
            <li>
              <Link
                to="/generate/title"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <Type className="w-6 h-6 text-gray-500 transition duration-75" />
                <span className="ml-3">Generator Judul</span>
              </Link>
            </li>
            <li>
              <Link
                to="/generate/description"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <FileText className="w-6 h-6 text-gray-500 transition duration-75" />
                <span className="ml-3">Generator Deskripsi</span>
              </Link>
            </li>
            <li>
              <Link
                to="/generate/script"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <PenTool className="w-6 h-6 text-gray-500 transition duration-75" />
                <span className="ml-3">Generator Naskah</span>
              </Link>
            </li>
            <li>
              <Link
                to="/generate/prompt"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <Palette className="w-6 h-6 text-gray-500 transition duration-75" />
                <span className="ml-3">Generator Prompt</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 pt-20">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}