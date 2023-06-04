import React from "react";

function People({ people, time }) {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>People</div>
      <div>Time requested: {time}</div>
      {people.map((x) => (
        <li>{x.name}</li>
      ))}
    </>
  );
}

export default People;

export async function getServerSideProps() {
  const res = await fetch("https://swapi.dev/api/people");
  const result = await res.json();
  const time = new Date();
  return {
    props: {
      people: result.results,
      time: time.toTimeString(),
    },
  };
}
