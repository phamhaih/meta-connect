# MetaConnect

MetaConnect is a decentralized social networking platform built on the Internet Computer Protocol (ICP). It enables users to join teams, ask and answer questions, connect with like-minded individuals through an intelligent matching system, and communicate via private messaging.

## Features

### 🏢 Team Management
- Create and manage teams with custom branding
- Join teams using invite codes
- Team admin controls and member management
- Team statistics and analytics

### ❓ Questions & Answers
- Create custom questions with color themes
- Answer questions with weighted responses (boost system)
- Skip questions that don't apply
- View question statistics and trends

### 🤝 Smart Matching
- Intelligent user matching based on answer compatibility
- Friend request system
- Connection status tracking
- Privacy controls for sensitive information

### 💬 Private Messaging
- Secure peer-to-peer messaging between connected users
- Real-time message status and read receipts
- Team-scoped communication

### 🔐 Authentication
- Internet Identity integration for secure, passwordless login
- Decentralized identity management
- Privacy-focused authentication

## Tech Stack

### Backend
- **Motoko**: Primary smart contract language for ICP
- **Internet Computer Protocol**: Decentralized hosting and compute
- **mops**: Package manager for Motoko dependencies

### Frontend
- **Nuxt.js 3**: Vue.js framework for modern web applications
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Beautiful component library for Tailwind
- **Pinia**: State management for Vue

### Libraries & Dependencies
- **@dfinity/agent**: ICP agent for canister communication
- **@dfinity/auth-client**: Internet Identity authentication
- **Effect**: Functional programming utilities
- **PostHog**: Analytics and user tracking
- **Vue3 Toastify**: Toast notifications

## Project Structure

```
MetaConnect/
├── dfx.json                 # DFX configuration
├── mops.toml               # Motoko dependencies  
├── package.json            # Node.js dependencies
├── nuxt.config.ts          # Nuxt.js configuration
├── tailwind.config.js      # Tailwind CSS config
├── env.ts                  # Environment configuration
└── src/
    ├── MetaConnect_backend/      # Motoko backend canister
    │   ├── main.mo              # Main canister entry point
    │   ├── Admin.mo             # Admin functionality
    │   ├── Chat.mo              # Messaging system
    │   ├── Friend.mo            # Friend management
    │   ├── Matching.mo          # User matching algorithm
    │   ├── Question.mo          # Question management
    │   ├── Team.mo              # Team functionality
    │   ├── User.mo              # User management
    │   ├── helper/              # Utility modules
    │   ├── types/               # Type definitions
    │   └── test/                # Test files
    └── MetaConnect_frontend/    # Nuxt.js frontend
        ├── components/          # Vue components
        ├── composables/         # Vue composables
        ├── layouts/             # Page layouts
        ├── middleware/          # Route middleware
        ├── pages/               # Application pages
        ├── plugins/             # Nuxt plugins
        ├── public/              # Static assets
        └── utils/               # Utility functions
```

## Installation

### Prerequisites
- Node.js (>= 16.0.0)
- npm (>= 7.0.0)
- DFX (>= 0.18.0)
- mops

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MetaConnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   mops install
   ```

3. **Start local Internet Computer replica**
   ```bash
   dfx start --background --clean
   ```

4. **Deploy canisters**
   ```bash
   dfx deploy
   ```

5. **Generate declarations**
   ```bash
   npm run dfx-generate
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `dfx deploy` - Deploy to local network
- `dfx deploy --network ic` - Deploy to mainnet
- `mops test` - Run backend tests

## Configuration

### Environment Variables

The application uses environment-specific configuration through `env.ts`:

- **Local Development**: Uses `.dfx/local/canister_ids.json`
- **Production**: Uses `canister_ids.json`

### Key Configuration Files

- `dfx.json`: Canister configuration and network settings
- `mops.toml`: Motoko package dependencies
- `nuxt.config.ts`: Frontend build and runtime configuration
- `tailwind.config.js`: Styling and theme configuration

## Backend API

The MetaConnect backend provides a comprehensive API for:

### User Management
- `createUser()`: Register new user
- `getUser()`: Get current user profile
- `updateProfile()`: Update user information
- `deleteUser()`: Delete user account

### Team Operations
- `createTeam()`: Create new team
- `joinTeam()`: Join existing team
- `updateTeam()`: Update team information
- `leaveTeam()`: Leave team
- `listTeams()`: Get available teams

### Questions & Answers
- `createQuestion()`: Create new question
- `submitAnswer()`: Submit answer to question
- `submitSkip()`: Skip question
- `getUnansweredQuestions()`: Get questions to answer
- `getAnsweredQuestions()`: Get user's answers

### Social Features
- `getMatches()`: Get compatible users
- `sendFriendRequest()`: Send friend request
- `answerFriendRequest()`: Accept/reject friend request
- `getFriends()`: Get friend list

### Messaging
- `sendMessage()`: Send private message
- `getMessages()`: Retrieve conversation
- `markMessageRead()`: Mark messages as read

## Security & Privacy

- **Decentralized Authentication**: Uses Internet Identity for secure, privacy-preserving login
- **Data Sovereignty**: All data stored on decentralized ICP network
- **Privacy Controls**: Users control their data visibility and sharing
- **Secure Communication**: End-to-end encrypted messaging between users

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions, issues, or support:
- Create an issue in the GitHub repository
- Join our community discussions
- Check the documentation for troubleshooting guides

---

Built with ❤️ on the Internet Computer Protocol