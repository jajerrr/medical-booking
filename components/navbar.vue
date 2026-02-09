<template>
<nav class="bg-transparent fixed w-full z-20 top-0 start-0  border-b border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a  a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-xl text-heading font-semibold whitespace-nowrap text-green-800">Medical Booking</span>
    </a>
   
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="text-gray-700 font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="/" class="block py-2 px-3 text-heading bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 hover:text-green-800" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/booking" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-green-800">Appointments</a>
        </li>
        <li>
          <a href="/success" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-green-800">My Booking</a>
        </li>
        <li>
          <a href="/history" class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent hover:text-green-800">History</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>