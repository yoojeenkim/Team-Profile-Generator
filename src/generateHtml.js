function renderCards(data) {
    switch (data.role) {
        case 'Manager':
            return `<div class="card">
            <div class="card-header text-white bg-primary">
            <h4 class="card-title">${data.name}</h4>
            <h6 class="text-muted card-sub-title mb-2">Manager</h6>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">Office Number: ${data.officenumber}</li>
            </ul>
            </div>
            </div>`;
        case 'Engineer':
            return `<div class="card">
            <div class="card-header text-white bg-primary">
            <h4 class="card-title">${data.name}</h4>
            <h6 class="text-muted card-sub-title mb-2">Engineer</h6>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">GitHub: ${data.github}</li>
            </ul>
            </div>
            </div>`;
        case 'Intern':
            return `<div class="card">
            <div class="card-header text-white bg-primary">
            <h4 class="card-title">${data.name}</h4>
            <h6 class="text-muted card-sub-title mb-2">Intern</h6>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">School: ${data.school}</li>
            </div>
            </ul>
            </div>`;
    }
}

function generateHtml(data) {
    console.log(data);
    const cards = [];
    for (let i=0; i < data.length; i++) {
        const cardSection = renderCards(data[i]);

        console.log(cardSection);
        cards.push(cardSection);
    }

    console.log(cards);

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="d-lg-flex justify-content-lg-center align-items-lg-center team-header">
        <h2>My Team</h2>
    </div>
    <div class="container-fluid d-flex flex-row justify-content-center flex-wrap">
        ${cards.join('\n')}
    </div>
    
</body>
</html>`;
}

module.exports = generateHtml;