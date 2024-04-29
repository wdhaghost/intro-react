import * as React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeToShow from "./CodeToShow";

function CustomHook() {
  const codeToShow = CodeToShow;
  return (
    <div>
      <h2>Utilisation des Customs Hook</h2>

      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sed
        ullam hic non. Rem doloremque optio veritatis hic ducimus nobis maiores,
        incidunt quis, quidem, beatae obcaecati eligendi deserunt qui velit! Qui
        laudantium temporibus, illo obcaecati ratione nihil nam ipsum veritatis
        ullam, amet natus, nisi necessitatibus suscipit illum. Dolore, odio est!
        Est minima fugit vitae eaque similique voluptatibus et dolore amet?
        Sapiente incidunt unde doloremque aperiam corporis quas, natus delectus
        voluptatem perferendis saepe atque consequuntur nulla expedita magni,
        sunt eligendi possimus est praesentium fugiat hic voluptas qui!
        Explicabo tenetur tempora consequatur. Dolores adipisci ratione rem.
        Consequatur praesentium blanditiis quis dolorum modi, vero veniam ex hic
        perspiciatis nesciunt in maxime ratione sunt pariatur! Aut quia
        consequuntur tempore odio rem magni ducimus reiciendis.
      </div>
      <hr />
      <div className="codeBlock">
        <CopyBlock
          language="tsx"
          text={codeToShow.code1}
          showLineNumbers={true}
          theme={dracula}
          wrapLongLines={true}
          codeBlock
        />
      </div>
    </div>
  );
}

export default CustomHook;
