import React, { useState } from "react";

function Text({ text, length }) {
  let show = text.length > length ? false : true;
  const [showMore, setShowMore] = useState(show);
  return (
    <div>
      <div>
        <h4>{showMore ? text : `${text.substring(0, length)}...`}</h4>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default function Exercise24() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, veniam nulla magnam ullam vero sequi nemo, nam ipsa error praesentium aspernatur a impedit, minima vel libero eum temporibus? Ad molestias delectus laborum quisquam enim alias sequi hic modi necessitatibus aliquam esse neque dolorum exercitationem nisi, iure quas perspiciatis eum consectetur quidem. Accusamus suscipit excepturi repellendus reprehenderit delectus est repellat cupiditate incidunt beatae rem asperiores laboriosam error saepe natus, maiores iusto earum dolorum vitae ipsum velit, architecto quasi! Ducimus minima nesciunt reprehenderit ipsa commodi mollitia est. Aspernatur quod placeat eligendi, distinctio enim mollitia laudantium, quibusdam, repudiandae aliquam ducimus in cumque sint?";
  return <Text text={lorem} length="50" />;
}
