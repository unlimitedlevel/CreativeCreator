import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Loader2, Sparkles } from 'lucide-react';

export function DescriptionGenerator() {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');

  const generateDescription = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setDescription(
        `🚀 Temukan bagaimana AI mengubah cara membuat konten! Di video ini, saya akan menunjukkan tools dan teknik AI yang mengubah cara kerja content creator.

📌 Poin Penting:
- Pengenalan tools AI untuk konten
- Tutorial langkah demi langkah
- Contoh hasil nyata
- Tips dan trik terbaik

🔥 Jangan lupa LIKE dan SUBSCRIBE untuk tips pembuatan konten lainnya!

🎁 Sumber yang disebutkan:
- KontenAI: https://kontenai.app
- Panduan AI: https://example.com/panduan

#ContentCreator #TipsYouTube #AITools #KontenKreator`
      );
      setLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Generator Deskripsi</h1>
        <p className="text-gray-500 mt-2">Buat deskripsi video yang optimal untuk SEO</p>
      </div>

      <form onSubmit={generateDescription} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Judul Video
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Masukkan judul video Anda"
          />
        </div>

        <div>
          <label htmlFor="keyPoints" className="block text-sm font-medium text-gray-700">
            Poin Penting
          </label>
          <textarea
            id="keyPoints"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Masukkan poin-poin penting dalam video Anda"
          />
        </div>

        <div>
          <label htmlFor="links" className="block text-sm font-medium text-gray-700">
            Link Penting
          </label>
          <textarea
            id="links"
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Masukkan link yang ingin Anda sertakan"
          />
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
              Buat Deskripsi
            </>
          )}
        </Button>
      </form>

      {description && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Deskripsi yang Dihasilkan</h2>
          <div className="relative p-6 bg-white rounded-lg shadow">
            <pre className="whitespace-pre-wrap font-sans">{description}</pre>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => copyToClipboard(description)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}