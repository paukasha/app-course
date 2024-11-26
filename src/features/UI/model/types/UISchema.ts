// Адрес страницы, позиция скрола
export type scrollSchema = Record<string, number>

export interface UISchema {
    scroll: scrollSchema
}
