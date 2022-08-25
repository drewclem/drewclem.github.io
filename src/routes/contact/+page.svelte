<script>
  /**
* @param {{ [x: string]: string | number | boolean; }} data
*/
  function encode(data) {
    return Object.keys(data)
      .map(key => 
      `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    ).join('&')
  }

  function handleSubmit() {
    fetch("/", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...this.form,
      }),
    })
      .then((/** @type {{ status: number; }} */ res, /** @type {any} */ err) => {
        if (res.status === 200) {
          console.log("success")
          // this.$router.push("/contact/thanks")
        } else {
          console.log(err)
        }
      })
      .catch(e => console.error(e))
  }
</script>

<div class="relative">
	<div class="w-4 h-4 lg:w-6 lg:h-6 bg-red-500 absolute" />
	<h1 class="text-4xl lg:text-4xl font-display font-bold ml-4 pt-1 lg:ml-6 lg:pt-3 mb-8">
		Contact
	</h1>
</div>

<form class="flex flex-col" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
	<input type="hidden" name="form-name" value="contact" />

	<div class="grid md:grid-cols-2 gap-6 mb-8">
		<div class="flex flex-col">
			<label class="text-lg font-bold mb-3" for="name">Name</label>
			<input
				id="name"
				type="text"
				class="border border-gray-300 p-2"
				v-model="form.name"
				required
			/>
		</div>

		<div class="flex flex-col">
			<label class="text-lg font-bold mb-3" for="email">Email</label>
			<input
				id="email"
				type="email"
				class="border border-gray-300 p-2"
				v-model="form.email"
				required
			/>
		</div>
	</div>

	<div class="flex flex-col mb-12">
		<label class="text-lg font-bold mb-3" for="comment">Comment</label>
		<textarea
			id="comment"
			class="border border-gray-300 p-2"
			rows="8"
			v-model="form.comment"
			required
		/>
	</div>

	<p class="hidden">
		<label>
			Don’t fill this out if you're human:
			<input name="bot-field" />
		</label>
	</p>

	<button class="btn w-32">Send</button>
</form>
