export interface ShowInput {
    week_day: string,
    start_time: number,
    end_time: number,
    band_id: string,
}

export interface Show extends ShowInput {
    id: string,
}
