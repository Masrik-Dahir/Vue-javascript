let app = Vue.createApp({
    data: function(){
        return {
            greeting: 'Hello Vue 3!',
            isVisible: false,
            isVisible2: true,
            button_to_activate_box: false,
            button_text: "show"
        }
    },
    methods:{
        toggleBox() {
            this.button_to_activate_box = !this.button_to_activate_box

            if (this.button_text == "show"){
                this.button_text = "hide"
            }
            else{
                this.button_text = "show"
            }
        },
        greet(greeting){
            console.log(greeting)
        }
    }
})
app.mount('#app')