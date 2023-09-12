import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faBriefcase, faLaptop, faFile, faBlog, faAddressBook, faLink } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faFacebook, faStackOverflow, faCodepen } from '@fortawesome/free-brands-svg-icons'
 
/* add icons to the library */
library.add(faUser)
library.add(faBriefcase)
library.add(faLaptop)
library.add(faFile)
library.add(faBlog)
library.add(faAddressBook)
library.add(faLink)

library.add(faTwitter)
library.add(faLinkedin)
library.add(faFacebook)
library.add(faStackOverflow)
library.add(faCodepen)



const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
