import { Pool } from 'pg'
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '240145',
  database: 'medical_booking_db',
  port: 5432
})


export default defineEventHandler(async () => {
  const result = await pool.query(
    `SELECT * FROM appointments ORDER BY created_at DESC`
  )

  return result.rows
})
