// Cached + hardened live-stream lookup.
//
// Previously this ran a full server-side download of YouTube's channel page on
// EVERY request, with no caching. Combined with the client polling it once a
// minute (and any bot hitting /api/youtube directly), that meant the server was
// constantly fetching ~1MB from YouTube and regex-scanning it — a likely source
// of sustained CPU/bandwidth.
//
// defineCachedEventHandler makes the handler actually run at most once per
// `maxAge` window; every other request is served from cache instantly.
export default defineCachedEventHandler(async () => {
  const FALLBACK_VIDEO_ID = '6Qo5F_Qy8zI'
  try {
    const channelUsername = '@jacoborodriguezgzz'
    const response = await fetch(`https://www.youtube.com/${channelUsername}/streams`, {
      // Don't let a slow/hung YouTube response keep a request open and pile up.
      signal: AbortSignal.timeout(5000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PiedrasNegrasBot/1.0)' }
    })
    const text = await response.text()

    // Extract video ID from the response
    const videoIdMatch = text.match(/watch\?v=([a-zA-Z0-9_-]{11})/)
    const videoId = videoIdMatch ? videoIdMatch[1] : null

    return {
      videoId: videoId || FALLBACK_VIDEO_ID, // Fallback to current known live stream
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error fetching live stream:', error)
    return {
      videoId: FALLBACK_VIDEO_ID, // Fallback to current known live stream
      timestamp: new Date().toISOString(),
      error: 'Failed to fetch live stream'
    }
  }
}, {
  maxAge: 300, // serve a cached result for 5 minutes
  swr: true, // serve stale instantly while refreshing in the background
  name: 'youtube-livestream',
  getKey: () => 'youtube-livestream' // single cache entry; ignore any query params
})
