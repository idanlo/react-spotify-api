// Components & Hooks
import {
  Artist,
  ArtistAlbums,
  ArtistRelated,
  ArtistTracks,
  useArtist
} from './Artist';
import { Track, TrackFeatures, TrackAnalysis, useTrack } from './Track';
import { Album, AlbumTracks, useAlbum } from './Album';
import {
  BrowseFeatured,
  BrowseNew,
  BrowseCategoryPlaylists,
  BrowseRecommendations,
  BrowseCategories,
  BrowseCategory
} from './Browse';
import { Playlist, PlaylistImages, PlaylistTracks } from './Playlist';
import {
  User,
  UserPlaylists,
  UserTop,
  UserArtists,
  UserAlbums,
  UserTracks,
  useUser
} from './User';
import { Search, useSearch } from './Search';

// Context
import SpotifyApiContext, { SpotifyApiAxiosContext } from './context';

// Artist components
export { Artist, ArtistAlbums, ArtistTracks, ArtistRelated };

// Track components
export { Track, TrackFeatures, TrackAnalysis };

// Album components
export { Album, AlbumTracks };

// Browse Components
export {
  BrowseFeatured,
  BrowseNew,
  BrowseCategoryPlaylists,
  BrowseRecommendations,
  BrowseCategories,
  BrowseCategory
};

// Playlist Components
export { Playlist, PlaylistTracks, PlaylistImages };

// User components
export { User, UserPlaylists, UserTop, UserArtists, UserAlbums, UserTracks };

// Search component
export { Search };

// Hooks
export { useArtist, useTrack, useAlbum, useUser, useSearch };

// Context
export { SpotifyApiContext, SpotifyApiAxiosContext };
