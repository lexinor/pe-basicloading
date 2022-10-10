/*
* This is where you want to add your tips. They **MUST** be in this structure. You can
* have as many or little as you want. In each tooltip object, the `content` value also supports markdown
*
* A list of the markdown supported can be found on the docs
*/
export const LOADSCREEN_TIPS = [
  {
    title: "Bienvenue sur NewDawn !",
    content: "Bienvenue sur NewDawn Roleplay ! Pour toute demande d'aide, rendez-vous sur le channel **#aide** sur discord ou contactez un administrateur en jeu avec la commande **/report**"
  },
  {
    title: "Italics Tip",
    content: "*Wew, now its all in italics*"
  },
  {
    title: "Bold Italics",
    content: "***Lets now combine the best of both worlds! Lets use bold italics***"
  },
  {
    title: "Nice Tip 4",
    content: "Find our discord here"
  },
  {
    title: 'Markdown Render',
    content: '**This is bold**. But this is not.  [This is a link!](https://github.com/project-error/pe-basicloading)'
  }
];

// How long a tip is on screen before we aut omatically
// go to the next one (ms)
export const TIP_CHANGE_INTERVAL = 10000

// How long we stay on a background until we
// go to the next one (ms)
export const BACKGROUND_CHANGE_INTERVAL = 7000

// An array of image files that are available in the `bg` folder
export const BACKGROUND_IMAGES = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
]

// Whether music should be played while loading,
// this will automatically loop the file as well
export const MUSIC_ENABLED = true

// The file name given to your music. This can be
// a .ogg or an .mp3 (MUST BE PRESENT IN `music/` folder)
export const MUSIC_FILE_NAME = 'music.mp3'

export const MUSIC_START_VOLUME = 0.3

// Enable github flavored markdown
export const ENABLE_GFM_MARKDOWN = true

// Enable or disable the included server logo to change this
// logo simply switch the `logo.png` file with the image of your choice
export const ENABLE_SERVER_LOGO = true

// Define server logo placement ['top-left', 'top-right', 'bottom-right', 'center']
export const SERVER_LOGO_POSITION = 'center'

// The name of your logo file within "logo/" directory
export const SERVER_LOGO_FILE_NAME = 'logo.png'