import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { IUser } from "@/typings/user";

export const useUsersStore = defineStore("users", {
  state: () => ({
    userList: ref<IUser[]>([
      {
        user_id: "e65b4781-f72b-4f85-b4c6-6a0e87876ec6",
        name: "Brandice",
        dob: "1997-06-25",
        joinDate: "2014-11-21",
      },
      {
        user_id: "edefaabd-f3a2-4bd1-8091-fb86e2085901",
        name: "Dalli",
        dob: "1995-04-24",
        joinDate: "2013-03-15",
      },
      {
        user_id: "bed3c36c-018f-4088-81d1-36d77ad13566",
        name: "Ariadne",
        dob: "1996-08-17",
        joinDate: "2019-10-04",
      },
      {
        user_id: "b2a159f9-425a-44d0-ba3d-3257a5b4220a",
        name: "Eben",
        dob: "1982-05-10",
        joinDate: "2016-08-15",
      },
      {
        user_id: "bb3f339b-8cff-45a8-bec6-869d57feed28",
        name: "Donelle",
        dob: "1983-09-18",
        joinDate: "2016-09-26",
      },
      {
        user_id: "26fa74df-f39e-4c24-892e-3e33dbc41a61",
        name: "Sibby",
        dob: "1994-11-01",
        joinDate: "2011-03-06",
      },
      {
        user_id: "5fe39dc6-bd5a-4d39-84bd-41e155c25502",
        name: "Cesare",
        dob: "1992-08-16",
        joinDate: "2022-04-22",
      },
      {
        user_id: "5cb459aa-c1da-46a2-9f41-2ce90e42bb3d",
        name: "Ally",
        dob: "1991-01-15",
        joinDate: "2019-09-25",
      },
      {
        user_id: "0f1564ea-adb6-443b-890a-b959319e81a0",
        name: "Sigrid",
        dob: "1982-06-21",
        joinDate: "2022-01-09",
      },
      {
        user_id: "68a3d16e-f982-4858-82ed-5e434fc09d6d",
        name: "Muhammad",
        dob: "1983-12-31",
        joinDate: "2010-06-11",
      },
      {
        user_id: "d779ff9a-f63c-40bd-87cc-bd2544b5bddd",
        name: "Rona",
        dob: "1991-03-22",
        joinDate: "2014-10-23",
      },
      {
        user_id: "1c337a39-0142-4a05-8a4e-8256f202e7a3",
        name: "Robinet",
        dob: "1991-03-18",
        joinDate: "2011-10-10",
      },
      {
        user_id: "a9caceef-1a36-4661-9673-7721c1ce5525",
        name: "Heath",
        dob: "1997-12-28",
        joinDate: "2010-07-04",
      },
      {
        user_id: "6dd83a55-bea1-42a5-b5eb-f8dfa9f5af09",
        name: "Babb",
        dob: "1997-02-16",
        joinDate: "2014-02-12",
      },
      {
        user_id: "efeec519-ca96-48b4-b291-ee2f5a18ad39",
        name: "Stacia",
        dob: "1990-04-17",
        joinDate: "2015-04-10",
      },
      {
        user_id: "23c6e0b7-6e49-4c17-8abf-fb09d1931a9e",
        name: "Florinda",
        dob: "1993-03-03",
        joinDate: "2019-07-06",
      },
      {
        user_id: "47d2021b-fd73-4519-ab02-493647390cb9",
        name: "Grayce",
        dob: "1980-04-03",
        joinDate: "2016-12-18",
      },
      {
        user_id: "681e6a7a-539e-4e73-a35a-f9d21b98c474",
        name: "Hilly",
        dob: "2000-12-19",
        joinDate: "2018-09-05",
      },
      {
        user_id: "c573ff44-b32f-462d-93c4-2a6ecf703424",
        name: "Desmond",
        dob: "1981-06-19",
        joinDate: "2013-08-08",
      },
      {
        user_id: "057dd49a-6252-4df4-bbdf-b7ed5f21b7b0",
        name: "Britt",
        dob: "1980-02-05",
        joinDate: "2015-04-25",
      },
    ]),
  }),
  getters: {
    getuserList: (state) => state.userList,
  },
  actions: {
    deleteUserAction(userId: string) {
      console.log(userId);
      
      this.userList = this.userList.filter(
        (el: IUser) => el.user_id !== userId
      );
    },
    editAction(selectedUser: IUser) {
      const selectedIndex: number = this.userList.findIndex(
        (user) => user.user_id === selectedUser.user_id
      );
      this.userList[selectedIndex] = selectedUser;
    },
    sortingUserAction(type: string) {
      
      if (type === "name-ase") {
        this.userList.sort((a, b) => a.name.localeCompare(b.name))
      }
      else if (type === "name-des") {
        this.userList.sort((a, b) => b.name.localeCompare(a.name));
      }
      else if (type === "dob-ase") {
        this.userList.sort((a, b) => a.dob.localeCompare(b.dob));
      }
      else if (type === "dob-des") {
        this.userList.sort((a, b) => b.dob.localeCompare(a.dob));
      }
      else if (type === "join-ase") {
        this.userList.sort((a, b) => a.joinDate.localeCompare(b.joinDate));
      }
      else if (type === "join-des") {
        this.userList.sort((a, b) => b.joinDate.localeCompare(a.joinDate));
      }
      else if (type === "regular") {
        this.userList.sort((a, b) => b.joinDate.localeCompare(a.joinDate));
      }
    },

    swapUserIndexAction( user1Idx: number, user2Idx: number) {
      [this.userList[user1Idx], this.userList[user2Idx]] = [this.userList[user2Idx], this.userList[user1Idx]]
    }
  },
});
