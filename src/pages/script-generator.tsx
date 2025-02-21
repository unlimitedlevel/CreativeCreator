import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Download, Loader2, Sparkles } from 'lucide-react';

export function ScriptGenerator() {
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState('');

  const generateScript = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setScript(
        `[Pembuka]
Halo semuanya! Kembali lagi di channel saya. Hari ini kita akan membahas tentang dunia pembuatan konten dengan AI dan bagaimana teknologi ini mengubah cara kita membuat video.

[Konten Utama]
Pertama, mari kita bahas apa itu pembuatan konten dengan AI. AI, atau kecerdasan buatan, sekarang bisa membantu kreator dengan berbagai hal mulai dari menulis naskah hingga menghasilkan ide video.

[Poin Penting]
1. Memahami Tools AI
   - Berbagai jenis tools AI yang tersedia
   - Bagaimana tools ini bekerja bersama
   - Praktik terbaik penggunaan

2. Aplikasi di Dunia Nyata
   - Bantuan penulisan naskah
   - Pembuatan judul
   - Optimasi deskripsi
   - Prompt untuk thumbnail

[Ajakan Bertindak]
Kalau video ini bermanfaat, jangan lupa like dan subscribe untuk tips pembuatan konten lainnya. Tulis komentar di bawah tentang pendapat kalian mengenai AI dalam pembuatan konten!

[Penutup]
Terima kasih sudah menonton, sampai jumpa di video berikutnya!`
      );
      setLoading(false);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadScript = () => {
    const element = document.createElement('a');
    const file = new Blob([script], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'naskah-video.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Generator Naskah</h1>
        <p className="text-gray-500 mt-2">Buat naskah video yang menarik</p>
      </div>

      <form onSubmit={generateScript} className="space-y-4">
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
          <label htmlFor="outline" className="block text-sm font-medium text-gray-700">
            Outline Video
          </label>
          <textarea
            id="outline"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Masukkan outline atau poin-poin penting video Anda"
          />
        </div>

        <div>
          <label htmlFor="style" className="block text-sm font-medium text-gray-700">
            Gaya Naskah
          </label>
          <select
            id="style"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="casual">Santai & Mengobrol</option>
            <option value="professional">Profesional & Edukatif</option>
            <option value="tutorial">Tutorial Langkah demi Langkah</option>
            <option value="storytelling">Bercerita</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Durasi Target (menit)
          </label>
          <input
            type="number"
            id="duration"
            min="1"
            max="60"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Masukkan durasi target video"
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
              Buat Naskah
            </>
          )}
        </Button>
      </form>

      {script && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Naskah yang Dihasilkan</h2>
            <div className="space-x-2">
              <Button variant="outline" size="sm" onClick={() => copyToClipboard(script)}>
                <Copy className="h-4 w-4 mr-2" />
                Salin
              </Button>
              <Button variant="outline" size="sm" onClick={downloadScript}>
                <Download className="h-4 w-4 mr-2" />
                Unduh
              </Button>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <pre className="whitespace-pre-wrap font-sans">{script}</pre>
          </div>
        </div>
      )}
    </div>
  );
}