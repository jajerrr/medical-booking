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

  try {
    const result = await pool.query(
      `INSERT INTO appointments
       (name, surname, birth_date, gender, specialty,
        phone, appointment_date, appointment_time, medical_concern)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       RETURNING *`,
      [
        body.name,
        body.surname,
        body.birth_date,
        body.gender,
        body.specialty,
        body.phone,
        body.appointment_date,
        body.appointment_time,
        body.medical_concern
      ]
    )

    return result.rows[0]

  } catch (err: any) {
    if (err.code === '23505') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Time slot already booked'
      })
    }
    throw err
  }
})

