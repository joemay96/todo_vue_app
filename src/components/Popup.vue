<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn text slot="activator" class="success" dark v-on="on"
        >Add new project</v-btn
      >
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          ></v-textarea>

          <!-- so that the datepicker stands out-->
          <v-menu max-width="290">
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="formattedDate"
                label="Due date"
                prepend-icon="mdi-calendar-range"
                v-on="on"
                :rules="inputRules"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn
            text
            class="success mx-0 mt-3"
            @click="submit"
            :loading="loading"
            >Add Project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [
        (v) => (v && v.length >= 3) || "Minimum length is 3 characters",
      ],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      //checking for valid form
      if (this.$refs.form.validate()) {
        //saving to the database
        console.log(this.title, this.content);
        this.dialog = false;
        this.$refs.form.reset();
        //emiting an event for the navbar component from the popup component
        this.$emit("projectAdded");
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "d MMM yyyy") : "";
    },
  },
};
</script>

<style>
</style>