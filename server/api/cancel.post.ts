import { Pool } from 'pg'

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '240145',
  database: 'medical_booking_db',
  port: 5432
})


export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const result = await pool.query(
    `UPDATE appointments
     SET status = 'canceled'
     WHERE booking_no = $1
     RETURNING *`,
    [body.booking_no]
  )

  if (result.rowCount === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Booking not found'
    })
  }

  return result.rows[0]
})