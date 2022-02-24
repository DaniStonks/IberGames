function changeMainPageTheme(){
  let currentSheet = document.getElementById("activeTheme");
  if(currentSheet.classList[0] == 'light'){
    currentSheet.setAttribute("href", "/stylesheets/darkModeSite.css");
    currentSheet.classList.remove("light");
    currentSheet.classList.add("dark");
  }
  else{
    currentSheet.setAttribute("href","/stylesheets/whiteModeSite.css");
    currentSheet.classList.remove("dark");
    currentSheet.classList.add("light");
  }
}

function changeForumPageTheme(){
  let currentSheet = document.getElementById("activeTheme");
  if(currentSheet.classList[0] == 'light'){
    currentSheet.setAttribute("href", "/stylesheets/darkModeForum.css");
    currentSheet.classList.remove("light");
    currentSheet.classList.add("dark");
  }
  else{
    currentSheet.setAttribute("href","/stylesheets/whiteModeForum.css");
    currentSheet.classList.remove("dark");
    currentSheet.classList.add("light");
  }
}

/**** News Posts ****/
var newsPost = Object.freeze({
  "Destiny2":{
          "titulo": "Destiny 2: The Witch Queen - Launch Trailer Welcomes Guardians To Savathûn's Throne World", 
          "imagem": "/images/DestinyWitchQueenNew.jpg", 
          "conteudo": {
            "p1": "Guardians will soon face off against Savathûn and her Lucent Brood in just one week and to prepare you for the upcoming fight, Bungie has released a new launch trailer for Destiny 2: The Witch Queen.",
            "p2": "As you might expect, it features plenty of new haunting imagery of the Witch Queen, plus some new threats from her. Like previous expansion launch trailers, this one is quite cinematic, featuring mostly CGI. If you've been paying attention to this expansion, you know Savathûn has been stealing the precious Light of the Guardians. Plus, she has a host of ally enemies that also fight using the light, representing an all-new fight for our own Guardians, who, up until this point, have never fought someone using their own powers.",
            "p3": "Of course, Savathûn is thrilled that your Guardian and others are coming to her Throne World. In fact, she's inviting you in. The trailer also showcases some new looks at the exotics and fancy Glaive weapons coming to Destiny 2 in The Witch Queen expansion.",
            "p4": "The trailer ends with a screen that showcases what you can get for preordering Destiny 2: The Witch Queen, which is the most preordered Destiny 2 expansion in the game's history. If you preorder the deluxe edition, you'll receive some instant in-game rewards as well as the Osteo Striga Exotic SMG (and other bonuses) when the expansion is live next week on February 22."  
            }
       },
   "CyberPunk2077":{
           "titulo": "CyberPunk 2077 - Is Now The Right Time To Play it?",
           "imagem": "/images/cyberpunkNew.jpg",
           "conteudo": {
             "p1": "Cyberpunk 2077 received a massive 60+ GB update called Patch 1.5 earlier this week, and it's been aptly referred to as the new-gen update for CD Projekt Red's latest RPG. Perhaps you waited until you had a PlayStation 5 or Xbox Series X to play it, knowing full well how terribly the game runs on prior-gen consoles. Maybe you were hoping to get your hands on a graphics card from Nvidia's impossibly rare 30XX series. No matter what situation you found yourself in during November of 2020, if you've waited until a patch like 1.5 to jump into Night City for the first time, we have you covered. And if you began your journey through Cyberpunk 2077 but decided you'd rather wait until the game was in better shape, we have you covered too. Is now the right time to play Cyberpunk 2077?",
             "p2": " The too-long, didn't read answer is simple: yes. Now is, indeed, the time to play Cyberpunk 2077 if you were looking for a game more aligned with the original promise of CD Projekt Red's vision. However, while this patch does fix a lot of problems reviewers and players alike had with the game, the core of Cyberpunk 2077 is largely still intact in Patch 1.5. If you didn't like Keanu Reeve's Johnny Silverhand, weren't enthralled by the larger narrative, or didn't enjoy the actual gameplay of Cyberpunk 2077, then this patch is likely not going to sway your opinion. If you were looking for some tweaked systems, such as a better police network, more reactive drivers, and more realistic NPCs waltzing the streets of Night City, then you're in luck: Patch 1.5 features most of the fixes you were probably looking for and then some."
           }
       },
   "BaldursGate3":{
           "titulo": "Baldur's Gate 3 - Will Likely Be Released In 2023",
           "imagem": "/images/Baldur'sGate3New.jpg",
           "conteudo": {
              "p1": "Larian Studio's Baldur's Gate 3 will likely be released in 2023 after years of development, including time spent in Early Access.",
              "p2": "This news comes by way of PCGamesN, which recently spoke to Larian head Swen Vincke about the status of the RPG. According to Vincke, the team needs another year of development, but this year will be the last full year required for work on the game.",
              "p3": "“We're going to release it when it's ready,” Vincke said. “I mean, the main goal here is quality: getting the game at the quality level that it needs to be. That said, we do think we still need a year to do that. But it will be the last year. We're getting to the end of it.”"
            }
       },
   "XenobladeChronicles3":{
           "titulo": "Xenoblade Chronicles 3 - Announced, Releasing This September",
           "imagem": "/images/XenobladeChronicles3New.jpg",
           "conteudo": {
              "p1": "Nintendo has revealed Xenoblade Chronicles 3, the long-awaited sequel to 2017's Xenoblade Chronicles 2, and it is scheduled to hit Switch this September.",
              "p2": "Closing out today's Nintendo Direct, Xenoblade Chronicles 3 came as quite a surprise. That's because it showed a lot of imagery that looked similar to Xenoblade Chronicles X, the spin-off to the first Xenoblade Chronicles. Considering that's one of the last big Wii U games that hasn't yet been ported to the Switch, it seemed possible that today's direct was finally revealing that port. However, that's not the case because Nintendo and Monolith Soft are ready to move forward in the story with a threequel.",
              "p3": "From there, our protagonist and his party begin a massive adventure that seems to take them all around Mira (unless 3 takes place elsewhere). Like Xenoblade Chronicles 2 and the Xenoblade games before it, Chronicles 3 seems to feature a vast and open world.</p> <p class='content_paragraph'>Here's what Nintendo had to say in a press release released shortly after the Direct: “A vast world awaits in Xenoblade Chronicles 3, the next game in the acclaimed RPG series from Monolith Soft. Players will step into the roles of protagonists Noah and Mio amid turmoil between the hostile nations of Keves and Agnus. Six characters hailing from those nations will take part in a grand tale with 'life' as its central theme. Explore a new world that will connect the futures of both Xenoblade Chronicles and Xenoblade Chronicles 2, launching for Nintendo Switch in September 2022.”"
            }
       }
});

