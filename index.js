const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const pdfRouter = require('./app/routes/pdf.router');

const app = express();

// Port
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api/pdf', pdfRouter);

// Start
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
