import getData from "../util/getData";

const Home = async () => {
  const characteres = await getData();
  const view = `
    <div class="Characteres">

      ${characteres.results
        .map(
          (character) =>
            `
            <article class="Characteres-item">
              <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}" />
                <h2>${character.name}</h2>
              </a>
            </article>
          `
        )
        .join("")}

    </div>
  `;
  return view;
};

export default Home;
