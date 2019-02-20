import React from 'react';

export interface RenderProps {
    children: () => React.ReactNode;
}

/**
 * Context used to store the Spotify access token
 */
export const SpotifyApiContext: React.Context<string>;

export interface ArtistProps extends RenderProps {
    id: string | string[];
    children: () => any;
}

/**
 * Get Spotify catalog information for single/multiple artist/s identified by their unique Spotify ID/s.
 */
export const Artist: React.FC<ArtistProps>;

export interface ArtistAlbumsOptions {
    include_groups?: string;
    market?: string;
    limit?: string | number;
    offset?: string | number;
}

export interface ArtistAlbumsProps extends RenderProps {
    options: ArtistAlbumsOptions;
    id: string;
    children: () => any;
}

/**
 * Get Spotify catalog information about an artist’s albums.
 */
export const ArtistAlbums: React.FC<ArtistAlbumsProps>;

export interface ArtistRelatedProps extends RenderProps {
    id: string;
}

/**
 * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community’s listening history.
 */
export const ArtistRelated: React.FC<ArtistRelatedProps>;
