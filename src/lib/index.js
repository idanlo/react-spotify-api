// Components & Hooks
import {
    Artist,
    ArtistAlbums,
    ArtistRelated,
    ArtistTracks,
    useArtist
} from './Artist';
import { Track, TrackFeatures, TrackAnalysis, useTrack } from './Track';
import { Album, AlbumTracks } from './Album';
import {
    BrowseFeatured,
    BrowseNew,
    BrowseCategoryPlaylists,
    BrowseRecommendations,
    BrowseCategories
} from './Browse';
import { Playlist, PlaylistImages, PlaylistTracks } from './Playlist';
import User from './User/User';
import Search from './Search/Search';

// Context
import SpotifyApiContext from './context';

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
    BrowseCategories
};

// Playlist Components
export { Playlist, PlaylistTracks, PlaylistImages };

// all other (TODO:)
export { User, Search };

// Hooks
export { useArtist, useTrack };

// Context
export { SpotifyApiContext };
