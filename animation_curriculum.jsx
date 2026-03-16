import { useState, useEffect, useRef } from "react";

const CURRICULUM = {
  1: {
    title: "The Living Line",
    subtitle: "Principles & Observation",
    color: "#E8C547",
    accent: "#1a1a2e",
    description: "Year one is about rewiring how you see. Every exercise here trains your eye before your hand.",
    months: [
      {
        month: 1,
        title: "Timing & The Bounce",
        focus: "Squash, Stretch, Spacing",
        exercises: [
          {
            day: "Mon",
            title: "The Rubber Ball",
            duration: "45 min",
            difficulty: 1,
            description: "Animate a rubber ball bouncing off a hard floor. Focus entirely on squash at impact (flatten the ball to 60% height, widen by 40%) and stretch during peak velocity (tall, narrow oval). The spacing between drawings should be widest at the top of the arc, tightest at the bottom.",
            guide: {
              steps: [
                "Draw the ball at apex — perfect circle, 8 frames hang time",
                "Accelerate down: space drawings closer near top, wider as it falls",
                "At impact: squash to 60% height, 140% width — hold 2 frames",
                "Rebound: immediate stretch, 130% height, 80% width",
                "Ease out at top of next bounce — the ball decelerates"
              ],
              watchFor: "The single most common mistake: equal spacing between drawings. Motion has acceleration.",
              filmStudy: "Watch the Luxo Jr. short (Pixar, 1986) — 2 minutes, frame by frame. Every bounce is a masterclass.",
              keyPrinciple: "Squash & Stretch + Timing",
              visualNote: "At impact, the ball's CENTER OF MASS does not change. Only the shape deforms. Students often move the center — don't."
            }
          },
          {
            day: "Tue",
            title: "10 Material Balls",
            duration: "60 min",
            difficulty: 1,
            description: "Same bounce setup, 10 different materials: rubber, bowling ball, ping pong, soap bubble, lead weight, balloon, tennis, mercury droplet, ice cube, glass marble. The ONLY thing that changes is timing and deformation amount.",
            guide: {
              steps: [
                "Bowling ball: No squash/stretch at all, very short bounce height on rebound",
                "Rubber ball: Maximum squash/stretch, bounces many times",
                "Soap bubble: Extreme wobble, POPS on third contact",
                "Lead weight: Hits like a bowling ball but slower drop, craters the floor",
                "Balloon: Floats, barely bounces, drifts sideways"
              ],
              watchFor: "Are you changing the arc height proportionally? A lead weight barely rebounds. A balloon barely falls.",
              filmStudy: "The opening of Up — the balloon sequence communicates weight and fragility through timing alone.",
              keyPrinciple: "Weight through Timing",
              visualNote: "Chart your timing before drawing. Write out the frame numbers first."
            }
          },
          {
            day: "Wed",
            title: "The Flour Sack Falls",
            duration: "50 min",
            difficulty: 2,
            description: "A flour sack drops from a shelf 3 feet high. Unlike the ball, the flour sack has a flexible body — it will fold, compress, and settle. The mass shifts inside as it lands. This is your first character exercise.",
            guide: {
              steps: [
                "Sack falls: slight trailing at the top corners (drag)",
                "Just before impact: anticipation — sack compresses slightly upward",
                "Impact: FULL squash — sack spreads wide and flat",
                "Settle: 3–4 overlapping bounces of the top corners, getting smaller",
                "Final rest: slight jiggle as mass stops moving"
              ],
              watchFor: "The CORNERS of the sack lag behind. The body leads, the corners follow. This is overlapping action.",
              filmStudy: "Any Art Babbitt flour sack test. Search YouTube — many are uploaded.",
              keyPrinciple: "Follow-Through & Overlapping Action",
              visualNote: "The center of the sack lands first. Then the edges catch up. Then they overshoot slightly. Then settle."
            }
          },
          {
            day: "Thu",
            title: "Spacing Chart Studies",
            duration: "30 min",
            difficulty: 1,
            description: "No animation today. Pure observation exercise. Find a pendulum (or film a lamp swinging). Draw 20 positions of its swing on one sheet of paper. You are making a spacing chart. The arc is the path. The spacing of the 20 dots shows the speed.",
            guide: {
              steps: [
                "Film yourself swinging a pen on a string",
                "Play it back frame by frame",
                "Mark the pen position on each frame on a single drawing",
                "Connect them with a smooth arc",
                "Notice: the dots cluster at the ends (slow), spread wide in the middle (fast)"
              ],
              watchFor: "Even students who understand spacing intellectually are shocked when they see it physically drawn out.",
              filmStudy: "Richard Williams dedicates 20 pages to spacing charts in the Survival Kit. Reread them now with your own chart beside you.",
              keyPrinciple: "Spacing & Arcs",
              visualNote: "This chart IS your animation. Every animator should be able to draw a spacing chart for any shot before they start."
            }
          },
          {
            day: "Fri",
            title: "Arcs Audit",
            duration: "40 min",
            difficulty: 1,
            description: "Take any animation you've made this week. Print or export every frame. Using a red pen, draw the arc that each major point (top of ball, corner of sack) traces through space. Are your arcs clean? Broken arcs = pops and hitches.",
            guide: {
              steps: [
                "Export frames as a contact sheet",
                "With a red marker, connect the path of the ball or sack corner",
                "A perfect arc is smooth and unbroken",
                "Any sharp angle or reversal is a 'broken arc' — find and fix them",
                "Redo the shot with your arc corrections"
              ],
              watchFor: "Even one broken arc reads as a 'pop' that the audience feels even if they can't identify it.",
              filmStudy: "Glen Keane's Beast transformation in Beauty and the Beast — every limb on a clean arc even during chaos.",
              keyPrinciple: "Arcs",
              visualNote: "Professional animators draw arcs BEFORE animating the in-betweens. Arc = planned path. In-betweens = filling the path."
            }
          }
        ]
      },
      {
        month: 2,
        title: "The Walk Cycle",
        focus: "Weight, Personality, Mechanics",
        exercises: [
          {
            day: "Mon",
            title: "The Vanilla Walk",
            duration: "90 min",
            difficulty: 2,
            description: "Animate the most neutral, mechanical, utterly personality-free walk cycle you can. This is not boring — this is foundational. Every personality walk is a deviation from this baseline. You cannot deviate from what you don't know.",
            guide: {
              steps: [
                "12-frame cycle (at 24fps = 2 steps per second — normal walking pace)",
                "Contact position: lead heel down, trailing toe pushing off",
                "Down position (frame 3): body at lowest point, absorbing impact",
                "Passing position (frame 6): standing leg straight, free leg passes",
                "Up position (frame 9): body at highest point, free leg extending",
                "Head bobs on a figure-8 path, NOT straight up and down"
              ],
              watchFor: "The HEAD does not bounce straight up and down. It traces a figure-8 or shallow oval. Straight up-down looks robotic.",
              filmStudy: "The walk cycles in Snow White (1937) — the first convincing human walk in animation history.",
              keyPrinciple: "The Walk — Core Mechanics",
              visualNote: "Study your own shadow walking. The shadow removes detail and shows you only silhouette and timing."
            }
          },
          {
            day: "Wed",
            title: "6 Personality Walks",
            duration: "2 hrs",
            difficulty: 3,
            description: "Using your vanilla walk as a base, create 6 walks that each tell a complete character story: Exhausted office worker at 6pm. Toddler discovering they can run. Elderly professor lost in thought. Villain who owns every room. Teenager trying to look cool. Someone who just got terrible news.",
            guide: {
              steps: [
                "Exhausted: Down position exaggerated, head forward and low, shuffle — short stride",
                "Toddler: Arms out for balance, HIGH up position, quick timing, unpredictable",
                "Professor: Hands behind back, slow deliberate timing, head slightly bowed",
                "Villain: SLOW timing, wide stance, arms away from body, head slightly back",
                "Teenager: Exaggerated arm swing trying to look casual, actually looks effortful",
                "Bad news: The USUAL mechanics of walking but with ALL the energy drained out"
              ],
              watchFor: "The single tell of an amateur: making every character walk at the same pace. Timing IS character.",
              filmStudy: "The Jungle Book (1967) — watch Baloo, Shere Khan, and King Louie walk. Three completely different personalities.",
              keyPrinciple: "Personality Through Timing",
              visualNote: "Write one sentence about your character BEFORE animating. Post it above your screen. Every drawing decision should serve that sentence."
            }
          }
        ]
      }
    ],
    weeklyTheme: [
      "Week 1: Balls & Weight", "Week 2: The Flour Sack", "Week 3: The Walk",
      "Week 4: The Run", "Week 5: Anticipation Games", "Week 6: Follow-Through Lab",
      "Week 7: Overlapping Action", "Week 8: Arcs Workshop", "Week 9: Pose Library Build",
      "Week 10: First Character Test", "Week 11: Observation Month", "Week 12: Year-End Reel"
    ],
    milestone: "By end of Year 1: 12 completed exercises, 1 demo reel shot, sketchbook filled with observed motion studies. You should be able to animate a convincing walk cycle in under 2 hours.",
    tools: ["Pencil + lightbox", "Rough Animator (iPad)", "Blender (free)", "Flipbook app"],
    bookChapters: ["ASK Chapters 1–12 (full reading)", "Preston Blair Cartoon Animation Ch. 1–4"]
  },
  2: {
    title: "The Breathing Character",
    subtitle: "Acting, Dialogue & Performance",
    color: "#FF6B6B",
    accent: "#1a0a0a",
    description: "Year two is where you stop making moving shapes and start making living beings. Acting theory enters the studio.",
    months: [
      {
        month: 1,
        title: "Pantomime & Silent Acting",
        focus: "Performance Without Words",
        exercises: [
          {
            day: "Mon",
            title: "The Found Wallet",
            duration: "2 hrs",
            difficulty: 3,
            description: "A character finds a wallet on the ground. Without ANY dialogue, text, or reaction symbols — the audience must understand: they see it, they pick it up, they check what's inside, they make a moral decision. You choose what the decision is. This tests everything: anticipation, acting, weight, timing.",
            guide: {
              steps: [
                "Start: character walking, no awareness of wallet",
                "Spot: eye catches something — the EYES must lead, not the head",
                "Decision to stop: slight anticipation before change of direction",
                "Approach: curiosity in every step — different from their normal walk",
                "Pick up: weight of bending, weight of the wallet itself",
                "Examine: face and hands must communicate what they find",
                "Moral beat: this is your acting moment — hold it 2–3 seconds"
              ],
              watchFor: "If you need to add text to explain what's happening, the animation has failed. Keep removing text until the action is clear.",
              filmStudy: "Any Buster Keaton short film. Keaton communicated entire novels without a single expression change.",
              keyPrinciple: "Pantomime & Storytelling",
              visualNote: "Act it out yourself first. Record on your phone. Watch back. Your instinctive performance will tell you the keyframes."
            }
          },
          {
            day: "Thu",
            title: "Subtext Exercise",
            duration: "90 min",
            difficulty: 4,
            description: "Animate a character saying 'I'm fine.' They are not fine. The body, posture, timing, and micro-expressions must contradict what a literal reading of the words would suggest. No dialogue needed — this is pure body language.",
            guide: {
              steps: [
                "Establish normal/happy body language for this character first (so we have contrast)",
                "The 'I'm fine' pose: physically smaller, arms in, micro-tension",
                "The blink rate increases under emotional stress — use this",
                "A beat of stillness that holds one beat TOO long before they speak",
                "The recovery attempt — they physically try to reset to normal and almost make it"
              ],
              watchFor: "Subtext lives in what the character DOES NOT do. The pause. The non-reaction. Master stillness.",
              filmStudy: "Every scene with Bing Bong in Inside Out (2015). Pixar's greatest subtext performance.",
              keyPrinciple: "Subtext & Internal State",
              visualNote: "Subtext is the gap between what a character wants to show and what leaks through. Both states must be visible simultaneously."
            }
          }
        ]
      }
    ],
    weeklyTheme: [
      "Week 1: Silent Acting Scenes", "Week 2: Reaction Shots", "Week 3: Lip Sync Mechanics",
      "Week 4: First Dialogue Shot", "Week 5: Two-Character Scene", "Week 6: Comedy Timing",
      "Week 7: Tragedy & Weight", "Week 8: The Long Take", "Week 9: Camera & Staging",
      "Week 10: Performance Refinement", "Week 11: Polish Week", "Week 12: Acting Reel"
    ],
    milestone: "By end of Year 2: 3 complete dialogue shots, 2 pantomime pieces. You should be able to take a cold audio clip and produce a fully blocked shot in one day.",
    tools: ["11secondclub.com monthly competition", "Reference video (film yourself)", "Autodesk Maya or Blender"],
    bookChapters: ["ASK Acting sections", "Stanislavski An Actor Prepares", "Uta Hagen Respect for Acting"]
  },
  3: {
    title: "The Animal Kingdom",
    subtitle: "Creature, Weight & Non-Human Motion",
    color: "#4ECDC4",
    accent: "#0a1a1a",
    description: "Year three breaks your human-centric assumptions about locomotion. Everything moves. Not everything moves like people.",
    months: [
      {
        month: 1,
        title: "Quadruped Fundamentals",
        focus: "4-Legged Locomotion",
        exercises: [
          {
            day: "Mon",
            title: "The Dog Walk",
            duration: "2 hrs",
            difficulty: 3,
            description: "Animate a dog walking. The quadruped walk is one of the hardest mechanical challenges in animation — 4 limbs must be coordinated without feeling robotic. The key: diagonal pairs move together. Left front + right rear = one pair.",
            guide: {
              steps: [
                "Walk sequence: LF, RR, RF, LR (Left Front, Right Rear, Right Front, Left Rear)",
                "Spine undulates — the back flexes and extends with each stride",
                "Head bobs counterpoint to spine — as back rises, head tends to fall",
                "16-frame cycle for a medium-paced dog walk",
                "The TAIL is a full follow-through exercise on its own — do it last"
              ],
              watchFor: "Robots walk with all 4 legs in a rigid box. Dogs' spines are half the locomotion engine. Animate the spine first.",
              filmStudy: "Dug in Up (Pixar) — study every walk cycle. Bolt (Disney) — the body mechanics of a running dog at extreme speed.",
              keyPrinciple: "Quadruped Mechanics",
              visualNote: "Film your own dog, or use stock footage slowed to 25%. Draw every contact frame before you animate."
            }
          },
          {
            day: "Wed",
            title: "Gallop & Bound",
            duration: "2 hrs",
            difficulty: 4,
            description: "Animate a horse gallop AND a rabbit bounding. Two completely different solutions to 4-legged high-speed movement. The horse: legs reach forward together, suspension phase. The rabbit: both hind legs together, both front together — a leap repeated.",
            guide: {
              steps: [
                "Horse gallop: 8 frames, 4 ground contacts, 1 full suspension frame",
                "The suspension frame (all 4 off ground) is where the energy 'loads'",
                "Rabbit bound: hind legs land, body compresses, front paws reach, pushes",
                "Rabbit has TWO suspension phases per cycle",
                "Study Muybridge plates for both before drawing a single frame"
              ],
              watchFor: "The suspension phase is where animators cheat. Don't shorten it — that suspension is what makes the movement feel powerful.",
              filmStudy: "Spirit: Stallion of the Cimarron (DreamWorks, 2002) — every horse cycle was hand-drawn over live-action reference.",
              keyPrinciple: "High-Speed Quadruped Locomotion",
              visualNote: "Eadweard Muybridge's Animal Locomotion (1887) — this 135-year-old photographic study is still the single best reference for creature animation."
            }
          }
        ]
      }
    ],
    weeklyTheme: [
      "Week 1: Dog, Cat, Horse Walks", "Week 2: Bird Flight Mechanics", "Week 3: Snake & Worm",
      "Week 4: Insect Movement", "Week 5: Underwater Physics", "Week 6: Creature Design",
      "Week 7: Fantasy Creatures", "Week 8: Scale Study (Ant vs. Elephant)", "Week 9: Hybrid Creatures",
      "Week 10: Creature with Personality", "Week 11: Full Creature Scene", "Week 12: Creature Reel"
    ],
    milestone: "By end of Year 3: One complete creature shot in your reel. Ability to animate any quadruped walk from reference within one day.",
    tools: ["Muybridge Animal Locomotion reference", "Slow-motion video reference", "Maya with quadruped rig"],
    bookChapters: ["ASK animal locomotion sections", "Karl Sims locomotion papers", "Muybridge plates study"]
  },
  4: {
    title: "The Third Dimension",
    subtitle: "3D Pipeline, Volume & Space",
    color: "#A855F7",
    accent: "#0f0a1a",
    description: "Year four deepens your 3D craft or transforms your 2D knowledge into spatial thinking. Space, volume, and camera become your language.",
    weeklyTheme: [
      "Week 1: Camera as Character", "Week 2: Staging in 3D Space", "Week 3: Lighting & Mood",
      "Week 4: Physical Simulation", "Week 5: Facial Rigging", "Week 6: Complex Acting Shot",
      "Week 7: Crowd & Secondary Characters", "Week 8: Production Pace Training", "Week 9: VFX Collaboration",
      "Week 10: Short Film Pre-Production", "Week 11: Short Film Production", "Week 12: Completion & Critique"
    ],
    months: [],
    milestone: "By end of Year 4: First complete short film (30–60 seconds), production credits at an internship or junior role.",
    tools: ["Autodesk Maya (professional)", "Blender", "Arnold/RenderMan", "Shotgun/ShotGrid"],
    bookChapters: ["The Illusion of Life (Frank Thomas & Ollie Johnston)", "Ed Catmull Creativity Inc."]
  },
  5: {
    title: "The Performance Artist",
    subtitle: "Advanced Acting, Emotion & Story",
    color: "#F97316",
    accent: "#1a0800",
    description: "Year five: you stop thinking about how things move and start thinking about why they move. Emotion and story drive every frame.",
    weeklyTheme: [
      "Week 1: Emotional Memory Acting", "Week 2: Physical Comedy Timing", "Week 3: Tragedy Pacing",
      "Week 4: Silence as Performance", "Week 5: Multi-Character Ensemble", "Week 6: The Long Emotional Arc",
      "Week 7: Improvisation Exercises", "Week 8: Genre Studies (Horror/Comedy/Drama)", "Week 9: Retake Workshop",
      "Week 10: Voice Collaboration", "Week 11: Full Emotional Short", "Week 12: Festival Submission"
    ],
    months: [],
    milestone: "Year 5 target: Festival submission at Annecy, Ottawa, or SXSW. 11secondclub top 10 placement. Senior animator position applied for.",
    tools: ["11secondclub.com", "Animation Mentor feedback system", "Acting classes (in person)"],
    bookChapters: ["Michael Chekhov To the Actor", "Dario Fo Tricks of the Trade", "Chuck Jones Chuck Amuck"]
  },
  6: {
    title: "The Cinematic Eye",
    subtitle: "Directing, Staging & Visual Language",
    color: "#06B6D4",
    accent: "#0a1418",
    description: "Year six: camera, composition, and visual storytelling. The animator who understands directing becomes indispensable.",
    weeklyTheme: [
      "Week 1: Shot Language Study", "Week 2: Cinematography for Animators", "Week 3: Staging Masterclass",
      "Week 4: Editing Rhythm", "Week 5: Visual Metaphor", "Week 6: The Sequence (not the shot)",
      "Week 7: Color as Narrative", "Week 8: Sound Design Thinking", "Week 9: Storyboard to Final",
      "Week 10: Directing Your Own Scene", "Week 11: Supervising Junior Work", "Week 12: Directorial Reel"
    ],
    months: [],
    milestone: "Year 6: Able to storyboard, layout, and direct a 2-minute sequence. Begin pursuing lead animator or sequence supervisor roles.",
    tools: ["Storyboard Pro", "DaVinci Resolve (editing/color)", "Film analysis journal"],
    bookChapters: ["Directing the Story (Francis Glebas)", "Film Directing Shot by Shot (Steven Katz)", "Into the Woods (John Yorke)"]
  },
  7: {
    title: "The Specialist",
    subtitle: "Deep Mastery of Your Chosen Path",
    color: "#84CC16",
    accent: "#0a1400",
    description: "Year seven: you choose your deepest specialization and drill to bedrock. What is your unique contribution to the craft?",
    weeklyTheme: [
      "Week 1: Specialization Audit", "Week 2: Technical Deep-Dive", "Week 3: Studio Pipeline Study",
      "Week 4: Benchmark Against Professionals", "Week 5: Proprietary Techniques", "Week 6: Speed Training",
      "Week 7: Extreme Difficulty Challenges", "Week 8: Cross-Discipline Study", "Week 9: Research & Development",
      "Week 10: Innovation Project", "Week 11: Teach Your Specialty", "Week 12: Expert Portfolio"
    ],
    months: [],
    milestone: "Year 7: Recognized as a specialist. Invited to give talks, write tutorials, or join senior production.",
    tools: ["Specialty software (Houdini/Spine/Harmony)", "Industry conference presentations", "Research papers"],
    bookChapters: ["Technical papers from SIGGRAPH proceedings", "GDC Animation Summit talks (all years)"]
  },
  8: {
    title: "The Mentor",
    subtitle: "Teaching, Leadership & Supervision",
    color: "#EC4899",
    accent: "#1a0a12",
    description: "Year eight: mastery means nothing if it dies with you. Teaching is how you discover what you don't yet know.",
    weeklyTheme: [
      "Week 1: How to Give a Note", "Week 2: Dailies Leadership", "Week 3: Junior Development Plans",
      "Week 4: Difficult Conversations", "Week 5: Production Problem-Solving", "Week 6: Creative Brief Writing",
      "Week 7: Animation Bible Creation", "Week 8: Supervising Your First Shot", "Week 9: Building Team Culture",
      "Week 10: Critique Method Development", "Week 11: Full Supervision Sprint", "Week 12: Supervision Portfolio"
    ],
    months: [],
    milestone: "Year 8: Actively supervising or mentoring other animators in a production environment.",
    tools: ["Mentoring frameworks", "Production management tools", "Communication workshops"],
    bookChapters: ["The Effective Executive (Peter Drucker)", "Creativity Inc. (Catmull)", "Radical Candor (Kim Scott)"]
  },
  9: {
    title: "The Auteur",
    subtitle: "Personal Voice & Independent Work",
    color: "#F59E0B",
    accent: "#1a1000",
    description: "Year nine: what do YOU want to say? Your personal short film. Your artistic identity. Your contribution to the medium's history.",
    weeklyTheme: [
      "Week 1: Personal Theme Excavation", "Week 2: Visual Identity Workshop", "Week 3: Independent Script",
      "Week 4: Concept Development", "Week 5: Style Exploration", "Week 6: Funding & Production Planning",
      "Week 7: Personal Film Production", "Week 8: Festival Strategy", "Week 9: Industry Positioning",
      "Week 10: Public Work & Presence", "Week 11: Legacy Work", "Week 12: Career Reflection"
    ],
    months: [],
    milestone: "Year 9: Personal short film completed and submitted to at minimum 10 festivals internationally.",
    tools: ["Independent film grants (Sundance, IDA)", "Kickstarter/Seed funding", "Personal studio setup"],
    bookChapters: ["What I Talk About When I Talk About Running (Murakami — on creative discipline)", "The Creative Habit (Twyla Tharp)"]
  },
  10: {
    title: "The Living Legacy",
    subtitle: "Mastery, Contribution & What Remains",
    color: "#E8C547",
    accent: "#1a1400",
    description: "Year ten: you look back, and you look forward. The craft continues beyond you. What will you leave behind?",
    weeklyTheme: [
      "Week 1: Career Retrospective", "Week 2: The Principles Revisited", "Week 3: What Has Changed",
      "Week 4: The Frontier of Animation", "Week 5: AI, New Tools & The Core That Remains",
      "Week 6: Writing Your Own Survival Kit", "Week 7: Teaching the Full Curriculum",
      "Week 8: The Masterwork Project", "Week 9: Industry Contribution", "Week 10: Public Teaching",
      "Week 11: The Final Portfolio", "Week 12: What's Next"
    ],
    months: [],
    milestone: "Year 10: Read The Animator's Survival Kit one final time. Identify what Williams got right and what has evolved. You now have your own philosophy of animation.",
    tools: ["Your accumulated knowledge", "Your students", "Your personal work"],
    bookChapters: ["The Animator's Survival Kit — read it again. It will mean something completely different now."]
  }
};

