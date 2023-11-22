<template>
  <div
    class="p-3 md:p-4 flex justify-between items-stretch flex-wrap min-h-[70px] mx-2 pb-0 bg-transparent border-b border-gray-300"
  >
    <h3 class="m-2 ml-0 font-medium text-xl/tight text-dark ">
      <span class="mr-3 font-semibold text-dark">User List</span>
    </h3>

    <div class="relative flex flex-wrap items-center ">
      <p class=" me-2"> Sort by: </p>
      <select data-te-select-init class=" px-4 py-2 transition duration-150 ease-in-out" v-model="selectedSort">
        <option
          v-for="(item, index) in sortingList"
          :key="index + item.value"
          :value="item.value"
        >
          {{ item.lebel }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/stores/user";
import { ref, watch } from "vue";
const { sortingUserAction } = useUsersStore();

interface ISorting {
  value: string;
  lebel: string;
}

const sortingList = ref<ISorting[]>([

  {
    value: "name-ase",
    lebel: "Name: Ascending",
  },
  {
    value: "name-des",
    lebel: "Name: Descending",
  },
  {
    value: "dob-ase",
    lebel: "DOB: Ascending",
  },
  {
    value: "dob-des",
    lebel: "DOB: Descending",
  },
  {
    value: "join-ase",
    lebel: "Joining Date: Ascending",
  },
  {
    value: "join-des",
    lebel: "Joining Date: Descending",
  },
]);

const selectedSort = ref<string>("----");

watch(() => selectedSort.value,(value: any) => {
    sortingUserAction(value)
  }
);
</script>
