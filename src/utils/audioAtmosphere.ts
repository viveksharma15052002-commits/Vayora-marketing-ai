class LuxuryAudioAtmosphere {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: any = null;
  private masterGain: GainNode | null = null;
  private volume: number = 0.25;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // Play initial chord and schedule recurring soft warm chords (Fmaj9, Cmaj7, Dm9, Am7)
    const chords = [
      [174.61, 220.00, 261.63, 329.63, 392.00], // Fmaj9
      [130.81, 164.81, 196.00, 246.94, 293.66], // Cmaj9
      [146.83, 174.61, 220.00, 261.63, 329.63], // Dm9
      [110.00, 164.81, 220.00, 261.63, 329.63]  // Am9
    ];

    let chordIndex = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const currentChord = chords[chordIndex % chords.length];
      chordIndex++;

      const now = this.ctx.currentTime;
      currentChord.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        // Warm soft Rhodes / sine-warm sound
        osc.type = i % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + (i * 0.08));

        // Lowpass filter for deep velvety warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + Math.random() * 200, now);

        // Slow luxurious swell and long fade
        const noteStart = now + (i * 0.08);
        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.045, noteStart + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 5.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(noteStart);
        osc.stop(noteStart + 5.8);
      });
    };

    playChord();
    this.intervalId = setInterval(() => {
      playChord();
    }, 6000);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const luxuryAudio = new LuxuryAudioAtmosphere();
