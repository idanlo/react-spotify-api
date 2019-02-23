import { serialize } from './';

describe('serialize url util function', () => {
    it('returns correct query params', () => {
        const result = serialize({ test: '1', prod: '0' });
        expect(result).toEqual('?test=1&prod=0');
    });

    it('returns no query params', () => {
        const result = serialize();
        expect(result).toEqual('');
    });
});
