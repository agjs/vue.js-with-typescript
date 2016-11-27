import * as Vue from "vue";
import MyComponent from "./component.vue";

let app = new Vue({
	el: "#app",
	components: {
		MyComponent
	},
	render: h => h("MyComponent")
});

export default app;