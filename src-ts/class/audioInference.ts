export class audioInference {



    constructor( 
        private engine: number,
        private machiney_impact: number,
        private non_machiney_impact: number,
        private powered_saw: number,
        private alert_signal: number,
        private music: number,
        private human_voice: number,
        private dog: number
        ) {
    }
    public set _engine(_engine : number) {
        this.engine = _engine;
    }
    
    public set _machiney_impact(_machiney_impact : number) {
        this.machiney_impact = _machiney_impact;
    }
    public set _non_machiney_impact(_non_machiney_impact : number) {
        this.non_machiney_impact = _non_machiney_impact;
    }
    public set _powered_saw(_powered_saw : number) {
        this.powered_saw = _powered_saw;
    }
    public set _alert_signal(_alert_signal : number) {
        this.alert_signal = _alert_signal;
    }
    public set _music(_music : number) {
        this.music = _music;
    }
    public set _human_voice(_human_voice : number) {
        this.human_voice = _human_voice;
    }
    public set _dog(_dog : number) {
        this.dog = _dog;
    }

}