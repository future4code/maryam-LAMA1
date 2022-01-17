export class Show2 {
    constructor(
        private id: string,
        private week_day: WeekDay,
        private start_time: number,
        private end_time: number,
        private band_id: string,
    ) {}

    public getId(): string {
        return this.id
    }

    public getWeekDay(): WeekDay {
        return this.week_day
    }

    public getBandId(): string {
        return this.band_id
    }

    public getStartTime(): number {
        return this.start_time
    }

    public getEndTime(): number {
        return this.end_time
    }

    public setId(id: string) {
        this.id = id
    }

    public setWeekDay(week_day: WeekDay) {
        this.week_day = this.week_day
    }

    public setBandId(band_id: string) {
        this.band_id = this.band_id
    }

    public setStartTime(start_time: string) {
        this.start_time = this.start_time
    }

    public setEndTime(end_time: string) {
        this.end_time = this.end_time
    }

    public static weekDayEnum(data?: any): WeekDay | any {
        switch(data) {
            case "SEXTA":
                return WeekDay.SEXTA
            case "SABADO":
                return WeekDay.SABADO
            case "DOMINGO":
                return WeekDay.DOMINGO
            default:
                throw new Error ("Dia inválido! Escolha entre sexta, sábado ou domingo.")
        }
    }
    
    public static toTheShow(data?: any) {
        return (data && new Show2(
            data.id,
            Show2.weekDayEnum(data.weekDay || data.week_day),
            data.band_id || data.bandId,
            data.startTime || data.start_time,
            data.end_time || data.endTime
            )
        )
    }
}


export interface ShowInput {
    week_day: WeekDay,
    start_time: number,
    end_time: number,
    band_id: string,
}


export interface ShowOutputDTO {
    id: string,
    week_day: WeekDay,
    start_time: number,
    end_time: number,
    band_id: string,
}

export interface Show extends ShowInput {
    id: string,
}

export enum WeekDay {
    SEXTA = "SEXTA",
    SABADO = "SABADO",
    DOMINGO = "DOMINGO"
}
