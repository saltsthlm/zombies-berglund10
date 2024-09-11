import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;
  const _currentZombies: any[] = [];

  function addZombie(zombie: string) {
    if (_capacity === 0) {
      console.log("Can't add zombies to rooms with 0 capacity")
      return;
    }
    if(_capacity === _currentZombies.length) {
      _currentZombies.shift();
    }
      _currentZombies.push(zombie);
  }

  return {
    _capacity: _capacity,
    _currentZombies: _currentZombies,
    isFull: () => _capacity === _currentZombies.length,
    addZombie: addZombie,
  };
};

test("room is full", () => {
  const room = createRoom(0);

  const isRoomFull = room.isFull();

  ok(isRoomFull);
});

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1);

  const isRoomFull = room.isFull();

  ok(!isRoomFull);
})

test("room with no capacity cannot fit any zombies", () => {
  const room = createRoom(0);
  room.addZombie("bosse");
  const isRoomFull = room.isFull();

  ok(isRoomFull);
})

test("one-roomer becomes full when a zombie is added", () => {
  const room = createRoom(1);
  room.addZombie("bosse");
  const isRoomFull = room.isFull();

  ok(isRoomFull)

})

test("two-roomer is not full when a zombie is added", () => {
    const room = createRoom(2);
    room.addZombie("bosse");
    const isRoomFull = room.isFull();
    ok(!isRoomFull);
})

test("second zombie consumes first zombie when added to a one-roomer", () => {
    const room = createRoom(1);
    room.addZombie("bosse");
    room.addZombie("berta")
    ok(room._currentZombies.includes("berta") && !room._currentZombies.includes("bosse"))
})

test("third zombie consumes first zombie when added to a two-roomer", () => {
  const room = createRoom(2);
  room.addZombie("bosse");
  room.addZombie("berta");
  room.addZombie("bosserta");
  console.log(room._currentZombies)
  ok(room._currentZombies.includes("berta")
  && room._currentZombies.includes("bosserta")
  && !room._currentZombies.includes("bosse"))
})


// You are free to add more tests that you think are relevant!
