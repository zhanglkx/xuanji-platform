<template>
  <div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <div>{{ fullName }}</div>
    <br>
    <hr>
    <!-- <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div>
    <div>{{ getFullName() }}</div> -->

    <button @click="setNewName">重新赋值</button>

  </div>
</template>
 

<!-- <script setup>
import { ref, computed } from "vue"

const firstName = ref("J.K.")
const lastName = ref("Rowling")

const fullName = computed(() => {
  console.log("computed获取full");
  return firstName.value + lastName.value
})

const getFullName = function () {
  console.log("methods获取full");
  return firstName.value + lastName.value
}
</script> -->
 
<script setup lang="ts">
import { ref, computed } from "vue"

const firstName = ref("J.K.")
const lastName = ref("Rowling")

const fullName = computed({
  get() {
    return firstName.value + lastName.value
  },
  set(newValue) {
    console.log(newValue);
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

const setNewName = function () {
  fullName.value = "John Doe"
}
</script>