"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sizes = ["0", "1", "2", "3", "default", "mqdefault", "hqdefault", "maxresdefault"];
/**
 * The Track class.
 * @export
 * @class Track
 */
class Track {
    /**
     * Creates an instance of Track.
     * @param {ITrackData} data - The data to pass.
     * @param {any} user - The user who requested the track.
     */
    constructor(data, requester) {
        if (!data || !requester) {
            throw new RangeError("Track constructor must have all two parameters filled.");
        }
        try {
            this.track = data.track;
            this.identifier = data.info.identifier;
            this.isSeekable = data.info.isSeekable;
            this.author = data.info.author;
            this.duration = data.info.length;
            this.isStream = data.info.isStream;
            this.title = data.info.title;
            this.uri = data.info.uri;
            this.requester = requester;
        }
        catch (err) {
            throw new RangeError(`Invalid track passed. Reason: ${err}`);
        }
    }
    /**
     * Returns the thumbnail for the track. Only works for YouTube videos due to other sources requiring a API token.
     * @param {string} [size] - The size for the track.
     */
    displayThumbnail(size) {
        const finalSize = sizes.find((s) => s === size) || "default";
        return this.uri.includes("youtube") ? `https://img.youtube.com/vi/${this.identifier}/${finalSize}.jpg` : "";
    }
}
exports.Track = Track;
