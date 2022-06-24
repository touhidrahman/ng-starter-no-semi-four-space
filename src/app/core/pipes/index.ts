import { SpreadIntoArrayPipe } from '@core/pipes/spread-into-array.pipe'
import { BytesPipe } from './bytes.pipe'
import { CeilingPipe } from './ceiling.pipe'
import { Nl2brPipe } from './nl2br.pipe'
import { SafeUrlPipe } from './safe-url.pipe'
import { UniquePipe } from './unique.pipe'
import { ValueInPipe } from './value-in.pipe'

export const GlobalPipes = [
    BytesPipe,
    CeilingPipe,
    Nl2brPipe,
    SafeUrlPipe,
    SpreadIntoArrayPipe,
    UniquePipe,
    ValueInPipe,
]
