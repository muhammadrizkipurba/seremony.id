import MainLayout from '@/components/layout/MainLayout'

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <main className='custom-container py-10'>
        <div className='custom-container'>
          <h1 className='text-3xl font-bold uppercase mb-12'>
            Kebijakan Privasi
          </h1>
          <p className='text-lg mt-4'>Tanggal Efektif : <strong>01 Januari 2026</strong></p>
          <p className='text-lg mt-4'>
            <strong className='text-main-green'>Seremony</strong>(&quot;Kami&quot;) sangat menghargai privasi pengguna Kami. Kebijakan Privasi ini menjelaskan bagaimana Kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda saat Anda mengunjungi atau menggunakan layanan di website Kami. Dengan menggunakan website Kami, Anda setuju dengan pengumpulan dan penggunaan informasi sesuai dengan Kebijakan Privasi ini.
          </p>
          <ul className='mt-12'>
            <li className='mt-5'>
              <h3 className='text-xl font-bold text-main-green'>Informasi yang Kami Kumpulkan</h3>
              <p className='text-lg mt-1'>
                Kami mengumpulkan data pribadi yang secara sukarela Anda berikan kepada Kami ketika Anda mendaftar, berlangganan, atau menggunakan layanan tertentu di website Kami. Jenis data pribadi yang Kami kumpulkan meliputi:
              </p>
              <ul className=''>
                <li>
                  - <strong>Informasi Identitas </strong>: Nama lengkap
                </li>
                <li>
                  - <strong>Informasi Kontak </strong>: Nomor Whatsapp dan Alamat Email.
                </li>
              </ul>
            </li>
            <li className='mt-5'>
              <h3 className='text-xl font-bold text-main-green'>Tujuan Penggunaan Data</h3>
              <p className='text-lg mt-1'>
                Kami menggunakan data pribadi yang dikumpulkan untuk berbagai tujuan, termasuk:
              </p>
              <ul className=''>
                <li>
                  - <strong>Penyediaan Layanan </strong>: Untuk mengelola akun Anda, memproses permintaan Anda, dan menyediakan layanan atau informasi yang Anda minta.
                </li>
                <li>
                  - <strong>Komunikasi </strong>: Untuk mengirimkan email, newsletter, atau pemberitahuan terkait dengan layanan, promosi, atau informasi penting lainnya (Anda dapat memilih untuk berhenti berlangganan kapan saja).
                </li>
                <li>
                  - <strong>Personalisasi </strong>: Untuk mempersonalisasi pengalaman Anda di website Kami, seperti menyajikan konten yang relevan berdasarkan usia atau jenis kelamin.
                </li>
                <li>
                  - <strong>Verifikasi Identitas </strong>: Untuk memverifikasi usia dan identitas Anda guna memastikan kelayakan penggunaan layanan tertentu.
                </li>
                <li>
                  - <strong>Peningkatan Layanan </strong>: Untuk menganalisis tren, melacak penggunaan, dan melakukan perbaikan pada fitur dan kinerja website Kami.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </MainLayout>
  )
}

export default PrivacyPolicyPage