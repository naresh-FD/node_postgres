const db = require('../db');

exports.getallres = async (req, res) => {
  let { rows } = await db.query('SELECT * FROM restaurants');
  res.status(200).json({ data: rows });
};
exports.getallresbyId = async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM restaurants WHERE id = $1', [id]);
  const result = rows.length > 0 ? rows : 'no res';
  res.status(200).json({ data: result });
};
exports.createRes = (req, res) => {
  console.log('Request data:');
  console.log(req.body);
  res.status(200).send(req.body);
};
