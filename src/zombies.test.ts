import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;
  const _currentZombies = new Array(_capacity);

  function isFull(){
    if(_capacity === 0) {
      return true;
    } 
    return false;
  }
  function isEmpty() {
    if(_capacity > 0 && _currentZombies.length > 0) {
      return true;
    }
    return false;
  }

  return {
    _capacity: _capacity,
    isFull: isFull,
    isEmpty: isEmpty
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

test.skip("room with no capacity cannot fit any zombies", () => {});

test.skip("one-roomer becomes full when a zombie is added", () => {});

test.skip("two-roomer is not full when a zombie is added", () => {});

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
