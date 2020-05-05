export interface Channel {
    name: string;
    weight: number;
}

export interface Message {
    _id: string;
    _rev: string;
    sender: string;
    channel: string;
    message: string;
    timestamp: number;
}
