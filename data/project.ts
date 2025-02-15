import { Genre } from 'types/enum'
import { enumWord } from 'utils'

export const tags = [
  'horror',
  '3d',
  'adventure',
  'short',
  'pixel-art',
  'atmospheric',
  'visual-novel',
  'rpg',
  'action',
  'puzzle',
  'retro',
  'survival',
  'unity',
  'adult',
  'platformer',
  'simulation',
  'fantasy',
  'erotic',
  'story-rich',
  'creepy',
  'interactive-fiction',
  'cute',
  'shooter',
  'romance',
  'anime',
  'casual',
  'psychological-horror',
  'arcade',
  'science-fiction',
  'narrative',
  'dark',
  'lgbt',
  'renpy',
  'low-poly',
  'survival-horror',
  'exploration',
  'strategy',
  'rpgmaker',
  'female-protagonist',
  'funny',
  'multiplayer',
  '8-bit',
  'dating-sim',
  'top-down',
  'point-and-click',
  'comedy',
  'mystery',
  'experimental',
  'sprites',
  'space',
  'gay',
  'music',
  'monsters',
  'relaxing',
  'roguelike',
  'multiple-endings',
  'minimalist',
  '16-bit',
  'fps',
  'side-scroller',
  'colorful',
  'furry',
  'text-based',
  'card-game',
  'artgame',
  'action-adventure',
  'gamemaker',
  'fighting',
  'shoot-em-up',
  'difficult',
  'spooky',
  'fast-paced',
  'dungeon-crawler',
  'physics',
  'unreal-engine',
  'tileset',
  'racing',
  'surreal',
  'educational',
  'virtual-reality',
  'local-multiplayer',
  'queer',
  'psx',
  'weird',
  'male-protagonist',
  'hand-drawn',
  'rhythm',
  'slice-of-life',
  'medieval',
  'magic',
  'puzzle-platformer',
  'turn-based',
  'action-rpg',
  'meaningful-choices',
  'zine',
  'walking-simulator',
  'procedural',
  'cyberpunk',
  'jrpg',
  'endless',
  'gameboy',
  'metroidvania',
  'twine',
  'dark-fantasy',
  'lgbtqia',
  'eroge',
  'sandbox',
  'top-down-shooter',
  'third-person',
  '3d-platformer',
  'mouse-only',
  'bullet-hell',
  'zombies',
  'roguelite',
  'tilemap',
  'fangame',
  'gmless',
  'post-apocalyptic',
  'animals',
  'sports',
  'transgender',
  'pico-8',
  'ghosts',
  'robots',
  'abstract',
  'isometric',
  'otome',
  'nature',
  'halloween',
  'controller',
  'character-customization',
  'minigames',
  'lesbian',
  'board-game',
  'black-and-white',
  'chiptune',
  'clicker',
  'co-op',
  'turn-based-combat',
  'high-score',
  'open-world',
  'cats',
  'boss-battle',
  'tower-defense',
  'dice',
  'comics',
  'bitsy',
  'jumping',
  'escape-game',
  'yaoi',
  'stealth',
  'aliens',
  'parody',
  'farming',
  '1-bit',
  'boys-love',
  'forest',
  'runner',
  'supernatural',
  'yuri',
  'non-violent',
  'top-down-adventure',
  'speedrun',
  'love2d',
  'turn-based-strategy',
  'party-game',
  'idle',
  'life-simulation',
  'war',
  'cozy',
  'maze',
  'one-shot',
  'management',
  'futuristic',
  'tactical',
  'lo-fi',
  'drm-free',
  'infinite-runner',
  'game-design',
  'gamepad',
  'thriller',
  'real-time-strategy',
  'my-first-game-jam',
  'bara',
  'detective',
  'historical',
  'driving',
  'generator',
  'parkour',
  'city-builder',
  'dreams',
  'voice-acting',
  'underwater',
  'dark-humor',
  'voxel',
  'user-interface',
  'nes',
  'vampire',
  'blocks',
  'level-editor',
  'violent',
  'construct-2',
  'dystopian',
  'virtual-pet',
  'creative',
  'dogs',
  'open-source',
  'gore',
  'game-engine',
  'art-book',
  'flight',
  'time-travel',
  'one-button',
  'dragons',
  'hack-and-slash',
  'neon',
  'pirates',
  'swords',
  'strategy-rpg',
  'crafting',
  'oculus-quest',
  'alternate-history',
  'local-co-op',
  'mental-health',
  'secrets',
  'fonts',
  'western',
  'touch-friendly',
  'beat-em-up',
  'vector',
  'commodore-64',
  'psychedelic',
  'remake',
  'tactical-rpg',
  'score-attack',
  'global-game-jam',
  'food',
  'blender',
  'pvp',
  'pbta',
  'lovecraft',
  'sourcecode',
  'homebrew',
  'relationship',
  'resource-pack',
  'drawing',
  'third-person-shooter',
  'suspense',
  'gravity',
  'gothic',
  'space-sim',
  'music-production',
  'ludum-dare',
  'frog',
  'steampunk',
  'upgrades',
  'typing',
  'wizards',
  'mind-bending',
  'artificial-intelligence',
  'superhero',
  'manga',
  'incremental',
  'gmtkjam',
  'crime',
  'skeletons',
  'satire',
  'mythology',
  'explosions',
  'zx-spectrum',
  'christmas',
  'glitch',
  'kinetic-novel',
  'twin-stick-shooter',
  'time-attack',
  'dinosaurs',
  'versus',
  'fairy-tale',
  'gameboy-rom',
  'altgame',
  'atari',
  'asteroids',
  'mmorpg',
  'coming-of-age',
  'parallax',
  'perma-death',
  'destruction',
  'folklore',
  'flying',
  'cult-classic',
  'superpowers',
  'flappy-bird',
  'real-time',
  'ascii',
  'puzzlescript',
  'tanks',
  'fishing',
  'feel-good',
  'tetris',
  'nes-rom',
  'immersive',
  'deck-building',
  'ludum-dare-40',
  'non-linear',
  'chess',
  'template',
  'one-hit-kill',
  'fps-platformer',
  'ludum-dare-46',
  'slime',
  'libgdx',
  'word-game',
  'noir',
  'tycoon',
  'non-eucledian',
  'math',
  'combos',
  'lowrezjam',
  '4x',
  'ludum-dare-38',
  'mechs',
  'ninja',
  'photorealistic',
  'economy',
  'video',
  'episodic',
  'oculus-rift',
  'breakout',
  'deathmatch',
  'touhou',
  'ludum-dare-41',
  'golf',
  'ludum-dare-42',
  'moddable',
  'painting',
  'ludum-dare-44',
  'ludum-dare-49',
  'trashcore',
  'chicken',
  'world-war-ii',
  'synthwave',
  'football',
  'hacking',
  'massively-multiplayer',
  'trains',
  'ludum-dare-43',
  '7drl',
  'spoopy',
  'gbjam',
  'split-screen',
  'classes',
  'gender',
  'emulator',
  'two-colors',
  'kickstarter',
  'ludum-dare-45',
  'visualization',
  'hex-based',
  'tutorial',
  'pastel',
  'ludum-dare-47',
  'live-action',
  'internet',
  'soccer',
  'brushes',
  'slasher',
  'ludum-dare-37',
  'flat-shading',
  'ludum-dare-39',
  'fantasy-console',
  'watercolor',
  'memoir',
  'tentacles',
  'magical-realism',
  'ludum-dare-35',
  'horrible',
  'sega-genesis',
  'demake',
  'traps',
  'shadows',
  'procjam',
  'gameboy-advance',
  'loot',
  'vst',
  'tyranobuilder',
  'mountains',
  'moe',
  'job-system',
  'roadtrip',
  'mashup',
  'siren-head',
  'ludum-dare-36',
  'brain-training',
  'sailing',
  'gardening',
  'boring',
  'instrument',
  'celtic',
  '7dfps',
  'lone-survivor',
  'archery',
  'grayscale',
  'team-based',
  'soundtoy',
  'ludum-dare-34',
  'automation',
  'zero-gravity',
  'period-piece',
  'fmv',
  'norse',
  'vic-20',
  'ludum-dare-33',
  'trading',
  'mega-drive',
  'midi',
  'sitting-simulator',
  'on-rails-shooter',
  'dos',
  'stencyl',
  'github',
  'tic-80',
  'stop-motion',
  'tennis',
  'leap-motion',
  'skating',
  '1gam',
  'screensaver',
  'augmented-reality',
  'ludum-dare-32',
  'ggj2020',
  'world-war-i',
  'tablet',
  'binaural',
  'ludum-dare-31',
  'norway',
  'ludum-dare-30',
  'rotation',
  'railroad',
  'wobbly',
  'voice-controlled',
  'kung-fu',
  'perspective',
  'ludum-dare-29',
  'sfml',
  'ggj15',
  'hypercard',
  'corona-sdk',
  'sharecart1000',
  'barfcade',
  'ciphers',
  'kinect',
]

