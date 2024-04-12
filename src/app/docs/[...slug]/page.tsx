import React from "react";

const page = ({ params }: any) => {
  if (params.slug.length === 2) {
    return    <h1>      Viewing docs for {params.slug[0]} and concept {params.slug[1]}    </h1>;
  } else if (params.slug.length === 1) {
    return  <h1>viewing docs for feature {params.slug}</h1>;
  }
  return <div>Docs.....</div>;
};

export default page;
