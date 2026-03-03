// Site configuration - Kentucky
export const siteConfig = {
  region: 'KY',
  regionName: 'Kentucky',
  siteName: 'Omega TV Kentucky',
  domain: 'getomegatvky.com', // Update when domain is purchased
  supportEmail: 'support@getomegatvky.com',
  
  // Troubleshooting YouTube videos from @omegatv4u
  troubleshootingVideos: [
    {
      id: 'install-overview',
      title: 'Omega TV Install and Overview',
      description: 'Complete guide to installing and using Omega TV',
      youtubeId: 'Z6_H38d9Nmo',
      category: 'setup',
    },
    {
      id: 'app-walkthrough',
      title: 'Walk Through New App',
      description: 'Tour of the new Omega TV app features',
      youtubeId: 'bMREjgfMAE4',
      category: 'setup',
    },
    {
      id: 'troubleshooting-guide',
      title: 'Updated Troubleshooting Guide',
      description: 'Latest troubleshooting tips and fixes',
      youtubeId: 'tdxXdV1LsbA',
      category: 'troubleshooting',
    },
    {
      id: 'clear-cache',
      title: 'Onn Box Clear Cache',
      description: 'How to clear cache on Onn streaming devices',
      youtubeId: '-wQRQ_KV56o',
      category: 'troubleshooting',
    },
    {
      id: 'uninstall-reinstall',
      title: 'Uninstall and Reinstall App',
      description: 'How to uninstall and reinstall Omega TV on Onn devices',
      youtubeId: 'aUvI3Pozd5o',
      category: 'troubleshooting',
    },
  ],
}

export type VideoCategory = 'setup' | 'troubleshooting' | 'account'