export const classifications = [
  {
    value: 'GAMES',
    label: 'Games',
    description: 'A piece of software you can play',
  },
  {
    value: 'game',
    label: 'Game',
    description: 'A piece of software you can play',
  },
  {
    value: 'assets',
    label: 'Game assets',
    description:
      'Graphics, fonts, music, sounds one may combine into something else',
  },
  {
    value: 'game_mod',
    label: 'Game mods',
    description: 'An alteration of the content of a game',
  },
  {
    value: 'physical_game',
    label: 'Physical games',
    description:
      'One you can play without devices (e.g. board game, print & play)',
  },
  {
    value: 'soundtrack',
    label: 'Soundtracks',
    description: 'A collection of music',
  },
  {
    value: 'tool',
    label: 'Tools',
    description: 'A software utility',
  },
  {
    value: 'comic',
    label: 'Comics',
    description: 'A story told through drawings',
  },
  {
    value: 'book',
    label: 'Books',
    description: 'A story told through words',
  },
  {
    value: 'Other',
    label: 'Other',
    description: '',
  },
]

export const kindOfProjects = [
  {
    value: 'rm2k3e',
    label: 'RPG MAKER',
    description: 'RPG MAKER 2000/2003',
  },
  {
    value: 'default',
    label: 'Downloadable',
    description: 'You only have files to be downloaded',
  },
  {
    value: 'html',
    label: 'HTML',
    description:
      'You have a ZIP or HTML file that will be played in the browser',
  },
  {
    value: 'flash',
    label: 'Flash',
    description: 'You have an SWF that will be played in the browser',
  },
  {
    value: 'java',
    label: 'Java applet',
    description: 'You have a JAR that will be played in the browser',
  },
  {
    value: 'unity',
    label: 'Unity ≤ 5.3',
    description: 'You have a Unity3d file that will be played in the browser',
  },
]

export const releaseStatus = [
  {
    value: 'RELEASED',
    label: 'Released',
    description: 'Project is complete, but might receive some updates',
  },
  {
    value: 'IN_DEVELOPMENT',
    label: 'In development',
    description: 'Project is in active development (or in early access)',
  },
  {
    value: 'ON_HOLD',
    label: 'On hold',
    description: 'Development is paused for now',
  },
  {
    value: 'CANCELLED',
    label: 'Canceled',
    description: 'Development has stopped indefinitely',
  },
  {
    value: 'PROTOTYPE',
    label: 'Prototype',
    description:
      'An early prototype for testing an idea out, fate of project unknown',
  },
]

export const genres = Object.values(Genre).map((genre) => ({
  value: genre,
  label: enumWord(genre),
}))
