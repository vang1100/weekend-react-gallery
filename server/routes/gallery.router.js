const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let { id } = req.params;
  const sqlText = `
      UPDATE "gallery" SET "likes" = +1
      WHERE "id" = $1;
  `;
  pool.query(sqlText, [id])
      .then((result) => {
          console.log(`Got stuff back from the database`, result);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
});

// GET /gallery
router.get('/', (req, res) => {
 
  let queryText = 'SELECT * FROM "gallery";'; // this query gets the gallery database

// sending the query to the DB
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('error in queryText', error);
    res.sendStatus(500);
  })
      
})


module.exports = router;
