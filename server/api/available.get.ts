import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '240145',
  database: 'medical_booking_db',
  port: 5432
})


export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const date = query.date

  const result = await pool.query(
    `SELECT appointment_time
     FROM appointments
     WHERE appointment_date = $1
     AND status != 'canceled'`,
    [date]
  )

  return result.rows.map(r => r.appointment_time)
})