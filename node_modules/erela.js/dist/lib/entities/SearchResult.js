"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The SearchResult class.
 */
class SearchResult {
    /**
     * Creates an instance of SearchResult.
     * @param {any} data - The search result data.
     * @param {Track} track - The Track class.
     * @param {any} user - The user who requested the track.
     */
    constructor(data, track, user) {
        if (!data || !track || !user) {
            throw new RangeError("SearchResult constructor must have all three parameters filled.");
        }
        this.loadType = data.loadType;
        this.tracks = this.loadType !== "PLAYLIST_LOADED" ? data.tracks.map((d) => new track(d, user)) : [];
        this.playlist = {
            info: data.playlistInfo,
            tracks: this.loadType === "PLAYLIST_LOADED" ? data.tracks.map((d) => new track(d, user)) : [],
            duration: this.tracks.map((t) => t.duration).reduce((acc, cur) => acc + cur, 0),
        };
        if (data.exception) {
            this.exception = data.exception;
        }
    }
}
exports.SearchResult = SearchResult;
