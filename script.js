/*
design by techie sneh
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.

*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "RADIO",
          artist: "Alka Yagnik Shemaroo",
          cover: "https://sklktecdnems06.cdnsrv.jio.com/c.saavncdn.com/289/Melody-Queen-Best-Of-Alka-Yagnik-2014-500x500.jpg",
          source: "https://shemaroomusicradio.shemaroo.com/bollywoodmusic/alkayagnik_aac/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Abhijeet Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/bollywoodmusic/abhijeet_aac/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Udit Narayan Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/bollywoodmusic1/uditnarayan_aac/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Lata Mangeshkar Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/bollywoodmusic/latamangeshkar_aac/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Kishore Kumar Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/bollywoodmusic/kishorekumar_aac/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Asha Bhosle Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/bollywoodmusic/ashabhosle_aac/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Mohd Rafi Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/bollywoodmusic1/mohdrafi_aac/chunklist_w489482750.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Radio Bhakti Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://radiobhakti.shemaroo.com/hariomradio/Stream1_aac/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Chai Time with Retroclassic",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/shemaroomusic/chaitimewith_retroclassic/playlist.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Late Night Chill Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/shemaroomusic/latenight_chill/playlist.m3u8",
          url: "#",
          favorited: true
        },
        
        
        {
          name: "RADIO",
          artist: "Mirchi Love",
          cover: "../assets/images/radio/radio.png",
          source: "https://mirchilove-lh.akamaihd.net/i/MIRCHILOVE_1@32886/master.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Meethi Mirchi ",
          cover: "../assets/images/radio/radio.png",
          source: "https://meethimirchihdl-lh.akamaihd.net/i/MeethiMirchiHDLive_1_1@320572/master.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Yo Punjabi Mirchi",
          cover: "../assets/images/radio/radio.png",
          source: "https://yopunjabihdlive-lh.akamaihd.net/i/YoPunjabiHDLive_1_1@345454/master.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "Mirchi Top 20",
          cover: "../assets/images/radio/radio.png",
          source: "https://mt20live-lh.akamaihd.net/i/mt20live_1@346531/master.m3u8",
          url: "#",
          favorited: true
        },
        {
          name: "RADIO",
          artist: "English Love",
          cover: "../assets/images/radio/radio.png",
          source: "https://radioromancehdli-lh.akamaihd.net/i/RadioRomanceHDLive_1_1@334956/master.m3u8",
          url: "#",
          favorited: true
        },
        
        {
          name: "RADIO",
          artist: "Morning Melodies Shemaroo",
          cover: "../assets/images/radio/radio.png",
          source: "https://shemaroomusicradio.shemaroo.com/shemaroomusic/morning_melodies/playlist.m3u8",
          url: "#",
          favorited: true
        }
        
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
