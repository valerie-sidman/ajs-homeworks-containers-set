import Team from '../classTeam';
import Character from '../classCharacter';

test('adding in team', () => {
  const charJohn = new Character(100, 1, 'stealth');
  const teamA = new Team();
  teamA.add(charJohn);
  expect(teamA.members.size).toBe(1);
});

test('adding same character in team', () => {
  let thrownError;
  const expextedError = new Error('Вы пытаетесь добавить существующего участника!');
  try {
    const charJohn = new Character(100, 1, 'stealth');
    const teamA = new Team();
    teamA.add(charJohn);
    teamA.add(charJohn);
  } catch (error) {
    thrownError = error;
  }
  expect(thrownError).toEqual(expextedError);
});

test('adding some characters in team', () => {
  const charJohn = new Character(100, 1, 'stealth');
  const charTempleton = new Character(300, 10, 'attack');
  const teamA = new Team();
  teamA.addAll(charJohn, charTempleton, charTempleton);
  expect(teamA.members.size).toBe(2);
});

test('convert team to array', () => {
  const charJohn = new Character(100, 1, 'stealth');
  const charTempleton = new Character(300, 10, 'attack');
  const teamA = new Team();
  teamA.addAll(charJohn, charTempleton);
  const arr = teamA.toArray();
  expect(Array.isArray(arr)).toBe(true);
});
