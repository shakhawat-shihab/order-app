
import { color } from "../../theme/color"
import { spacing } from "../../theme/spacing"
import { typography } from "../../theme/typography"

const BASE = {
    fontFamily: typography.primary,
    fontSize: spacing[4],
}
const BASE_BOLD = {
    fontFamily: typography.secondary,
    fontSize: spacing[4],
}


export const presets = {
    default: BASE,
    h1: {
        ...BASE,
        fontSize: spacing[9]
    },
    h2: {
        ...BASE,
        fontSize: spacing[8]
    },
    h3: {
        ...BASE,
        fontSize: spacing[7]
    },
    h4: {
        ...BASE,
        fontSize: spacing[6]
    },
    small: {
        ...BASE,
        fontSize: spacing[4],
    }
}