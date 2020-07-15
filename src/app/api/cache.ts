import { of, throwError } from 'rxjs';
import { Token } from '../models/token';

export class Cache {

    storeToken(token: Token) {
        return of(true);
    }

    storeTokenWithError(token: Token) {
        return throwError('SampleError!');
    }
}