function eraseContent(){
  const main = document.getElementsByTagName("main");
  
  while(main[0].hasChildNodes()){
    main[0].removeChild(main[0].firstChild);
  }
}

function putNewsContent(gameName){
  eraseContent();

  const gameInfo = newsPost[gameName];
  const gameContent = gameInfo.conteudo;

  var fig = document.createElement('figure');
  var img = document.createElement('img');
  var figCaption = document.createElement('figcaption');
  img.setAttribute("id", "game_image");
  img.setAttribute("src", gameInfo.imagem);
  figCaption.textContent = gameInfo.titulo;

  fig.appendChild(img);
  fig.appendChild(figCaption)
  
  document.getElementsByTagName("main")[0].appendChild(fig);
  
  var section = document.createElement('section');
  section.setAttribute("id", "main_content");

  for(var paragraph in gameContent){
    var p = document.createElement('p');
    p.classList.add('content_paragraph');
    p.textContent = gameContent[paragraph];
    section.appendChild(p);
  }

  document.getElementsByTagName("main")[0].appendChild(section);
}

/**** Reviews Posts ****/
var reviewsPost = Object.freeze({
  "MonsterHunterRise":{
            "titulo": "Monster Hunter Rise Review",
            "imagem": "/images/MonsterHunterRiseReview.jpg",
            "conteudo":{
              "p1": "Monster Hunter: World was an important paradigm shift for Capcom's beloved franchise. The well-paced difficulty ramp made progression enjoyable for newcomers, while countless endgame challenges kept expert hunters coming back for more. Monster Hunter Rise's gameplay often attempts to copy World's success, which isn't always a bad thing. Battles continue to be an exhilarating dance with death, gear customization is satisfying, and coordinating hunts with friends makes for awesome fun and unexpected outcomes. Even with the introduction of new mechanics that help amplify these features, Monster Hunter Rise struggles to establish a creative identity of its own.",
              "p2": "Encounters with huge and impressive beasts is the centerpiece of the experience, putting your skills with the myriad weapon types to the test. Once victorious, you spend your downtime sprinting around the main hub, upgrading or forging better equipment, nabbing a bunch of pending quests from NPCs, and meticulously preparing for the next hunt. This captures the fundamentals of the fantasy-action series, but Monster Hunter Rise doesn't venture far beyond that comfort zone.",
              "p3": "During the opening hours, the people of Kamura Village are busy preparing for the “calamity,” an army of wild monsters hell-bent on laying waste to everything in their path. As the village's newly registered hunter, you must slay or capture numerous creatures in the biomes beyond your hometown's steel gates. As soon as you're done marveling at the blooming cherry blossom trees and humming along to the gorgeous score, be sure to grab key consumables from your ever-expanding item box, eat a delicious meal at the local eatery for exclusive bonuses, and venture forth into the unknown. This routine has a comfortable monotony that Monster Hunter fans will likely appreciate, but the addition of the “Buddy Plaza” adds a new feature to your return trips.",
              "p4": "The Buddy Plaza is a base of operations for your palicoes and palamutes (cat and dog warriors, respectively). You can send your trusty pets on missions of their own to procure miscellaneous crafting materials, spend currency to train them so that they'll be more effective in future engagements, swap out their equipment, or hire even more of them by talking to the handler. Buddies are extremely versatile, and Monster Hunter: Rise constantly rewards you for using the plaza's various facilities. Still grinding for that rare beak or tail? Your palico “meowcenaries” might surprise you with one from a recent expedition. This kind of positive feedback gives the lulls between combat/exploration some much-needed flavor.",
              "p5": "The environments are visually arresting, and house entire ecosystems filled to the brim with endemic life as well as hard-to-find secrets. My two favorite locales - Shrine Ruins and Flooded Forest - are littered with the remnants of ancient civilizations; they have huts wrapped in thick vines and sky-piercing pyramids that loom in the distance. While roaming, I often thought about the histories of these forsaken settlements and the people that once called them home. However, my imagination was often all I had to go on, since the lack of meaningful story beats makes the plot fall flat.",
              "p6": "A generic tower defense mode serves as a lackluster reminder of the larger narrative; these jarring “rampage quests” involve constructing an array of automated turrets and mountable ballistae around the village's gates. Waves of monsters clutter the screen and work together to pummel you while also breaking through your defenses. All the enemies are damage sponges, and clearing the arena hardly requires much thought; I often just held the fire button until I was the last one standing. Thankfully, you aren't required to complete a ton of rampage quests to gain access to Monster Hunter Rise's main missions.",
              "p7": "You spend most of your playthrough experiencing the classic loop: Battle gigantic adversaries like the feral Arzuros and Lagombi, collect mundane items, and deliver heavy objects to camp. Be sure to explore the nooks and crannies of every map as floating, colorful birds called “Spiribirds” can be absorbed to increase your health, stamina, attack, or defense. These buffs make completing the above-mentioned missions much easier. Don't want to do all of that on foot? Ride your palamute to expedite navigation or whip out your wirebug to scale cliffsides and mountain ranges in seconds.",
              "p8": "Wirebug attacks, called Silkbinds, add a new layer of intensity to the action. When used repeatedly, Silkbinds force monsters into a mountable state. These short combat sequences are all about using a monster's power against them by ramming into nearby structures for stagger damage or sprinting towards other unsuspecting adversaries to dish out the pain. Wyvern-riding is my favorite mechanic because it adds an exciting burst of strategy to the franchise's age-old combat system.",
              "p9": "Beyond mounting monsters and using the wirebug to wall-run in spectacular fashion, not much else distinguishes Monster Hunter Rise from the installments that came before. It has enough endgame content to keep you occupied long after the credits roll (if you don't mind copious amounts of grinding) and multiplayer is still the optimal way to play, but the excitement of my early hunts waned before long. Monster Hunter Rise is far from being the next definitive chapter in the series. Nevertheless, if you're looking for a polished-but-conventional adventure with a few small-scale nuances, then you'll be right at home in Kamura Village.",
            }
          },
    "PokemonBrilliantDiamond&ShiningPearl": 
        {
            "titulo": "Pokémon Briliant Diamond & Shining Pearl Review",
            "imagem": "/images/PokemonReview.jpg",
            "conteudo": {
              "p1": "Originally released in 2006, Pokémon Diamond and Pearl ushered in a new generation of Pokémon games onto the Nintendo DS. With the themes of evolution and creation woven throughout the story, the upgraded designs of the new Pokémon found throughout the Sinnoh region, as well as newly discovered evolutionary lines of fan-favorite monsters, these games felt like a notable step forward for the franchise. In remaking these classics new Pokémon developer ILCA proves it can handle recreating the crucial tenants of the franchise.",
              "p2": "For the most part, Brilliant Diamond and Shining Pearl are “faithful remakes” - as The Pokémon Company likes to call them - of their namesake DS games. The skeleton is there, with the same towns, routes, trainers, and Pokédex of monsters found throughout the adventure. You still start from humble beginnings in Twinleaf Town, where starry-eyed trainers receive a Pokédex from Professor Rowan and their choice of starter Pokémon. From there, you meet your friends and rivals, Dawn and Barry, and set off along your journey to conquer eight Gyms and become champion of the region. You'll also uncover Team Galactic's plans to harness the energy of evolution and the legendary creation duo of Dialga or Palkia. Nothing in the story is new or surprising, but I found that acceptable - and preferable - after being away from Sinnoh for over a decade.",
              "p3": "ILCA opted to recreate the DS game's chibi characters in 3D and keep the world's top-down perspective, which accentuates the feeling of these remakes remaining faithful to the source material. This is a deviation from how previous remakes have modernized their graphical styles and feature sets. That's not to say the visuals look dated. New graphical enhancements to lighting, shadows, and water look great. The abundance of reflections on surfaces throughout the world and especially during Pokémon battles is also impressive. Unlike characters in the overworld, fights utilize full-size Pokémon and trainer models with unique environments determined by your location in the world. These scenes look great and are mostly free of framerate drops or the slowdown that plagues other 3D entries in the series.",
              "p4": "Brilliant Diamond and Shining Pearl deviate from the mechanical blueprint, with varying degrees of success. Newer innovations like autosave or the ability to view the strength and weaknesses of moves in battle are great additions, which I always like to see.  Pokémon also no longer need to be taught HMs to utilize moves like Rock Smash or Cut to navigate puzzles or obstacles in the world, something that would have taken up a move slots in the original titles. EXP Share is, on its face, a great way to cut down on unnecessary grinding to ensure your lesser-used Pokémon are battle-ready. However, the developers haven't taken any measures to balance this feature, and there isn't a way to turn EXP Share off. As a result, my teams felt over-leveled as the game progressed, making big matches against Team Galactic or any of the Gym leaders feel easy and insignificant. I steamrolled through challengers on the surface of Sinnoh and had to find more formidable foes elsewhere.",
              "p5": "My favorite place to explore has been the Grand Underground, a massive subterranean cave system lying beneath the surface of Sinnoh. I mean it, this place is enormous and spans just about the size of the main map. Here you dig for countless gems, fossils, and statues in the walls and Hideaways. These Hideaways are larger areas found within the Grand Underground, complete with biomes and higher-leveled Pokémon you wouldn't normally find above ground, many of which aren't a part of the standard Sinnoh Pokédex. I found the challenge I craved above ground in these Hideaways as I captured new, exotic creatures to diversify my team. Players can create Secret Bases by digging customizable rooms in the cavern wall. Placing special Pokémon statues inside these rooms altered which monsters I found within the Hideaways. Those looking to catch em all should spend a lot of time in the Grand Underground, excavating precious items and tweaking statue combinations to fill out the Pokédex.",
              "p6": "Other activities include the Pokémon pageants called Super Contest Shows, which I liked more than I thought I would. You'll wow judges with a simple rhythm game and unleash a pre-chosen attack at the perfect moment to score points. I also loved customizing my Pokéballs with the Ball Capsule system. With an expanded system from Diamond and Pearl, you can slap various stickers on the capsules to create unique animations and earn extra points when tossing a Pokémon into these Super Contest Shows. Stickers add cool flames, bubbles, sparks, or musical notes to give an extra bit of flash and flourish, granting a level of personalization absent in the DS games. Even better, your Ball Capsule animations show up in battle but won't affect how fights play out in any way.",
              "p7": "While Brilliant Diamond and Shining Pearl don't move the needle in terms of what Pokémon games will look and play like moving forward, they mostly hit the mark in being faithful to the originals. I've really enjoyed my time re-exploring Sinnoh, despite my qualms with the lack of critical path difficulty. They're a welcome throwback to a simpler time when I felt completing a Pokédex was a somewhat realistic task to undertake. Veteran trainers will find plenty here to scratch a nostalgic itch, and new trainers who missed out the first time around have a solid adventure to embark on."
            }
        },
    "AgeOfEmpiresIV": 
        {
            "titulo": "Age of Empires IV Review",
            "imagem": "/images/AgeOfEmpiresReview.jpg",
            "conteudo":{
              "p1": "Age of Empires IV gives players eight different civilizations to explore in both single-player and multiplayer real-time strategy. While there is a lengthy campaign that spans multiple civilizations, the longevity of the experience lies in multiplayer encounters. If multiplayer isn't your thing, you do miss out on a hefty chunk of the game, but there are always skirmishes to take on A.I. at a comfortable difficulty level if you don't feel like taking on other players.",
              "p2": "Age of Empires IV is incredibly safe in its execution, channeling the spirit of Age of Empires II for many of its systems, mechanics, and features. While the divisive Age of Empires III hit 16 years ago, it's a bit of a dulling anesthetic seeing IV play things so close to Age of Empires II.",
              "p3": "There's a meaty campaign in which the first segment functions as an extensive tutorial that can teach even an RTS neophyte to harvest resources, form control groups, and learn how to break down walled fortifications. These campaign offerings are heavily rooted in classical RTS and mostly involve building up forces and resources and taking out your opponents, but there are some nice surprises here too. Much of the good stuff here outside of the ordinary involves historical figures that lead troops that have been given special abilities for the campaign, adding a bit of zest and flair to the rote.",
              "p4": "However, the most enjoyable aspect of the campaigns wasn't the gameplay. Instead, I had a blast nerding out during History-channel-style videos and segments between missions. I haven't had a Magna Carta refresher like this since high school. Some of the video segments occur in an offbeat fashion where ancient battles and history are superimposed onto modern environments. Whatever the case, it works, and I found myself motivated to complete each fierce war involving William the Conqueror, King John, and others to unravel the next layer of edutainment. The video vignettes and bonus history content keep things interesting among many traditional “resource up and go” missions.",
              "p5": "Within the eight different civilizations, there is a ton of gameplay diversity, even inside each culture. Feel like playing incredibly aggressive? Pick the Mongols and begin expanding immediately and putting pressure on your opponent. Want to annihilate the enemy at long range? Get some English longbowmen in the ranks! And when nothing else but giant elephant wrath will do, pick the Delhi Sultanate and rip through opposing fortifications. Exploring other unique elements like one culture not requiring any resources to execute research provides plenty of depth. There's a lot to learn and experiment with each faction's unique buildings, units, and game mechanics, and it's fun to try out different build orders and routes to victory.",
              "p6": "Even if you don't want to play against other players in multiplayer, you can team up with them and take on co-op vs. AI encounters. Pretty much every game you play grants experience points that go towards unlocking new cosmetics you can show off with, including portraits, coats-of-arms, and town monuments. These don't force you to play any way you don't want to but offer those that choose to master a faction some visual flair to take into their matches.",
              "p7": "The real-time strategy genre remains relevant, fueled by a few big titles once in a while. While Age of Empires IV lacks any ambition to even gently jostle the standards set by Age of Empires II decades earlier, it's a good way to play a classic-feeling RTS today with some slick polish and panache."
            }
        },
    "ForzaHorizon5": 
        {
            "titulo": "Forza Horizon 5",
            "imagem": "/images/ForzaHorizon5Review.jpg",
            "conteudo":{
              "p1": "Since the spin-off serie's inception, Forza Horizon's approachable and exciting racing action has appealed to a broad audience. Forza Horizon 5 continues this tradition of delivering stellar driving mechanics within a gorgeous destination, this time taking players to Mexico for one of the best, most expansive racing games I've ever played.",
              "p2": "Driving through Mexico in Forza Horizon 5 is an utter delight thanks to superb, dynamic driving mechanics that consider the terrain, weather, and handling of the more than 500 vehicles you drive. Forza Horizon 5 aptly demonstrates this through an incredible opening sequence, where different cars drop from planes and land in disparate biomes with sandstorms, snaking rivers, and wide-open straightaways, all set to music. However, Horizon further hammers home both the differences in the handling and the outstanding mechanics the longer you spend cruising around the world.",
              "p3": "Forza Horizon 5's sense of speed is incredible. Whether you're tactfully navigating an off-road course in the lush rainforests or screaming down a desert highway, the difference between staying on the road and spinning off into the brush is razor thin. Forza Horizon 5 excels in delivering diverse courses that throw unique challenges your way, ranging from traditional races to courses with objectives. The Drivatar system - which replicates your friend's tendencies using A.I. racers - is a series mainstay now, but I loved developing rivalries with specific friends, even though I wasn't racing against them in real-time.",
              "p4": "Playground Game's lovingly crafted interpretation of Mexico and its 11 distinct biomes deliver some of the most stunning visuals I've ever witnessed in a video game. This open world houses a venerable cornucopia of activities available to players, which is astounding - if not a little overwhelming. It's sometimes challenging to find some of the events I wanted, given the number of activity icons on the map. Thankfully you can apply map filters or ask your car's A.I. to set your navigation to nearby events of your liking. Still, that didn't stop me from getting distracted by the many events on offer along my route.",
              "p5": "If you grow tired of competing in standard racing activities, you can participate in barn finds, where you search for and rescue classic cars rotting in countryside barns. Meanwhile, stories have you helping characters through driving-based missions. I loved hunting down and completing those mission types, but the open world also offers a ton of quick, fun activities such as seeing how fast you can drive through a speed trap, how far you can launch off a ramp, or how much you can slide through marked drift zones. These are fun ways to gain experience and accolades to level up your driver and vehicles with new perks, but my favorite part of these random world activities is how they instantly compare to your friends. More times than I could count, I noticed my friend hit a higher top speed, causing me to turn around and try the challenge again.",
              "p6": "While exploring Mexico, you may also stumble upon online events. These public activities let you seamlessly join with other players to complete a common goal, such as accruing a set amount of distance off a jump or drifting and destroying piñatas in an area. You can even participate in a battle royale-style Eliminator mode where you're challenging other players in the session, knocking them out of the competition, taking their cars, and trying to be the last player remaining. These are fun diversions, but my favorite online activities involve creating a convoy of players, driving around the world, and entering events with one another.",
              "p7": "All these activities culminate in Expeditions, unique setpiece-driven campaign sequences that provide some of the most memorable events in the game. From driving up a rocky volcano as raucous music blares over the stereo to storming through an off-road course against a pair of monster trucks, the Expeditions and subsequent story missions are the moments that stuck with me the longest.",
              "p8": "If Forza's many developer-created events aren't enough, players can also create and share activities using EventLab. This tool makes it as easy as driving the route you want to create, placing checkpoints with a press of a button, and drafting a name, description, and ruleset. I loved sharing these creations because they appear alongside developer-created activities in other player's games, giving them the option to test their skills in your designs.",
              "p9": "At every turn, Forza Horizon 5 impresses in ways few games have. From the first mile, I was on the edge of my seat. With so much to do in such a relentlessly gorgeous world, I suspect it won't be long before I get the itch to jump back into the driver's seat of my favorite car. Even amidst a competitive racing field, Forza Horizon 5 is a finely tuned supercar.",
            }
        }
});

function putReviewsContent(gameName){
  eraseContent();

  const gameInfo = reviewsPost[gameName];
  const gameContent = gameInfo.conteudo;

  var fig = document.createElement('figure');
  var img = document.createElement('img');
  var figCaption = document.createElement('figcaption');
  img.setAttribute("id", "game_image");
  img.setAttribute("src", gameInfo.imagem);
  figCaption.textContent = gameInfo.titulo;

  fig.appendChild(img);
  fig.appendChild(figCaption)
  
  document.getElementsByTagName("main")[0].appendChild(fig);
  
  var section = document.createElement('section');
  section.setAttribute("id", "main_content");

  for(var paragraph in gameContent){
    var p = document.createElement('p');
    p.classList.add('content_paragraph');
    p.textContent = gameContent[paragraph];
    section.appendChild(p);
  }

  document.getElementsByTagName("main")[0].appendChild(section);
}