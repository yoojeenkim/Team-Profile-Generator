function renderCards(data) {
    switch (data.role) {
        case 'Manager':
            return `<div class="card">
            <div class="card-body">
                <h4 class="card-title">${data.name}</h4>
                <h6 class="text-muted card-sub-title mb-2">Manager</h6>
                <p>ID: ${data.id}</p>
                <p>Email: ${data.email}</p>
                <p>Office Number: ${data.officenumber}</p>
            </div>
            </div>`;
        case 'Engineer':
            return `<div class="card">
            <div class="card-body">
                <h4 class="card-title">${data.name}</h4>
                <h6 class="text-muted card-sub-title mb-2">Engineer</h6>
                <p>ID: ${data.id}</p>
                <p>Email: ${data.email}</p>
                <p>GitHub: ${data.github}</p>
            </div>
            </div>`;
        case 'Intern':
            return `<div class="card">
            <div class="card-body">
                <h4 class="card-title">${data.name}</h4>
                <h6 class="text-muted card-sub-title mb-2">Intern</h6>
                <p>ID: ${data.id}</p>
                <p>Email: ${data.email}</p>
                <p>School: ${data.school}</p>
            </div>
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
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./styles.css"/>
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="d-lg-flex justify-content-lg-center align-items-lg-center">
        <h2>My Team</h2>
    </header>
    <div class="container-fluid d-flex flex-row justify-content-center flex-wrap">
        ${cards.join('\n')}
    </div>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>`;
}

module.exports = generateHtml;