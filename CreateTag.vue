<template>
  <div ref="myDiv"></div>
  <button @click="createTags">Create Tags</button>
</template>

<script>
export default {
  methods: {
    createTags() {
      // Create a new <ul> tag with two <li> tags
      const ulTag = document.createElement("ul");
      const liTag1 = document.createElement("li");
      const liTag2 = document.createElement("li");
      const textNode1 = document.createTextNode("Item 1");
      const textNode2 = document.createTextNode("Item 2");
      liTag1.appendChild(textNode1);
      liTag2.appendChild(textNode2);
      ulTag.appendChild(liTag1);
      ulTag.appendChild(liTag2);

      // Add the <ul> tag to the <div> element
      this.$refs.myDiv.appendChild(ulTag);
    }
  }
}
</script>
