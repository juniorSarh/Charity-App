<img src="https://socialify.git.ci/juniorSarh/Charity-App/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Charity-App" width="640" height="320" />

🟢 Charity Chat App UI (React Native)

A React Native chat app UI project demonstrating profile cards, recent chats, and group chat components with local avatars. Designed for mobile devices using React Native and Expo.

Table of Contents

Demo

Features

Project Structure

Installation

Usage

Components

Assets

Customization

License

Demo

This project provides:

A top horizontal row of profile cards with avatars and online status

A recent chats list with avatars, messages, unread badges

A group chat card with overlapping avatars

Profile icon with notification badge at top-right

Fully responsive column layout for mobile screens

Features

Profile cards with local avatars

Online status indicator (green dot)

Chat list items with unread message badge

Group chat card with overlapping avatars

Fully customizable using props for names, avatars, and status

Clean UI with rounded cards and responsive spacing

Project Structure
project/
│
├─ assets/
│   └─ avatars/
│       ├─ avatar1.jpg
│       ├─ avatar2.jpg
│       ├─ avatar3.jpg
│       ├─ avatar4.jpg
│       ├─ avatar5.jpg
│       ├─ avatar6.jpg
│       └─ avatar7.jpg
│
├─ components/
│   ├─ ProfileCard.tsx
│   ├─ ChatListItem.tsx
│   ├─ GroupChatCard.tsx
│   └─ ProfileIconWithBadge.tsx
│
├─ screens/
│   └─ Index.tsx
│
├─ App.tsx
└─ README.md

Installation

Clone the repository:

git clone https://github.com/juniorSarh/Charity-App
cd Charity-App


Install dependencies (Expo recommended):

npm install
# or
yarn install


Start the project:

expo start


Open on Android/iOS emulator or physical device using the Expo Go app.

Usage

Import and use the Index screen as your main entry point:

import Index from './screens/Index';

export default function App() {
  return <Index />;
}


ProfileCard usage:

<ProfileCard name="John" avatar={require('../assets/avatars/avatar1.jpg')} online={true} />


ChatListItem usage:

<ChatListItem
  name="Sarah"
  message="Hello!"
  avatar={require('../assets/avatars/avatar2.jpg')}
  unread={2}
/>


GroupChatCard usage:

<GroupChatCard />


ProfileIconWithBadge usage:

<ProfileIconWithBadge avatar={require('../assets/avatars/avatar3.jpg')} count={5} />

Components
ProfileCard

Avatar with online status

Name label

Props: name, avatar, online

ChatListItem

Avatar, name, message, timestamp

Unread message badge

Props: name, message, avatar, time?, unread?

GroupChatCard

Overlapping avatars

Group name, last message, timestamp

ProfileIconWithBadge

Top-right avatar icon

Notification badge for unread count

Assets

All avatars are local JPG images stored in assets/avatars/:

avatar1.jpg → avatar7.jpg

Tip: Use consistent dimensions (e.g., 55x55px) for profile pictures for best display.

Customization

Change avatar images by replacing avatar1.jpg → avatar7.jpg

Modify names or messages in Index.tsx

Adjust colors in StyleSheet for branding

Expand components for additional features like typing indicator, reactions, or dark mode

License

This project is open-source and free to use under the MIT License.