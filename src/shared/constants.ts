export const exampleUUID = 406149871;
export const apiUrl = 'https://rovesnik-bot.ru/api';
export const resources = ['ticket', 'user', 'event', 'test', 'artist'] as const;

export type Resource = typeof resources[number];

export const resourcesUpdateUrlMap = new Map<Resource, string>([
    ['ticket', 'update']
] as [Resource, string][]);

export const resourcesCreateUtlMap = new Map<Resource | 'ticket_free', string>([
    ['ticket', 'purchase'], ['ticket_free', 'purchase_free'], ['event', 'create'], ['test', 'create'], ['artist', 'create']
] as [Resource | 'ticket_free', string][]);

export const resourceIdFieldMap = new Map<Resource, string>([
    ['event', 'event_id'], ['test', 'chat_id'], ['ticket', 'id'], ['artist', 'artist_id'],
] as [Resource, string][]);
