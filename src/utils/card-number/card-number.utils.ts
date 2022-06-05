export const cardNumberUtil = (value: string) => {
    switch (true) {
        case !Number.isNaN(+value): {
            return +value
        }

        case value === "JACK": {
            return 11;
        }

        case value === "QUEEN": {
            return 12;
        }

        case value === "KING": {
            return 13;
        }

        case value === "ACE": {
            return 14;
        }

        default: {
            return 15;
        }
    }
}
