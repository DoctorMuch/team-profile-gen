const makeHeader = headerText => {
  return `
    <section class="card-header" id="job">
      <h2 class="text-light bg-secondary">${headerText.name}</h2>
      <p>${headerText.title}</p>
    </section>
    `;
};

const makeCard = (cardData) => {
  return `
  <section class="card" id="teammate">
    <div class="card-body">
      <h3>${cardData}</h3>
    </div>
  </section>
  `;
};


module.exports = templateData => {

  const { header, card } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Data Builder</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-warn py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
      ${makeHeader(header)}
      ${makeCard(card)}
    </main>
  </body>
  </html>
  `;
};