const difficultyStars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

function ExerciseCard({ ex, accentColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: open ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${open ? accentColor + "88" : "rgba(255,255,255,0.1)"}`,
        borderRadius: 12,
        padding: "16px 20px",
        marginBottom: 12,
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{
          background: accentColor,
          color: "#000",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 13,
          padding: "2px 10px",
          borderRadius: 20,
          letterSpacing: 1,
          minWidth: 36,
          textAlign: "center"
        }}>{ex.day}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "#f0ede6", fontWeight: 700 }}>
              {ex.title}
            </span>
            <span style={{ fontSize: 11, color: accentColor, letterSpacing: 1 }}>
              {difficultyStars(ex.difficulty)}
            </span>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 3 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "monospace" }}>⏱ {ex.duration}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>{ex.guide.keyPrinciple}</span>
          </div>
        </div>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </div>

      {open && (
        <div style={{ marginTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, marginBottom: 20, fontFamily: "'Lora', serif" }}>
            {ex.description}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Step by Step */}
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 16, borderLeft: `3px solid ${accentColor}` }}>
              <div style={{ fontSize: 11, color: accentColor, letterSpacing: 2, fontFamily: "monospace", marginBottom: 12 }}>STEP-BY-STEP GUIDE</div>
              {ex.guide.steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                  <span style={{ background: accentColor, color: "#000", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, flexShrink: 0, marginTop: 2 }}>{i + 1}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Visual Guide */}
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: 14, borderLeft: "3px solid #888" }}>
                <div style={{ fontSize: 11, color: "#aaa", letterSpacing: 2, fontFamily: "monospace", marginBottom: 8 }}>✏ VISUAL NOTE</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>{ex.guide.visualNote}</p>
              </div>

              {/* Watch For */}
              <div style={{ background: "rgba(255,80,80,0.08)", borderRadius: 10, padding: 14, borderLeft: "3px solid #ff6b6b" }}>
                <div style={{ fontSize: 11, color: "#ff6b6b", letterSpacing: 2, fontFamily: "monospace", marginBottom: 8 }}>⚠ WATCH FOR</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>{ex.guide.watchFor}</p>
              </div>

              {/* Film Study */}
              <div style={{ background: "rgba(80,200,255,0.06)", borderRadius: 10, padding: 14, borderLeft: "3px solid #4ecdc4" }}>
                <div style={{ fontSize: 11, color: "#4ecdc4", letterSpacing: 2, fontFamily: "monospace", marginBottom: 8 }}>🎬 FILM STUDY</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: 0 }}>{ex.guide.filmStudy}</p>
              </div>
            </div>
          </div>

          {/* Pictorial Visual Guide */}
          <PictorialGuide exercise={ex} accentColor={accentColor} />
        </div>
      )}
    </div>
  );
}

function PictorialGuide({ exercise, accentColor }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const t = exercise.title;

    if (t === "The Rubber Ball") drawBounceBall(ctx, W, H, accentColor);
    else if (t === "10 Material Balls") drawMaterialBalls(ctx, W, H, accentColor);
    else if (t === "The Flour Sack Falls") drawFlourSack(ctx, W, H, accentColor);
    else if (t === "Spacing Chart Studies") drawSpacingChart(ctx, W, H, accentColor);
    else if (t === "Arcs Audit") drawArcsAudit(ctx, W, H, accentColor);
    else if (t === "The Vanilla Walk") drawWalkCycle(ctx, W, H, accentColor);
    else if (t === "6 Personality Walks") drawPersonalityWalks(ctx, W, H, accentColor);
    else if (t === "The Found Wallet") drawFoundWallet(ctx, W, H, accentColor);
    else if (t === "Subtext Exercise") drawSubtext(ctx, W, H, accentColor);
    else if (t === "The Dog Walk") drawDogWalk(ctx, W, H, accentColor);
    else if (t === "Gallop & Bound") drawGallop(ctx, W, H, accentColor);
    else drawGenericDiagram(ctx, W, H, accentColor, t);
  }, [exercise, accentColor]);

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 11, color: accentColor, letterSpacing: 2, fontFamily: "monospace", marginBottom: 10 }}>◈ PICTORIAL GUIDE</div>
      <canvas ref={canvasRef} width={760} height={220}
        style={{ width: "100%", height: "auto", borderRadius: 10, background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }} />
    </div>
  );
}

// ---- DRAWING FUNCTIONS ----
function drawBounceBall(ctx, W, H, color) {
  ctx.fillStyle = "rgba(0,0,0,0)";
  // floor
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(30, H - 30); ctx.lineTo(W - 30, H - 30); ctx.stroke();

  // arc path
  const pts = [
    [80, 40], [150, H - 55], [240, 65], [320, H - 55], [390, 90], [450, H - 55], [505, 110], [550, H - 55], [590, 125]
  ];
  ctx.strokeStyle = `${color}55`;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  pts.forEach((p, i) => i === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]));
  ctx.stroke();
  ctx.setLineDash([]);

  // balls at key positions
  const balls = [
    { x: 80, y: 40, rx: 16, ry: 16, label: "APEX" },
    { x: 150, y: H - 55, rx: 26, ry: 9, label: "SQUASH", isSquash: true },
    { x: 240, y: 65, rx: 11, ry: 20, label: "STRETCH", isStretch: true },
    { x: 320, y: H - 55, rx: 26, ry: 9, label: "SQUASH", isSquash: true },
    { x: 390, y: 90, rx: 13, ry: 13, label: "APEX 2" },
  ];
  balls.forEach(b => {
    ctx.beginPath();
    ctx.ellipse(b.x, b.y, b.rx, b.ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = color + "bb";
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "bold 9px monospace";
    ctx.textAlign = "center";
    ctx.fillText(b.label, b.x, b.y + b.ry + 14);
  });

  // annotation
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.font = "10px monospace";
  ctx.textAlign = "left";
  ctx.fillText("Spacing: WIDE at top (slow) → TIGHT at bottom (fast)", 30, 18);
  ctx.fillStyle = color + "99";
  ctx.fillText("← arc path (gravity curve, not straight line)", 350, 170);
}

function drawMaterialBalls(ctx, W, H, color) {
  const materials = [
    { name: "BOWLING", squash: 0.05, bounce: 0.15, x: 80 },
    { name: "RUBBER", squash: 0.45, bounce: 0.85, x: 190 },
    { name: "PING PONG", squash: 0.3, bounce: 0.7, x: 300 },
    { name: "SOAP BUBBLE", squash: 0.6, bounce: 0.4, x: 410 },
    { name: "LEAD", squash: 0.02, bounce: 0.05, x: 520 },
    { name: "BALLOON", squash: 0.5, bounce: 0.3, x: 630 },
  ];
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(30, H - 30); ctx.lineTo(W - 30, H - 30); ctx.stroke();

  materials.forEach(m => {
    const floorY = H - 30;
    const apexY = floorY - 160 * m.bounce;
    // arc
    ctx.strokeStyle = color + "33";
    ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(m.x, apexY); ctx.quadraticCurveTo(m.x, floorY - 20, m.x, floorY - 18); ctx.stroke();
    ctx.setLineDash([]);
    // ball at apex
    ctx.beginPath();
    ctx.ellipse(m.x, apexY, 12, 12, 0, 0, Math.PI * 2);
    ctx.fillStyle = color + "99"; ctx.fill();
    // squash ball
    const sqH = Math.max(3, 12 * (1 - m.squash));
    const sqW = 12 + m.squash * 14;
    ctx.beginPath();
    ctx.ellipse(m.x, floorY - sqH, sqW, sqH, 0, 0, Math.PI * 2);
    ctx.fillStyle = color + "cc"; ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "bold 8px monospace";
    ctx.textAlign = "center";
    ctx.fillText(m.name, m.x, H - 12);
  });

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace";
  ctx.textAlign = "left";
  ctx.fillText("Height = Elasticity.   Squash Amount = Softness.   Both change with material.", 30, 18);
}

function drawFlourSack(ctx, W, H, color) {
  const frames = [
    { x: 80, y: 50, w: 36, h: 50, tilt: 0, label: "FALLING" },
    { x: 200, y: 80, w: 38, h: 52, tilt: -0.15, label: "ANTICIPATION" },
    { x: 310, y: H - 55, w: 70, h: 22, tilt: 0, label: "IMPACT" },
    { x: 430, y: H - 62, w: 52, h: 38, tilt: 0.1, label: "REBOUND" },
    { x: 560, y: H - 52, w: 46, h: 30, tilt: 0, label: "SETTLE" },
    { x: 670, y: H - 48, w: 42, h: 28, tilt: 0.05, label: "REST" },
  ];

  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(30, H - 30); ctx.lineTo(W - 30, H - 30); ctx.stroke();

  frames.forEach((f, i) => {
    ctx.save();
    ctx.translate(f.x, f.y + f.h / 2);
    ctx.rotate(f.tilt);
    ctx.beginPath();
    ctx.ellipse(0, 0, f.w / 2, f.h / 2, 0, 0, Math.PI * 2);
    ctx.fillStyle = i === 2 ? color + "dd" : color + "77";
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    // tie at top
    ctx.beginPath();
    ctx.arc(0, -f.h / 2, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = i === 2 ? color : "rgba(255,255,255,0.5)";
    ctx.font = "bold 9px monospace";
    ctx.textAlign = "center";
    ctx.fillText(f.label, f.x, H - 12);

    if (i < frames.length - 1) {
      ctx.strokeStyle = color + "22";
      ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(f.x + f.w / 2 + 5, f.y + f.h / 2);
      ctx.lineTo(frames[i + 1].x - frames[i + 1].w / 2 - 5, frames[i + 1].y + frames[i + 1].h / 2);
      ctx.stroke(); ctx.setLineDash([]);
    }
  });
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace"; ctx.textAlign = "left";
  ctx.fillText("Corners lag behind body → OVERLAPPING ACTION", 30, 18);
}

function drawSpacingChart(ctx, W, H, color) {
  const cx = W / 2, cy = H / 2;
  const r = 85;
  // pendulum arc
  ctx.strokeStyle = color + "44"; ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy - 60, r, Math.PI * 0.55, Math.PI * 2.45);
  ctx.stroke();

  // spacing dots — clustered at ends, spread in middle
  const positions = [-0.9, -0.75, -0.6, -0.42, -0.22, 0, 0.22, 0.42, 0.6, 0.75, 0.9];
  positions.forEach((p, i) => {
    const angle = Math.PI / 2 + p * 1.1;
    const px = cx + r * Math.cos(angle + Math.PI);
    const py = cy - 60 + r * Math.sin(angle + Math.PI) + r;
    ctx.beginPath();
    ctx.arc(px, py, i === 5 ? 8 : 5, 0, Math.PI * 2);
    ctx.fillStyle = i === 5 ? color : color + "99";
    ctx.fill();
  });

  ctx.fillStyle = color;
  ctx.font = "bold 10px monospace"; ctx.textAlign = "center";
  ctx.fillText("SLOW (clustered)", cx - 105, H - 40);
  ctx.fillText("FAST (spread)", cx, H - 20);
  ctx.fillText("SLOW (clustered)", cx + 105, H - 40);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace";
  ctx.fillText("Spacing = Speed.  This chart IS your animation.", cx, 20);
}

function drawArcsAudit(ctx, W, H, color) {
  // good arc vs broken arc
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "11px monospace"; ctx.textAlign = "center";
  ctx.fillText("CLEAN ARC ✓", W / 4, 20);
  ctx.fillText("BROKEN ARC ✗", (W * 3) / 4, 20);

  // Clean arc
  ctx.strokeStyle = "#4ade80"; ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(80, H - 50);
  ctx.quadraticCurveTo(W / 4, 40, W / 2 - 50, H - 50);
  ctx.stroke();
  const cleanPts = [[80, H - 50], [110, H - 90], [145, H - 120], [180, H - 140], [210, H - 145], [240, H - 130], [260, H - 100], [W / 2 - 50, H - 50]];
  cleanPts.forEach(p => { ctx.beginPath(); ctx.arc(p[0], p[1], 4, 0, Math.PI * 2); ctx.fillStyle = "#4ade80cc"; ctx.fill(); });

  // Broken arc
  ctx.strokeStyle = "#ff6b6b"; ctx.lineWidth = 2.5;
  const brokenPts = [[W / 2 + 50, H - 50], [W / 2 + 90, H - 90], [W / 2 + 120, H - 80], [W / 2 + 155, H - 130], [W / 2 + 175, H - 115], [W / 2 + 210, H - 145], [W / 2 + 240, H - 100], [W - 80, H - 50]];
  ctx.beginPath();
  brokenPts.forEach((p, i) => i === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]));
  ctx.stroke();
  brokenPts.forEach(p => { ctx.beginPath(); ctx.arc(p[0], p[1], 4, 0, Math.PI * 2); ctx.fillStyle = "#ff6b6bcc"; ctx.fill(); });

  // Break annotations
  ctx.fillStyle = "#ff6b6b"; ctx.font = "bold 9px monospace"; ctx.textAlign = "center";
  ctx.fillText("↑ BREAK", W / 2 + 120, H - 70);
  ctx.fillText("↑ BREAK", W / 2 + 210, H - 128);

  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.font = "10px monospace"; ctx.textAlign = "left";
  ctx.fillText("Every break = a 'pop' the audience feels but can't explain.", 30, H - 15);
}

function drawWalkCycle(ctx, W, H, color) {
  const frames = 8;
  const frameW = (W - 60) / frames;
  const labels = ["CONTACT", "DOWN", "PASS", "UP", "CONTACT", "DOWN", "PASS", "UP"];
  const bodyY = [H / 2, H / 2 + 18, H / 2 + 5, H / 2 - 15, H / 2, H / 2 + 18, H / 2 + 5, H / 2 - 15];

  for (let i = 0; i < frames; i++) {
    const x = 30 + i * frameW + frameW / 2;
    const by = bodyY[i];

    // body
    ctx.beginPath();
    ctx.ellipse(x, by, 12, 16, 0, 0, Math.PI * 2);
    ctx.fillStyle = i === 0 || i === 4 ? color + "dd" : color + "66";
    ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();

    // head
    ctx.beginPath();
    ctx.arc(x, by - 22, 8, 0, Math.PI * 2);
    ctx.fillStyle = color + "88"; ctx.fill();

    // legs (simplified)
    const legOffset = i < 4 ? [1, -1] : [-1, 1];
    ctx.strokeStyle = color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x, by + 14);
    ctx.lineTo(x + legOffset[0] * 14, by + 40);
    ctx.lineTo(x + legOffset[0] * 18, H - 40); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, by + 14);
    ctx.lineTo(x + legOffset[1] * 8, by + 35);
    ctx.lineTo(x + legOffset[1] * 14, H - 40); ctx.stroke();

    ctx.fillStyle = i === 0 || i === 4 ? color : "rgba(255,255,255,0.45)";
    ctx.font = "bold 7px monospace"; ctx.textAlign = "center";
    ctx.fillText(labels[i], x, H - 15);
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.fillText(`${i + 1}`, x, H - 5);
  }

  ctx.strokeStyle = "rgba(255,255,255,0.1)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(30, H - 38); ctx.lineTo(W - 30, H - 38); ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace"; ctx.textAlign = "left";
  ctx.fillText("12-frame cycle at 24fps = 2 steps/sec (normal pace).  Head traces figure-8, NOT straight up/down.", 30, 15);
}

function drawPersonalityWalks(ctx, W, H, color) {
  const chars = [
    { x: 80, label: "EXHAUSTED", bodyY: H / 2 + 20, tilt: 0.3, energy: 0.2 },
    { x: 200, label: "TODDLER", bodyY: H / 2 - 10, tilt: 0.1, energy: 1.0 },
    { x: 320, label: "VILLAIN", bodyY: H / 2 - 5, tilt: -0.1, energy: 0.6 },
    { x: 440, label: "PROFESSOR", bodyY: H / 2 + 5, tilt: 0.05, energy: 0.4 },
    { x: 560, label: "TEEN", bodyY: H / 2, tilt: -0.05, energy: 0.7 },
    { x: 670, label: "SAD", bodyY: H / 2 + 25, tilt: 0.25, energy: 0.15 },
  ];

  ctx.strokeStyle = "rgba(255,255,255,0.1)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(30, H - 30); ctx.lineTo(W - 30, H - 30); ctx.stroke();

  chars.forEach(c => {
    ctx.save();
    ctx.translate(c.x, c.bodyY);
    ctx.rotate(c.tilt);
    // body
    ctx.beginPath();
    ctx.ellipse(0, 0, 14, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = color + "88"; ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
    // head
    ctx.beginPath();
    ctx.arc(0, -24, 10, 0, Math.PI * 2);
    ctx.fillStyle = color + "99"; ctx.fill(); ctx.stroke();
    // legs
    ctx.strokeStyle = color; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(0, 16); ctx.lineTo(12, 38); ctx.lineTo(14, H - c.bodyY - 30); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, 16); ctx.lineTo(-8, 30); ctx.lineTo(-10, H - c.bodyY - 30); ctx.stroke();
    ctx.restore();

    ctx.fillStyle = color; ctx.font = "bold 8px monospace"; ctx.textAlign = "center";
    ctx.fillText(c.label, c.x, H - 12);

    // energy bar
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.fillRect(c.x - 18, H - 28, 36, 5);
    ctx.fillStyle = color;
    ctx.fillRect(c.x - 18, H - 28, 36 * c.energy, 5);
  });

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace"; ctx.textAlign = "left";
  ctx.fillText("Energy bars show timing pace. Bar = character's internal energy, not speed.", 30, 15);
}

function drawFoundWallet(ctx, W, H, color) {
  const stages = [
    { x: 60, label: "WALKING", icon: "→", sub: "unaware" },
    { x: 175, label: "SPOT", icon: "👁", sub: "eyes first" },
    { x: 295, label: "STOP", icon: "⏸", sub: "anticipation" },
    { x: 415, label: "PICK UP", icon: "↓", sub: "weight shown" },
    { x: 530, label: "EXAMINE", icon: "?", sub: "face reacts" },
    { x: 645, label: "DECIDE", icon: "◈", sub: "hold 2-3 sec" },
  ];

  stages.forEach((s, i) => {
    const isKey = i >= 4;
    ctx.beginPath();
    ctx.arc(s.x, H / 2, isKey ? 32 : 24, 0, Math.PI * 2);
    ctx.fillStyle = isKey ? color + "cc" : color + "44";
    ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = isKey ? 2.5 : 1.5; ctx.stroke();

    ctx.fillStyle = isKey ? "#000" : "rgba(255,255,255,0.8)";
    ctx.font = `bold ${isKey ? 16 : 14}px serif`;
    ctx.textAlign = "center";
    ctx.fillText(s.icon, s.x, H / 2 + 6);

    ctx.fillStyle = isKey ? color : "rgba(255,255,255,0.6)";
    ctx.font = "bold 8px monospace";
    ctx.fillText(s.label, s.x, H / 2 + (isKey ? 46 : 38));
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.font = "7px monospace";
    ctx.fillText(s.sub, s.x, H / 2 + (isKey ? 57 : 50));

    if (i < stages.length - 1) {
      ctx.strokeStyle = color + "55"; ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(s.x + (i >= 4 ? 34 : 26), H / 2);
      ctx.lineTo(stages[i + 1].x - (i + 1 >= 4 ? 34 : 26), H / 2);
      ctx.stroke();
    }
  });

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace"; ctx.textAlign = "left";
  ctx.fillText("Eyes lead → head follows → body follows. NEVER head first.", 30, 20);
  ctx.fillStyle = color + "88";
  ctx.fillText("The moral DECISION moment must be readable without any text.", 30, H - 15);
}

function drawSubtext(ctx, W, H, color) {
  // Two body language states side by side
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "11px monospace"; ctx.textAlign = "center";
  ctx.fillText("SAYS 'I'm fine'", W / 4, 20);
  ctx.fillText("BODY SAYS otherwise", (W * 3) / 4, 20);

  // Happy posture
  const hx = W / 4, hy = H / 2 - 10;
  ctx.beginPath(); ctx.arc(hx, hy - 30, 16, 0, Math.PI * 2);
  ctx.fillStyle = "#4ade8088"; ctx.fill(); ctx.strokeStyle = "#4ade80"; ctx.lineWidth = 2; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(hx, hy + 5, 18, 24, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#4ade8066"; ctx.fill(); ctx.stroke();
  // arms out open
  ctx.beginPath(); ctx.moveTo(hx - 18, hy - 5); ctx.lineTo(hx - 40, hy + 10); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(hx + 18, hy - 5); ctx.lineTo(hx + 40, hy + 10); ctx.stroke();
  ctx.fillStyle = "#4ade80"; ctx.font = "bold 9px monospace"; ctx.textAlign = "center";
  ctx.fillText("OPEN posture", hx, hy + 50);
  ctx.fillText("UPRIGHT spine", hx, hy + 62);

  // Subtext posture
  const sx = (W * 3) / 4, sy = H / 2 - 10;
  ctx.beginPath(); ctx.arc(sx, sy - 30, 16, 0, Math.PI * 2);
  ctx.fillStyle = color + "88"; ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
  // slightly hunched
  ctx.beginPath(); ctx.ellipse(sx, sy + 10, 16, 22, 0.2, 0, Math.PI * 2);
  ctx.fillStyle = color + "66"; ctx.fill(); ctx.stroke();
  // arms in, closed
  ctx.beginPath(); ctx.moveTo(sx - 14, sy - 5); ctx.lineTo(sx - 22, sy + 12); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(sx + 14, sy - 5); ctx.lineTo(sx + 20, sy + 12); ctx.stroke();
  ctx.fillStyle = color; ctx.font = "bold 9px monospace"; ctx.textAlign = "center";
  ctx.fillText("CLOSED posture", sx, sy + 50);
  ctx.fillText("SLIGHTLY hunched", sx, sy + 62);

  ctx.strokeStyle = "rgba(255,255,255,0.15)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W / 2, 30); ctx.lineTo(W / 2, H - 15); ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.3)"; ctx.font = "9px monospace";
  ctx.fillText("Subtext = the gap between what they show and what leaks through", W / 2, H - 8);
}

function drawDogWalk(ctx, W, H, color) {
  ctx.strokeStyle = "rgba(255,255,255,0.15)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(30, H - 30); ctx.lineTo(W - 30, H - 30); ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace"; ctx.textAlign = "left";
  ctx.fillText("Diagonal leg pairs: LF+RR move together, then RF+LR", 30, 18);

  const footSeq = [
    { x: 80, contacts: [true, false, false, true], label: "LF+RR" },
    { x: 220, contacts: [false, true, false, false], label: "RR pushes" },
    { x: 360, contacts: [false, true, true, false], label: "RF+LR" },
    { x: 500, contacts: [true, false, false, false], label: "LF pushes" },
  ];

  footSeq.forEach(f => {
    // dog silhouette simplified
    const by = H / 2 - 10;
    ctx.beginPath();
    ctx.ellipse(f.x, by, 35, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = color + "55"; ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
    // head
    ctx.beginPath();
    ctx.ellipse(f.x + 30, by - 8, 14, 12, -0.3, 0, Math.PI * 2);
    ctx.fillStyle = color + "77"; ctx.fill(); ctx.stroke();
    // legs LF, RF, LR, RR
    const legPos = [
      { bx: f.x + 20, by2: by + 16 },
      { bx: f.x + 20, by2: by + 16 },
      { bx: f.x - 20, by2: by + 16 },
      { bx: f.x - 20, by2: by + 16 },
    ];
    const legLabels = ["LF", "RF", "LR", "RR"];
    const offsets = [12, 5, -5, -12];
    f.contacts.forEach((contact, li) => {
      const lx = f.x + offsets[li] * 1.5;
      ctx.beginPath();
      ctx.moveTo(lx, by + 16);
      ctx.lineTo(lx + (contact ? 0 : (li < 2 ? 8 : -8)), H - 45);
      ctx.strokeStyle = contact ? color : color + "44";
      ctx.lineWidth = contact ? 3 : 1.5; ctx.stroke();
      if (contact) {
        ctx.beginPath(); ctx.arc(lx + (contact ? 0 : 8), H - 45, 5, 0, Math.PI * 2);
        ctx.fillStyle = color; ctx.fill();
      }
    });
    ctx.fillStyle = color; ctx.font = "bold 9px monospace"; ctx.textAlign = "center";
    ctx.fillText(f.label, f.x, H - 12);
  });
}

function drawGallop(ctx, W, H, color) {
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "10px monospace"; ctx.textAlign = "left";
  ctx.fillText("Horse: 1 suspension phase.   Rabbit: 2 suspension phases per cycle.", 30, 18);

  // Horse frames
  const horseFrames = [
    { x: 70, y: H / 2 - 20, label: "LEAD LEG", legs: [15, -5, -15, 5] },
    { x: 180, y: H / 2 - 35, label: "SUSPENSION", isSuspension: true, legs: [20, 10, -10, -20] },
    { x: 290, y: H / 2 - 15, label: "LAND", legs: [-10, 5, 15, -5] },
  ];

  ctx.fillStyle = "rgba(255,255,255,0.3)"; ctx.font = "bold 10px monospace";
  ctx.fillText("HORSE GALLOP", 30, H / 2 - 65);

  horseFrames.forEach(f => {
    ctx.beginPath();
    ctx.ellipse(f.x, f.y, 38, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = f.isSuspension ? color + "ee" : color + "66";
    ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
    f.legs.forEach(offset => {
      ctx.beginPath();
      ctx.moveTo(f.x + offset, f.y + 16);
      const footY = f.isSuspension ? f.y + 35 : H - 40;
      ctx.lineTo(f.x + offset * 1.5, footY);
      ctx.strokeStyle = f.isSuspension ? color + "88" : color;
      ctx.lineWidth = 2; ctx.stroke();
    });
    ctx.fillStyle = f.isSuspension ? color : "rgba(255,255,255,0.5)";
    ctx.font = "bold 8px monospace"; ctx.textAlign = "center";
    ctx.fillText(f.label, f.x, H / 2 + 20);
  });

  // Rabbit
  const rabbitFrames = [
    { x: 440, y: H / 2 - 10, label: "COIL", legs: [-8, 8, 12, -12] },
    { x: 530, y: H / 2 - 40, label: "SUSPENSION 1", isSuspension: true, legs: [12, -2, -12, 2] },
    { x: 620, y: H / 2 - 15, label: "REACH", legs: [-15, 15, 5, -5] },
    { x: 700, y: H / 2 - 40, label: "SUSPENSION 2", isSuspension: true, legs: [8, -8, 15, -15] },
  ];
  ctx.fillStyle = "rgba(255,255,255,0.3)"; ctx.font = "bold 10px monospace";
  ctx.textAlign = "left";
  ctx.fillText("RABBIT BOUND", 420, H / 2 - 65);

  rabbitFrames.forEach(f => {
    ctx.beginPath();
    ctx.ellipse(f.x, f.y, 20, 14, f.label === "COIL" ? 0.3 : 0, 0, Math.PI * 2);
    ctx.fillStyle = f.isSuspension ? color + "dd" : color + "55";
    ctx.fill(); ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = f.isSuspension ? color : "rgba(255,255,255,0.45)";
    ctx.font = "bold 7px monospace"; ctx.textAlign = "center";
    ctx.fillText(f.label, f.x, H / 2 + 18);
  });

  ctx.strokeStyle = "rgba(255,255,255,0.15)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(W / 2 - 20, 30); ctx.lineTo(W / 2 - 20, H - 20); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(30, H - 30); ctx.lineTo(W - 30, H - 30); ctx.stroke();
}

function drawGenericDiagram(ctx, W, H, color, title) {
  ctx.fillStyle = color + "22";
  ctx.fillRect(30, 30, W - 60, H - 60);
  ctx.strokeStyle = color + "55"; ctx.lineWidth = 2;
  ctx.strokeRect(30, 30, W - 60, H - 60);
  ctx.fillStyle = color;
  ctx.font = "bold 16px monospace"; ctx.textAlign = "center";
  ctx.fillText(title.toUpperCase(), W / 2, H / 2 - 10);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "12px monospace";
  ctx.fillText("Pictorial guide — reference your ASK book for visual diagrams", W / 2, H / 2 + 15);
  ctx.fillText("and film the reference footage before starting this exercise.", W / 2, H / 2 + 32);
}

// ---- MAIN APP ----
export default function AnimationCurriculum() {
  const [selectedYear, setSelectedYear] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [view, setView] = useState("overview"); // overview | exercises | weekly
  const [completedExercises, setCompletedExercises] = useState({});
  const yearData = CURRICULUM[selectedYear];

  const toggleComplete = (key) => {
    setCompletedExercises(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalExercises = Object.values(CURRICULUM).reduce((sum, y) =>
    sum + y.months.reduce((ms, m) => ms + m.exercises.length, 0), 0);
  const completedCount = Object.values(completedExercises).filter(Boolean).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d0f",
      fontFamily: "'Lora', Georgia, serif",
      color: "#f0ede6",
    }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Lora:ital@0;1&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #444; border-radius: 2px; }
        .year-btn:hover { transform: translateY(-2px); }
        .nav-btn:hover { opacity: 0.85; transform: scale(1.04); }
      `}</style>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d0d0f 0%, #1a1520 50%, #0d0d0f 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "32px 40px 24px",
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(20px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 11, letterSpacing: 4, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>
                THE ANIMATOR'S MASTERCLASS
              </div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, lineHeight: 1, color: yearData.color }}>
                Year {selectedYear}: {yearData.title}
              </h1>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 6, fontStyle: "italic", maxWidth: 500 }}>
                {yearData.subtitle}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", letterSpacing: 1 }}>
                PROGRESS
              </div>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: "8px 20px", display: "flex", gap: 16, alignItems: "center" }}>
                <span style={{ fontSize: 22, fontFamily: "'Bebas Neue'", color: yearData.color }}>{completedCount}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>/ {totalExercises} exercises</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 40px" }}>

        {/* Year selector */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {Object.entries(CURRICULUM).map(([y, data]) => (
            <button key={y} className="year-btn"
              onClick={() => { setSelectedYear(+y); setSelectedMonth(0); setView("overview"); }}
              style={{
                background: selectedYear === +y ? data.color : "rgba(255,255,255,0.04)",
                color: selectedYear === +y ? "#000" : "rgba(255,255,255,0.5)",
                border: `1px solid ${selectedYear === +y ? data.color : "rgba(255,255,255,0.1)"}`,
                padding: "8px 18px",
                borderRadius: 6,
                cursor: "pointer",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 15,
                letterSpacing: 2,
                transition: "all 0.2s ease",
              }}>
              Y{y}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: 4, width: "fit-content" }}>
          {["overview", "exercises", "weekly"].map(v => (
            <button key={v} className="nav-btn"
              onClick={() => setView(v)}
              style={{
                background: view === v ? yearData.color : "transparent",
                color: view === v ? "#000" : "rgba(255,255,255,0.4)",
                border: "none",
                padding: "8px 20px",
                borderRadius: 6,
                cursor: "pointer",
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                letterSpacing: 1,
                transition: "all 0.2s ease",
                textTransform: "uppercase"
              }}>
              {v}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {view === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 24, border: `1px solid ${yearData.color}33` }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 12, letterSpacing: 3, color: yearData.color, marginBottom: 12 }}>YEAR OVERVIEW</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>{yearData.description}</p>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 24, border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 12, letterSpacing: 3, color: yearData.color, marginBottom: 12 }}>MILESTONE TARGET</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>{yearData.milestone}</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 24, border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 12, letterSpacing: 3, color: yearData.color, marginBottom: 12 }}>TOOLS & SOFTWARE</div>
                {yearData.tools.map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                    <span style={{ color: yearData.color, fontSize: 12 }}>◆</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: 24, border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 12, letterSpacing: 3, color: yearData.color, marginBottom: 12 }}>REQUIRED READING</div>
                {yearData.bookChapters.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                    <span style={{ color: yearData.color, fontSize: 12 }}>📖</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {yearData.months.length > 0 && (
              <div>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 12, letterSpacing: 3, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>SELECT MONTH</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {yearData.months.map((m, i) => (
                    <button key={i}
                      onClick={() => { setSelectedMonth(i); setView("exercises"); }}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${yearData.color}44`,
                        borderRadius: 10,
                        padding: "16px 22px",
                        cursor: "pointer",
                        textAlign: "left",
                        color: "#f0ede6",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = yearData.color + "22"}
                      onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
                    >
                      <div style={{ fontFamily: "'Bebas Neue'", letterSpacing: 2, fontSize: 11, color: yearData.color }}>MONTH {m.month}</div>
                      <div style={{ fontFamily: "'Playfair Display'", fontSize: 16, fontWeight: 700, marginTop: 4 }}>{m.title}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>{m.focus}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {yearData.months.length === 0 && (
              <div style={{ background: `${yearData.color}11`, borderRadius: 12, padding: 32, border: `1px solid ${yearData.color}33`, textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display'", fontSize: 22, fontWeight: 700, color: yearData.color, marginBottom: 12 }}>
                  Advanced Year — Personalized Curriculum
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
                  Years 4–10 are structured around weekly themes rather than fixed daily exercises — because by this stage, your learning is driven by production experience, mentorship, and self-directed exploration. Use the Weekly Themes tab to plan your weeks, and check the Overview for milestone targets.
                </p>
                <button onClick={() => setView("weekly")}
                  style={{
                    marginTop: 20, background: yearData.color, color: "#000",
                    border: "none", borderRadius: 8, padding: "12px 28px",
                    fontFamily: "'Bebas Neue'", letterSpacing: 2, fontSize: 15, cursor: "pointer"
                  }}>
                  VIEW WEEKLY THEMES →
                </button>
              </div>
            )}
          </div>
        )}

        {/* EXERCISES */}
        {view === "exercises" && (
          <div>
            {yearData.months.length > 0 ? (
              <div>
                <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
                  {yearData.months.map((m, i) => (
                    <button key={i} onClick={() => setSelectedMonth(i)}
                      style={{
                        background: selectedMonth === i ? yearData.color : "rgba(255,255,255,0.04)",
                        color: selectedMonth === i ? "#000" : "rgba(255,255,255,0.4)",
                        border: `1px solid ${selectedMonth === i ? yearData.color : "rgba(255,255,255,0.08)"}`,
                        padding: "6px 16px", borderRadius: 20, cursor: "pointer",
                        fontFamily: "'Space Mono'", fontSize: 11, letterSpacing: 1, transition: "all 0.2s"
                      }}>
                      M{m.month}: {m.title}
                    </button>
                  ))}
                </div>

                {yearData.months[selectedMonth] && (
                  <div>
                    <div style={{ marginBottom: 24 }}>
                      <h2 style={{ fontFamily: "'Playfair Display'", fontSize: 26, fontWeight: 900, color: yearData.color }}>
                        Month {yearData.months[selectedMonth].month}: {yearData.months[selectedMonth].title}
                      </h2>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4, fontFamily: "monospace", letterSpacing: 1 }}>
                        FOCUS: {yearData.months[selectedMonth].focus}
                      </p>
                    </div>
                    {yearData.months[selectedMonth].exercises.map((ex, i) => {
                      const key = `y${selectedYear}m${selectedMonth}e${i}`;
                      return (
                        <div key={i} style={{ position: "relative" }}>
                          <ExerciseCard ex={ex} accentColor={yearData.color} />
                          <button
                            onClick={() => toggleComplete(key)}
                            style={{
                              position: "absolute", top: 18, right: 48,
                              background: completedExercises[key] ? yearData.color : "transparent",
                              border: `1px solid ${yearData.color}`,
                              borderRadius: 4, padding: "2px 8px",
                              color: completedExercises[key] ? "#000" : yearData.color,
                              fontSize: 9, fontFamily: "monospace", letterSpacing: 1,
                              cursor: "pointer", transition: "all 0.2s"
                            }}>
                            {completedExercises[key] ? "✓ DONE" : "MARK DONE"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: 60 }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16 }}>Switch to Weekly Themes for Years 4–10</p>
                <button onClick={() => setView("weekly")}
                  style={{ marginTop: 16, background: yearData.color, color: "#000", border: "none", borderRadius: 8, padding: "12px 28px", fontFamily: "'Bebas Neue'", letterSpacing: 2, fontSize: 15, cursor: "pointer" }}>
                  VIEW WEEKLY THEMES →
                </button>
              </div>
            )}
          </div>
        )}

        {/* WEEKLY THEMES */}
        {view === "weekly" && (
          <div>
            <h2 style={{ fontFamily: "'Playfair Display'", fontSize: 24, fontWeight: 900, color: yearData.color, marginBottom: 20 }}>
              52-Week Curriculum — Year {selectedYear}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {yearData.weeklyTheme.map((theme, i) => {
                const key = `y${selectedYear}w${i}`;
                return (
                  <div key={i}
                    onClick={() => toggleComplete(key)}
                    style={{
                      background: completedExercises[key] ? `${yearData.color}18` : "rgba(255,255,255,0.03)",
                      border: `1px solid ${completedExercises[key] ? yearData.color + "66" : "rgba(255,255,255,0.07)"}`,
                      borderRadius: 10, padding: "14px 16px", cursor: "pointer", transition: "all 0.2s"
                    }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div style={{ fontFamily: "'Bebas Neue'", fontSize: 11, letterSpacing: 2, color: yearData.color + "88" }}>
                        WEEK {i + 1}
                      </div>
                      {completedExercises[key] && (
                        <span style={{ color: yearData.color, fontSize: 14 }}>✓</span>
                      )}
                    </div>
                    <div style={{ fontFamily: "'Playfair Display'", fontSize: 14, fontWeight: 700, color: "#f0ede6", marginTop: 6, lineHeight: 1.4 }}>
                      {theme}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: "monospace", letterSpacing: 1 }}>
            Based on The Animator's Survival Kit by Richard Williams · 40 Years of Industry Experience · Disney · Pixar · Netflix · Studio Ghibli
          </p>
        </div>
      </div>
    </div>
  );
}
