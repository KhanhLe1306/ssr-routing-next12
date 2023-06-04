import React from "react";

function Films({ films, time }) {
  return (
    <>
      <div style={{marginBottom: '30px'}}>Films</div>
      <div>Time requested: {time}</div>
      {films.map((x) => (
        <li>{x.title}</li>
      ))}
    </>
  );
}

export default Films;

export async function getServerSideProps() {
  const res = await fetch("https://swapi.dev/api/films");
  const result = await res.json();
  const time = new Date();
  return {
    props: {
      films: result.results,
      time: time.toTimeString(),
    },
  };
}
