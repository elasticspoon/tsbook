type PlaylistItem = Song | Album | Playlist;

interface Song {
	length: number;
	artist: string[] | string;
	name: string;
	type: "song";
}

interface Album {
	songs: Song[];
	type: "album";
}

interface Playlist {
	type: "playlist";
	resolve(): Song[];
}

interface UnrolledPlaylist {
	time: number;
	songs: string[];
	artists: {
		[i: string]: string[];
	};
}
export function unrollPlaylist(playlist: PlaylistItem[]): UnrolledPlaylist {
	let unrolledPlaylist: UnrolledPlaylist = {
		artists: {},
		songs: [],
		time: 0,
	};

	for (const item of playlist) {
		switch (item.type) {
			case "song":
				processSong(item, unrolledPlaylist);
				break;
			case "album":
				for (const song of item.songs) {
					processSong(song, unrolledPlaylist);
				}
				break;
			case "playlist":
				for (const song of item.resolve()) {
					processSong(song, unrolledPlaylist);
				}
				break;
		}
	}

	return unrolledPlaylist;
}

function processSong(song: Song, target: UnrolledPlaylist) {
	target.time += song.length;
	target.songs.push(song.name);

	let artists = typeof song.artist == "string" ? [song.artist] : song.artist;

	for (const artist of artists) {
		target.artists[artist] ??= [];
		target.artists[artist].push(song.name);
	}
}
