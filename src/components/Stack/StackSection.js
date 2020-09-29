import React from "react";
import StackContainer from "./StackContainer";
import technos from "./data-stack";

export default function StackSection() {
  const frontStack = technos.filter((t) => t.type === "front");
  const backStack = technos.filter((t) => t.type === "back");
  const toolStack = technos.filter((t) => t.type === "tool");

  return (
    <section className="stack-section">
      <h1>Compétences</h1>
      <div className="stack-all flex-col wrap">
        <StackContainer title={"Développement Front-end"} stack={frontStack} />
        <StackContainer title={"Développement Back-end"} stack={backStack} />
        <StackContainer title={"Environnement de travail"} stack={toolStack} />
      </div>
    </section>
  );
}
