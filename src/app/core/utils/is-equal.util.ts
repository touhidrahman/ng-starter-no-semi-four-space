// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const isEqual = (a: any, b: any) => {
    if (typeof a !== typeof b) {
        return false
    }

    // If the values are objects or arrays, recursively compare their properties/elements
    if (typeof a === 'object') {
        if (Array.isArray(a) && Array.isArray(b)) {
            // If both are arrays, compare their elements
            if (a.length !== b.length) {
                return false
            }

            for (let i = 0; i < a.length; i++) {
                if (!isEqual(a[i], b[i])) {
                    return false
                }
            }

            return true
        } else {
            // If both are objects, compare their properties
            const keysA = Object.keys(a || {})
            const keysB = Object.keys(b || {})

            if (keysA.length !== keysB.length) {
                return false
            }

            for (const key of keysA) {
                if (!isEqual(a[key], b[key])) {
                    return false
                }
            }

            return true
        }
    }

    return a === b
}
