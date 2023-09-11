import {faInstagram, faTwitter, faLinkedin, faMedium, faGithub, faGoogle, faFacebook, faHashnode } from '@fortawesome/free-brands-svg-icons'
import { faCircleDollarToSlot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// here we  created jsx file instead of jso file because we need to import fontawesome icons which are of object
// type and we need to use them in footer.jsx file so we need to import them in jsx file and export them as array
// of objects, ajson file can t directly store fontawesome icon components



const data=[
    {
        "name":"linkedin",
        "link":"https://www.linkedin.com/in/sangam-sai-sri-vinay-r/",
        "icon":faLinkedin,
        "color":"#0077b5"
    },
    {
        "name":"github",
        "link":"https://github.com/sangamsaisrivinay",
        "icon":faGithub,
        "color":"white"
    },
    {
        "name":"twitter",
        "link":"https://twitter.com/GoLDenHusky1729",
        "icon":faTwitter,
        "color":"#26a7de"
    },
    {
        "name":"hashnode",
        "link":"https://hashnode.com/@BCDev",
        "icon":faHashnode,
        "color":"#2963fe"
    },
    {
        "name":"instagram",
        "link":"https://www.instagram.com/ivinaireddi/",
        "icon":faInstagram,
        "color":"#d62796"
    },
    {
        "name":"gmail",
        "link":"mailto:sssvinayr@gmail.com",
        "icon":faEnvelope,
        "color":"#ea493a"
    },
    // {
    //     "name":"fiverr",
    //     "link":"https://www.fiverr.com/sangamsaisrivin?public_mode=true",
    //     "icon":faCircleDollarToSlot
    // },
    {
        "name":"message",
        "link":"https://forms.gle/V2Eoqh8t9RUQBMHD9",
        "icon":faPencilAlt,
        "color":"white"
    }
]

export default data;