import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Loader2, Sparkles } from 'lucide-react';

export function TitleGenerator() {
  const [loading, setLoading] = useState(false);
  const [titles, setTitles] = useState<string[]>([]);

  const generateTitles = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTitles([
        "Saya Membuat AI yang Menulis Naskah YouTube Saya (Hasilnya Mengejutkan!)",
        "AI Ini Mengubah Cara Saya Membuat Video Selamanya",
        "Rahasia Mencapai 1 Juta Subscriber? AI untuk Konten!",
        "Cara Menggunakan AI untuk YouTube (Panduan Lengkap 2024)",
      ]);
      setLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Generator Judul</h1>
        <p className="text-gray-500 mt-2">Buat judul video YouTube yang menarik</p>
      </div>

      <form onSubmit={generateTitles} className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
            Topik Video
          </label>
          <input
            type="text"
            id="topic"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Masukkan topik video Anda"
          />
        </div>

        <div>
          <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
            Kata Kunci (opsional)
          </label>
          <input
            type="text"
            id="keywords"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Masukkan kata kunci, pisahkan dengan koma"
          />
        </div>

        <div>
          <label htmlFor="style" className="block text-sm font-medium text-gray-700">
            Gaya Judul
          </label>
          <select
            id="style"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="engaging">Menarik & Clickworthy</option>
            <option value="educational">Edukatif</option>
            <option value="tutorial">Tutorial</option>
            <option value="news">Berita & Update</option>
          </select>
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sedang Membuat...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Buat Judul
            </>
          )}
        </Button>
      </form>

      {titles.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Judul yang Dihasilkan</h2>
          <div className="space-y-2">
            {titles.map((title, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
              >
                <p className="flex-1 mr-4">{title}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(title)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}