<template>
  <button class="delete is-pulled-right" @click="$emit('close')"></button>
  <form
    v-if="!submitted"
    name="contact-form"
    method="POST"
    class="mt-5"
    netlify
    data-netlify-honeypot="bot-field"
    @submit.prevent="onSubmit"
  >
    <input type="hidden" name="form-name" value="contact-form" />
    <p class="pr-4 pl-4">
      Du kennste eine Initiative, eine Webseite, einen Blog der hier fehlt? Dann
      lass es und wissen!
    </p>
    <div class="field mt-3">
      <label class="label">Deine Nachricht</label>
      <div class="control">
        <textarea
          v-model="form.message"
          class="textarea"
          name="message"
        ></textarea>
      </div>
    </div>
    <div class="field mt-3">
      <label class="label">Deine E-Mail</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <input v-model="form.email" class="input" type="email" name="email" />
      </div>
      <p class="help">
        Falls du für Rückfragen zur Verfügung stehst. (Optional)
      </p>
    </div>
    <div class="control mt-6">
      <button type="submit" class="button is-primary">
        Absenden
      </button>
    </div>
  </form>
  <div v-else>
    Thank you!
    <button class="button is-primary" @click="$emit('close')">
      Schließen
    </button>
  </div>
</template>

<script>
export default {
  name: "Form",
  emits: ["close"],
  data: function() {
    return {
      submitted: false,
      form: {
        message: "",
        email: "",
      },
    };
  },
  methods: {
    encode: function(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    onSubmit: async function() {
      try {
        await fetch("/form.html", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "contact-form",
            ...this.form,
          }),
        });
        this.submitted = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
