<script setup lang="ts">
import UserTable from "@/components/UserTable.vue";
import ListHeader from "@/components/ListHeader.vue";
import { storeToRefs } from "pinia";
import { useUsersStore } from "@/stores/user";

const { userList } = storeToRefs(useUsersStore());

</script>

<template>
  <main>
    <div class="flex flex-wrap px-2 md:px-4">
      <div class="w-full max-w-full md:px-3 mb-6 mx-auto">
        <div
          class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white"
        >
          <div
            class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30"
          >
            <ListHeader />

            <UserTable :users="userList"/>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap pb-4 md:pb-7">
      <div class="w-full max-w-full sm:w-3/4 mx-auto text-center">
        <p class="text-sm text-slate-500 py-1">
          <span
            class="text-slate-700 hover:text-slate-900"
            target="_blank"
            >Evaluation Test</span
          >
          by
          <span
            href="https://www.loopple.com"
            class="text-slate-700 hover:text-slate-900"
            target="_blank"
            >Mohammad Younoch</span
          >.
        </p>
      </div>
    </div>
  </main>
</template>
