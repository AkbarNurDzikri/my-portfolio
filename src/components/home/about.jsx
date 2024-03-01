const About = () => {
  return (
    <section className="mt-10 lg:flex">
      <div className="mx-5 text-center lg:text-start lg:mx-20 lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-wide text-sky-600">
          Tentang Saya
        </h1>

        <p className="text-lg lg:text-xl text-slate-600 mt-5">
          Salam! Saya adalah pengembang web dengan kecintaan terhadap kode dan
          kreativitas. Dengan pengalaman dalam bahasa pemrograman dan desain
          web, saya berkolaborasi dengan beragam klien untuk menciptakan solusi
          digital yang efektif.
        </p>
        <p className="text-lg lg:text-xl text-slate-600 mt-3">
          Saya percaya bahwa teknologi adalah alat untuk mewujudkan visi, dan
          saya bersemangat untuk membantu Anda mencapai tujuan Anda dalam dunia{" "}
          <i>online</i>. Terima kasih telah mengunjungi portofolio saya; mari
          kita jadikan ide Anda menjadi kenyataan di web!
        </p>
      </div>

      <div className="mt-10 lg:mt-0 mx-5 text-center lg:text-start lg:mx-20">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-wide text-sky-600">
          Pendidikan
        </h1>

        <ul className="text-lg lg:text-xl mx-5 text-slate-600 mt-5 text-center lg:text-start lg:list-disc">
          <li className="mb-3">
            STMIK Rosma - Karawang
            <br /> <span className="text-slate-400">S1 Teknik Informatika</span>
          </li>
          <li className="mb-3">
            SMK PGRI 2 - Karawang
            <br />{" "}
            <span className="text-slate-400">Administrasi Perkantoran</span>
          </li>
          <li className="mb-3">SMPN 6 Karawang Barat - Karawang</li>
          <li className="mb-3">SDN Tanjung Pura VI - Karawang</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
