# 🩺 Medical Appointment Booking System

A full-stack appointment booking web application built with **Nuxt 3
(Vue 3)** and **PostgreSQL**.

This system allows patients to book medical appointments, prevents
duplicate time-slot bookings, dynamically shows available time slots,
and manages booking history with cancellation support.

------------------------------------------------------------------------

## 🚀 Features

-   Multi-step Booking Form (Information → Appointment → Review)
-   Unique Booking Number Generation
-   Prevent Double Booking (Backend + Database level)
-   Dynamic Available Time Slots per Selected Date
-   Booking History Page
-   Cancel Booking (Soft Delete using status)
-   Responsive UI (Mobile + Desktop)
-   Server-side Validation
-   Timezone-safe Date Handling

------------------------------------------------------------------------

## 🏗 Tech Stack

  Layer      Technology
  ---------- ---------------------------------
  Frontend   Nuxt 3 (Vue 3, Composition API)
  Backend    Nuxt 3 Server API (Nitro)
  Database   PostgreSQL
  Styling    Tailwind CSS

------------------------------------------------------------------------

## 📦 Installation

### 1️⃣ Clone Repository

``` bash
git clone https://github.com/jajerrr/medical-booking.git
cd medical-booking
```

### 2️⃣ Install Dependencies

``` bash
npm install
```

### 3️⃣ Run Development Server

``` bash
npm run dev
```

App runs at:

    http://localhost:3000

------------------------------------------------------------------------

## 🗄 Database Setup

### Create Database

``` sql
CREATE DATABASE medicaimedical_booking_db;
```

### Create Table

``` sql
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  booking_no VARCHAR(10) UNIQUE,
  name VARCHAR(100) NOT NULL,
  surname VARCHAR(100) NOT NULL,
  birth_date DATE NOT NULL,
  gender VARCHAR(20),
  specialty VARCHAR(100),
  phone VARCHAR(20),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  medical_concern TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

------------------------------------------------------------------------

## 🔒 Prevent Duplicate Booking (Database Level)

``` sql
CREATE UNIQUE INDEX unique_active_slot
ON appointments (appointment_date, appointment_time)
WHERE status != 'canceled';
```

This ensures: - Same date + time cannot be booked twice - Canceled
bookings free the slot

------------------------------------------------------------------------

## 📡 API Endpoints

### GET /api/history

Retrieve all bookings

### GET /api/available?date=YYYY-MM-DD

Retrieve booked time slots for selected date

Example:

    /api/available?date=2026-02-12

Response:

``` json
["09:00","10:30","14:00"]
```

### POST /api/appointments

Create a new booking

### POST /api/cancel

Cancel a booking (update status to 'canceled')

------------------------------------------------------------------------

## 🧠 System Architecture

    Frontend (Nuxt 3)
            ↓
    Server API (Nitro)
            ↓
    PostgreSQL Database

Data integrity is enforced at: - Frontend (slot filtering) - Backend
(validation) - Database (partial unique index)

------------------------------------------------------------------------

## ✔ Business Rules

-   Users cannot book an already reserved time slot.
-   Canceled bookings allow re-booking.
-   Booking history shows latest records first.
-   Dates are handled safely to avoid timezone shift issues.

------------------------------------------------------------------------

## 📄 License

MIT © Achiraya Komatsu
