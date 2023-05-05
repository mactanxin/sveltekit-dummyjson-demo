<script lang="ts">
  export let data;
  export let form;

  console.log("form: ", form);

  $: ({ contacts } = data);
</script>

<h1 class="block text-center text-3xl my-8">Fake Contact Form</h1>

<form method="POST" action="?/create" class="mx-auto max-w-xl">
  <div class="mb-6">
    <label
      for="email"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Your email</label
    >
    <input
      type="email"
      id="email"
      name="email"
      value={form?.email ?? ""}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@flowbite.com"
      required
    />
  </div>
  <div class="mb-6">
    <label
      for="name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Your name</label
    >
    <input
      type="name"
      id="name"
      name="name"
      value={form?.name ?? ""}
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    />
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input
        id="remember"
        type="checkbox"
        value=""
        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
      />
    </div>
    <label
      for="remember"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Remember me</label
    >
  </div>
  <button
    type="submit"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >Submit</button
  >
</form>

<h2 class="text-center text-2xl mt-16 mb-8">Contacts Table</h2>
<!-- code copied from daisyui table -->
<div class="px-10 flex justify-center items-center">
  <table class="table w-full">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#each contacts as contact, index}
        <tr>
          <th>{index + 1}</th>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>
            <form method="POST" action="?/delete">
              <input type="hidden" hidden name="id" value={contact.id} />
              <button
                type="submit"
                class="text-white btn btn-error badge-error badge badge-error"
                >Delete</button
              >
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
