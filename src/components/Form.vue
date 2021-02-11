<template>
  <button class="delete is-pulled-right" @click="$emit('close')"></button>
  <form name="contact" method="POST" class="mt-5" data-netlify="true">
    <p class="pr-4 pl-4">
      Du kennste eine Initiative, eine Webseite, einen Blog der hier fehlt? Dann
      lass es und wissen!
    </p>
    <div class="field mt-3">
      <label class="label">Deine Nachricht</label>
      <div class="control">
        <textarea class="textarea" name="message"></textarea>
      </div>
    </div>
    <div class="field mt-3">
      <label class="label">Deine E-Mail</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <input class="input" type="email" name="email" />
      </div>
      <p class="help">
        Falls du für Rückfragen zur Verfügung stehst. (Optional)
      </p>
    </div>
    <div class="control mt-6">
      <button type="submit" class="button is-primary" @click="$emit('close')">
        Absenden
      </button>
    </div>
  </form>
</template>
