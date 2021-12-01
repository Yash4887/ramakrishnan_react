

const firstName = 'Yash';

const lastName = 'Modi'

// Yash Modi

const fullName = `${firstName} ${lastName}`;

// const fullName = firstName + ' ' + lastName;

console.log(fullName);

// Yash's Car

// const pos = firstName + '\'s car';

const pos = `${firstName}'s car`

console.log(pos);


const fName = `${firstName}
${lastName}`;
// const fName = firstName + "\n" + lastName;

console.log(fName);

// Yash
// Modi


// {
//     const a = 1; // 16byte

//     console.log(a);
// }

// console.log(a);


// const b = 2;

// console.log(b);
// // Yash Modi

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
// </body>
// </html>

const oldJs = '<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
    '<meta charset="UTF-8">' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<title>Document</title>' +
'</head>' +
'<body>' +
    '' +
 '</body>' +
'</html>';

console.log(oldJs);

const title = "Portfolio"

const oldJs = '<!DOCTYPE html>' +
'\n<html lang="en">' +
'\n<head>' +
    '\n\t<meta charset="UTF-8">' +
    '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '\n\t<title>'+ title + '</title>' +
'\n</head>' +
'\n<body>' +
    '\n' +
 '\n</body>' +
'\n</html>';

const newJS = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    
</body>
</html>`

console.log(newJS);