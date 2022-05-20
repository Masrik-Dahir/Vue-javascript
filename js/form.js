let app = Vue.createApp({
    data: function(){
        return {
            greeting: "Hello Vue 3",
            isVisible: false,
        }
    },
    methods: {
        toggleBo() {
            this.isVisible = ! this.isVisible;
        },
        greet(greeting) {
            console.log(greeting);
        }

    },
})

app.component('custom-form', {
    template:
        `
    <form @submit.prevent="handleSubmit"> 
           <h1>{{ title }}</h1>
           <custom-input v-model="email" :label="emailLabel" />
           <custom-input v-model="password"  :label="passwordLabel" />
           <button>Log in</button>
    </form>
    `,
    components: ['custom-compnent'],

    data(){
        return{
            title: "Login Form",
            email: "",
            password: "",
            emailLabel: "Email",
            passwordLabel: "Password",
            users: [],
        }
    },
    methods: {
        handleSubmit() {
            axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

            let all_item  = 'http://127.0.0.1:5000/items';

            const options = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({
                    "name": "No One 1",
                    "email": "test2@capitalone.com",
                    "phone_number": "1231231236",
                    "hire_date": "2015-01-01",
                    "job_id": "8",
                    "salary": 90000,
                    "commission_pct": 1,
                    "manager_id": "4",
                }),
            };


            fetch(all_item, options)

                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            console.log(this.email, this.password);
        }
    }
})
app.component('custom-input', {
    template:
        `
    <label>
        {{label}}
        <input type="text" v-model="inputValue">
    </label>
    `,
    props: ['label', 'modelValue'],
    computed:{
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }

})

app.mount('#app')
