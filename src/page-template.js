
const makeCard = data => {
  return `
  <section class="card" id="teammate">
    <div class="card-body">
      <h3>(${data})</h3>
    </div>
  </section>
  `;
};


const generateHtml = templateData => {
  console.log('Data from index:', templateData);
  const [Manager, Engineer, Intern] = templateData;
  console.log(Manager);
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
    <link rel="stylesheet" href="styles.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-warn py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
      <section class="card" id="manager">
        <div class="card-header">
          <h2>${Manager.getName()}</h2>
          <h3>${Manager.getRole()}</h3>
        </div>
        <div class="card-body">
          <p>${Manager.getId()}</p>
          <p>${Manager.getEmail()}</p>
          <p>${Manager.getOfficeNumber()}</p>
        </div>
      </section>
      <section class="card" id="manager">
        <div class="card-header">
          <h2>${Engineer.getName()}</h2>
          <h3>${Engineer.getRole()}</h3>
        </div>
        <div class="card-body">
          <p>${Engineer.getId()}</p>
          <p>${Engineer.getEmail()}</p>
          <p>${Engineer.getGithub()}</p>
        </div>
      </section>
      <section class="card" id="manager">
        <div class="card-header">
          <h2>${Intern.getName()}</h2>
          <h3>${Intern.getRole()}</h3>
        </div>
        <div class="card-body">
          <p>${Intern.getId()}</p>
          <p>${Intern.getEmail()}</p>
          <p>${Intern.getSchool()}</p>
        </div>
      </section>
    </main>
  </body>
  </html>
  `;
};

module.exports = generateHtml;