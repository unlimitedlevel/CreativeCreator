import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Loader2, Sparkles } from 'lucide-react';

export function PromptGenerator() {
  const [loading, setLoading] = useState(false);
  const [prompts, setPrompts] = useState<string[]>([]);

  const generatePrompts = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPrompts([
        "Thumbnail YouTube sinematik menampilkan otak AI yang bersinar, lampu neon biru dan ungu, pencahayaan dramatis, resolusi 8k, fotorealistik",
        "Ruang kerja tech minimalis modern dengan hologram melayang menampilkan tools pembuatan konten AI, pencahayaan ambient lembut, komposisi bersih",
        "Komposisi layar terbelah menunjukkan sebelum/sesudah pembuatan konten, sisi kiri setup tradisional, sisi kanan ruang kerja futuristik dengan AI",
        "Visualisasi abstrak AI menghasilkan konten, aliran data mengalir, efek partikel, latar belakang gelap dengan pencahayaan aksen"
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
        <h1 className="text-3xl font-bold">Generator Prompt</h1>
        <p className="text-gray-500 mt-2">Buat prompt untuk tools pembuat gambar AI</p>
      </div>

      <form onSubmit={generatePrompts} className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Deskripsi Gambar
          </label>
          <textarea
            id="description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Jelaskan gambar yang ingin Anda buat"
          />
        </div>

        <div>
          <label htmlFor="style" className="block text-sm font-medium text-gray-700">
            Gaya Visual
          </label>
          <select
            id="style"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="photorealistic">Fotorealistik</option>
            <option value="3d">3D Render</option>
            <option value="cartoon">Kartun/Animasi</option>
            <option value="minimalist">Minimalis</option>
          </select>
        </div>

        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
            Tujuan
          </label>
          <select
            id="purpose"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="thumbnail">Thumbnail YouTube</option>
            <option value="banner">Banner Channel</option>
            <option value="social">Postingan Media Sosial</option>
            <option value="custom">Kustom</option>
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
              Buat Prompt
            </>
          )}
        </Button>
      </form>

      {prompts.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Prompt yang Dihasilkan</h2>
          <div className="space-y-2">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
              >
                <p className="flex-1 mr-4">{prompt}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(prompt)}
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