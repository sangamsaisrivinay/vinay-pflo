import {faInstagram, faTwitter, faLinkedin, faMedium, faGithub, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// here we  created jsx file instead of jso file because we need to import fontawesome icons which are of object
// type and we need to use them in footer.jsx file so we need to import them in jsx file and export them as array
// of objects, ajson file can t directly store fontawesome icon components



const data=[
    {
        "name":"linkedin",
        "link":"https://www.linkedin.com/in/sangam-sai-sri-vinay-r-77490b190/",
        "icon":faLinkedin
    },
    {
        "name":"github",
        "link":"https://github.com/sangamsaisrivinay",
        "icon":faGithub
    },
    {
        "name":"twitter",
        "link":"https://twitter.com/GoLDenHusky1729",
        "icon":faTwitter
    },
    {
        "name":"medium",
        "link":"https://medium.com/@saisrivinay",
        "icon":faMedium
    },
    {
        "name":"instagram",
        "link":"https://www.instagram.com/vinaysignedin/",
        "icon":faInstagram
    },
    {
        "name":"gmail",
        "link":"mailto:sssvinayr@gmail.com",
        "icon":faGoogle
    },
    {
        "name":"fiverr",
        "link":"https://www.fiverr.com/sangamsaisrivin?public_mode=true",
        "icon":faCircleDollarToSlot
    },
    {
        "name":"message",
        "link":"https://forms.gle/V2Eoqh8t9RUQBMHD9",
        "icon":faPencilAlt
    }
]

export default data;