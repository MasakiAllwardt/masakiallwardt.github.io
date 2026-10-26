import type { Entry } from './types';

// Photos and videos go in src/assets/projects/; reference them by path, e.g.
//   media: [
//     { src: 'diplomacy/board.png', alt: 'Overseer predictions on a Diplomacy board' },
//     { src: 'crf/demo.mp4', alt: 'Correcting the arm out loud', caption: 'Live demo' },
//   ],

export const ongoing: Entry[] = [
  {
    name: 'AdaJEPA Sim2Real',
    role: 'Testing sim-to-real transfer with AdaJEPA',
    ongoing: true,
    // TODO: add points/stack once there is something to report.
    media: [
      {
        src: 'adajepa/sim-training-data.gif',
        alt: 'Simulated robot arm reaching toward a red object',
        caption: 'Sim training data for training a JEPA world model from scratch',
      },
    ],
  },
  {
    name: 'World Action Model IDM',
    role: 'Video diffusion + inverse dynamics as a policy',
    ongoing: true,
    points: [
      'A video diffusion model imagines an expert trajectory from the current frame; an inverse dynamics model reads off the action between each pair of frames, aₜ = IDM(oₜ, oₜ₊₁), and the robot executes it.',
      'No separately trained policy: the video model learns what should happen from action-free video, and the IDM learns how from a small amount of non-expert robot data.',
    ],
    media: [
      {
        src: 'idm/generated-video.gif',
        alt: 'Generated video of a robot arm reaching for a red object',
        caption: 'Generative video to be labeled with the IDM',
      },
    ],
  },
];

export const previous: Entry[] = [
  {
    name: 'Diplomacy Overseer',
    role: 'RL environment for overseeing multi-agent LLMs',
    result: '$10k · Meta OpenEnv',
    points: [
      'Won a $10,000 cash prize at Meta’s OpenEnv Hackathon (Multi-Agent Interactions + Scalable Oversight track).',
      'Built an RLVR environment in which a 0.5B overseer model infers the hidden strategies of 7 LLM agents playing Diplomacy, using only public signals: board state, order history, and message metadata.',
      'Fine-tuned Qwen2.5-0.5B-Instruct with GRPO for 16,835 steps over 185 self-play games (~17k prediction episodes).',
      'Raised strategy-inference F1 from 0.17 to 0.87 and judge-verified accuracy from 0% to 52.1%, rewarded by a Claude-based binary judge.',
    ],
    stack: ['PyTorch', 'OpenEnv', 'Hugging Face TRL', 'Docker'],
  },
  {
    name: 'Collab Reference Frames',
    role: 'Spoken corrections for robot policies',
    result: '2nd · NVIDIA × Nebius',
    points: [
      '2nd place at the NVIDIA × Nebius Physical AI Sprint Hackathon, with a working system shipped in 5 hours.',
      'A person critiques an SO-101 arm out loud; a VLM grounds the critique in egocentric footage from a wearable camera and rewrites the policy’s language instruction.',
      'Trained a SmolVLA policy in Isaac Sim, then closed the sim-to-real gap with 20 rounds of DAgger on the physical arm.',
    ],
    media: [
      {
        src: 'collab-frames/so101-feedback.gif',
        alt: 'SO-101 arm on a table during a pick-and-place run',
        caption: 'SO-101 ingesting feedback on pick and place',
      },
    ],
    stack: ['SmolVLA', 'LeRobot', 'Isaac Sim', 'DAgger'],
  },
  {
    name: 'Distributed TRPO',
    role: 'Distributed RL training engine',
    result: '2.7× throughput',
    points: [
      'Scaled TRPO across 8 parallel Ray rollout workers feeding a GPU learner: 2.7× environment-step throughput over a single worker.',
      'Implemented TRPO from scratch: GAE, conjugate-gradient solves with Fisher-vector products, and a KL-constrained backtracking line search.',
      'Benchmarked 1/2/4/8 workers × 5 seeds on continuous-control tasks, cutting wall-clock time to a target reward by 26.2%; added checkpoint-based recovery from worker failures.',
    ],
    stack: ['PyTorch', 'Ray', 'Gymnasium', 'CUDA'],
  },
  {
    name: 'Classical Deep RL',
    role: 'Core deep RL algorithms, implemented for video games',
    meta: 'PPO · DQN',
    points: [
      'Implemented DQN (experience replay, target network, ε-greedy exploration) and PPO (clipped surrogate objective, GAE advantages) and trained agents on video games, including Dark Souls III.',
    ],
    media: [
      {
        src: 'classical-rl/dqn-dark-souls-3.gif',
        alt: 'DQN agent fighting the Iudex Gundyr boss in Dark Souls III',
        caption: 'Deep Q on Dark Souls 3',
      },
    ],
    stack: ['PyTorch', 'Gymnasium'],
  },
  {
    name: 'Daily Bite of Prep',
    role: 'iOS app',
    result: '~2,000 downloads',
    // TODO: one line on what the app does, plus stack and an App Store link, e.g.
    //   links: [{ label: 'App Store', href: 'https://apps.apple.com/app/...' }],
  },
];
