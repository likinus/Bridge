export type PropertiesTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;
