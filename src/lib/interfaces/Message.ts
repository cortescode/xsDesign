

// Message Status object to manage such success as error update messages
export enum MessageStatus {
    SUCCESS,
    ERROR
}
export interface Message {
    status: MessageStatus,
    active: boolean,
    content: string
}