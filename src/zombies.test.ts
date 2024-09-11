import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;
  const _currentZombies: any[] = [];
  let full = false;


  function isFull() {
    if (_capacity === 0) {
      return true;
    }
    if(_capacity <= _currentZombies.length) {
      return true;
    }
    return false;
  }
  function isEmpty() {
    if (_capacity > 0 && !full) {
      return true;
    }
    return false;
  }

  function addZombie(zombie: string) {
    if (_capacity === 0) {
      console.log("Can't add zombies to rooms with 0 capacity")
      return false;
    }
    _currentZombies.push(zombie);
  }

  return {
    _capacity: _capacity,
    isFull: isFull,
    isEmpty: isEmpty,
    addZombie: addZombie,
    _currentZombies: _currentZombies
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
  const isRoomEmpty = room.isEmpty();

  ok(isRoomEmpty && !isRoomFull);
})

//test.skip("empty room that fits one zombie is not full", () => {});

test("room with no capacity cannot fit any zombies", () => {
  const room = createRoom(0);

  ok(!room.addZombie("Test zombie")); // It's not ok to add zombie to room with 0 capacity for it.
})
//test.skip("room with no capacity cannot fit any zombies", () => {});

test("one-roomer becomes full when a zombie is added", () => {
  const room = createRoom(1);
  room.addZombie("bosse");
  const isRoomFull = room.isFull();

  ok(isRoomFull)

})
//test.skip("one-roomer becomes full when a zombie is added", () => {});

test("two-roomer is not full when a zombie is added", () => {
    const room = createRoom(2);
    room.addZombie("bosse");
    const isRoomFull = room.isFull();
    ok(!isRoomFull);
})
//test.skip("two-roomer is not full when a zombie is added", () => { });

test.skip("second zombie consumes first zombie when added to a one-roomer", () => { });

// You are free to add more tests that you think are relevant!
