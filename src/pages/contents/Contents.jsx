import React from 'react';
import './contents.scss';

const Contents = () => {
  const contents = [
    {
      id: 1,
      name: "Ngawi",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 2,
      name: "jee",
      body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 3,
      name: "Coba",
      body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 4,
      name: "EA",
      body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 5,
      name: "Kocak",
      body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 6,
      name: "Siapa kek",
      body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 7,
      name: "Siapa kek",
      body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
  ];

  return <div className="contents">
    {contents.map(content => (
      <div className="content" key={content.id}>
        <div className="user">
          <h2>{content.name}</h2>
          <p>{content.createdAt}</p>
        </div>
        <div className="body__content">
          <h4>{content.body}</h4>
        </div>
      </div>
    ))}
  </div>

};

export default Contents;