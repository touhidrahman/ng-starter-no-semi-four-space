import { combineLatest, Observable, ObservableInput } from 'rxjs'
import { map } from 'rxjs/operators'

export const combineLatestToObject = <T>(obj: { [key in keyof T]: ObservableInput<T[key]> }): Observable<T> => {
    const keys = Object.keys(obj)
    return combineLatest(Object.values(obj)).pipe(
        map(
            (results) =>
                results.reduce(
                    (combinedObject, result, i) => ({ ...(combinedObject as Partial<T>), [keys[i]]: result }),
                    {},
                ) as T,
        ),
    )
}
