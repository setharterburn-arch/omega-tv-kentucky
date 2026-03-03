// Site configuration - Kentucky
export const siteConfig = {
  region: 'KY',
  regionName: 'Kentucky',
  siteName: 'Omega TV Kentucky',
  domain: 'getomegatvky.com', // Update when domain is purchased
  supportEmail: 'support@getomegatvky.com',
  
  // Troubleshooting YouTube videos
  troubleshootingVideos: [
    {
      id: 'setup-firestick',
      title: 'How to Setup on Firestick',
      description: 'Step-by-step guide to install and configure on Amazon Firestick',
      youtubeId: 'REPLACE_WITH_VIDEO_ID', // Replace with actual YouTube video ID
      category: 'setup',
    },
    {
      id: 'setup-android',
      title: 'How to Setup on Android',
      description: 'Install and configure on Android phones, tablets, and TV boxes',
      youtubeId: 'REPLACE_WITH_VIDEO_ID',
      category: 'setup',
    },
    {
      id: 'setup-iphone',
      title: 'How to Setup on iPhone/iPad',
      description: 'Install and configure on iOS devices',
      youtubeId: 'REPLACE_WITH_VIDEO_ID',
      category: 'setup',
    },
    {
      id: 'buffering-fix',
      title: 'How to Fix Buffering Issues',
      description: 'Troubleshoot and resolve buffering problems',
      youtubeId: 'REPLACE_WITH_VIDEO_ID',
      category: 'troubleshooting',
    },
    {
      id: 'vpn-setup',
      title: 'VPN Setup Guide',
      description: 'How to use a VPN for better streaming',
      youtubeId: 'REPLACE_WITH_VIDEO_ID',
      category: 'troubleshooting',
    },
    {
      id: 'account-link',
      title: 'How to Link Your Account',
      description: 'Connect your IPTV credentials to your web account',
      youtubeId: 'REPLACE_WITH_VIDEO_ID',
      category: 'account',
    },
    {
      id: 'renew-subscription',
      title: 'How to Renew Your Subscription',
      description: 'Easy steps to renew your service',
      youtubeId: 'REPLACE_WITH_VIDEO_ID',
      category: 'account',
    },
  ],
}

export type VideoCategory = 'setup' | 'troubleshooting' | 'account'
