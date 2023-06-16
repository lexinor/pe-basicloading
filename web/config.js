/*
* This is where you want to add your tips. They **MUST** be in this structure. You can
* have as many or little as you want. In each tooltip object, the `content` value also supports markdown
*
* A list of the markdown supported can be found on the docs
*/
export const LOADSCREEN_TIPS = [
  {
    title: "Bienvenue sur New Dawn !",
    content: "Bienvenue sur New Dawn Roleplay ! Pour toute demande d'aide, rendez-vous sur le channel **#contact-staff** ou **#besoin d'aide** sur discord ou contactez un administrateur en jeu avec la commande **/report**"
  },
  {
    title: "Remontés de bugs",
    content: "Lorsque vous rencontrez un bug, prenez un maximum de preuves et reportez-le au membre du staff, toute aide est la bienvenue !"
  },
  {
    title: "Profitez et amusez-vous !",
    content: "Vous êtes ici pour vous amuser et passer du bon temps ! Profitez-en et soyez fair-play avec tous les joueurs. Si un joueur venait à manquer à ça, remontez-le immédiatement à un staff"
  },
];

// How long a tip is on screen before we automatically
// go to the next one (ms)
export const TIP_CHANGE_INTERVAL = 10000

// How long we stay on a background until we
// go to the next one (ms)
export const BACKGROUND_CHANGE_INTERVAL = 5000

// An array of image files that are available in the `bg` folder
// export const BACKGROUND_IMAGES = [
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
// ]
export const BACKGROUND_IMAGES = [
  "sapd.png",
  "ballas.png",
  "taxi.png",
  "families.png",
  "lost.png",
]

// Whether music should be played while loading,
// this will automatically loop the file as well
export const MUSIC_ENABLED = true

// The file name given to your music. This can be
// a .ogg or an .mp3 (MUST BE PRESENT IN `music/` folder)
export const MUSIC_FILE_NAME = 'music.mp3'

export const MUSIC_START_VOLUME = 0.5

// Enable github flavored markdown
export const ENABLE_GFM_MARKDOWN = true

// Enable or disable the included server logo to change this
// logo simply switch the `logo.png` file with the image of your choice
export const ENABLE_SERVER_LOGO = true

// Define server logo placement ['top-left', 'top-right', 'bottom-right', 'center']
export const SERVER_LOGO_POSITION = 'bottom-right'

// The name of your logo file within "logo/" directory
export const SERVER_LOGO_FILE_NAME = 'logofull.png'