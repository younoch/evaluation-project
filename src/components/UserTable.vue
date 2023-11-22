<template>
  <div>
    <div
      class="flex-auto block p-4 pt-3 md:py-8 md:pt-6 md:px-4"
    >
      <div class="">
        <table class="w-full my-0 align-middle text-dark border-neutral-200">
          <thead class="align-bottom">
            <tr class="font-semibold text-[0.95rem] text-secondary-dark">
              <th class="pb-3 text-start min-w-[175px]">name</th>
              <th class="pb-3 text-center min-w-[100px]">DOB</th>
              <th class="pb-3 text-end min-w-[100px]">Joining Date</th>
              <th class="pb-3 text-end min-w-[50px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in props.users"
              :key="index"
              class="border-b border-dashed last:border-b-0 hover:bg-gray-200 p-2 md:p-4 hover:p-1"
              draggable="true"
              @dragend="dragElement($event, index)"
              @dragover="dropElement($event, index)"
            >
              <template v-if="item">
                <td class="p-3">
                  <div class="flex items-center">
                    <div class="inline-block shrink-0 rounded-2xl me-3">
                      <img
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                        class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                        alt=""
                      />
                    </div>
                    <div class="flex flex-col justify-start">
                      <p
                        class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-md/normal text-secondary-inverse hover:text-primary"
                      >
                        {{ item.name }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pr-0 text-center">
                  <span class="font-semibold text-light-inverse text-md/normal">
                    {{ item.dob }}</span
                  >
                </td>
                <td class="pr-0 text-end">
                  <span
                    class="font-semibold text-light-inverse text-md/normal"
                    >{{ item.joinDate }}</span
                  >
                </td>
                <td class="p-3 text-end">
                  <div class="inline-block text-left dropdown">
                    <span class="rounded-md shadow-sm"
                      ><button
                        class="inline-flex justify-center w-full p-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-controls="headlessui-menu-items-117"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                        >
                          <g fill="currentColor">
                            <circle cx="5" cy="10" r="2" />
                            <circle cx="10" cy="10" r="2" />
                            <circle cx="15" cy="10" r="2" />
                          </g>
                        </svg>
                        </button
                    ></span>
                    <div
                      class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
                    >
                      <div
                        class="absolute z-20 right-0 w-24 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                        aria-labelledby="headlessui-menu-button-1"
                        id="headlessui-menu-items-117"
                        role="menu"
                      >
                        <ul class="py-1">
                          <li
                            tabindex="0"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                            role="menuitem"
                            @click="openEditModal(item)"
                          >
                            Edit
                          </li>
                          <li
                            tabindex="0"
                            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-200"
                            role="menuitem"
                            @click="deleteConfirmation(item)"
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <DeleteComparmationModal
      v-if="isDeleteModal"
      :item="actionActiveItem"
      @submit="deleteUser"
      @close="cancelDelete"
    />
    <UserForm
      v-if="isEditModal"
      modalFor="Update"
      :userData="actionActiveItem"
      @close="cancelUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/stores/user";
import type { IUser } from "@/typings/user";
import { ref } from "vue";
import DeleteComparmationModal from "@/components/DeleteComparmationModal.vue";
import UserForm from "@/components/UserForm.vue";

interface Props {
  users: IUser[];
}

const props = defineProps<Props>();

const { deleteUserAction, swapUserIndexAction } = useUsersStore();

const menu: HTMLElement | null = document.getElementById("menu");
const showMenu = ref<boolean>(false);
const itemID = ref<string>("randomID");
const isDeleteModal = ref<boolean>(false);
const isEditModal = ref<boolean>(false);
const actionActiveItem = ref<IUser | undefined>();

const dragOverEl = ref<number>(-1);

function toggleMenu(id: string) {
  showMenu.value = !showMenu.value;
  itemID.value = id;
}

function openEditModal(user: IUser) {
  actionActiveItem.value = user;
  isEditModal.value = true;
}

function deleteConfirmation(user: IUser) {
  actionActiveItem.value = user;
  isDeleteModal.value = true;
}

function cancelDelete() {
  actionActiveItem.value = undefined;
  isDeleteModal.value = false;
  showMenu.value = !showMenu.value;
}
function cancelUpdate() {
  actionActiveItem.value = undefined;
  isEditModal.value = false;
  showMenu.value = !showMenu.value;
}
function deleteUser(userID: string) {
  
  deleteUserAction(userID);
  
  isDeleteModal.value = false;
}

function dragElement(event: Event, index: number) {
  swapUserIndexAction(index, dragOverEl.value);
  dragOverEl.value = -1;
}
function dropElement(event: Event, index: number) {
  dragOverEl.value = index;
}
</script>

<style scoped>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>
