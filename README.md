# PDF Generator

## Installation

1. <code>git clone git@github.com:FCastilloSorani/html-to-pdf.git</code>
2. <code>cd html-to-pdf && npm install</code>
3. <code>npm run dev</code>

## Usage

You can either navigate to <code>http://localhost:3000/</code> to use a graphic interface, or use any http clientUsing any HTTP client like [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/).

### Usage with HTTP client
Create a new **POST** request to <code>http://localhost:3000/api/pdf</code> and send the HTML code or URL as a form with form fields <code>html</code> and <code>url</code>.
