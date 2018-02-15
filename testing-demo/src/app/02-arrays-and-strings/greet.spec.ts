import { greet } from './greet';

describe('greet', () => {
    it('should include the name in the message', () => {
        expect(greet('ricardo')).toContain('ricardo');
        // expect(greet('ricardo')).toBe('Welcome ricardo');
    })
});
