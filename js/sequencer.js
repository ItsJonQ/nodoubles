const sequencer = () => {
  const state = {
    ded: false,
    tracking: 0,
    count: 0,
  };

  const track = (key) => {
    if (!key) return;

    if (state.ded) {
      console.log('status: DED');
      return;
    }

    if (!state.tracking && key === 1) {
      increment();
    }
    else if (state.tracking && key === 2) {
      score();
      console.log('status: count:', state.count);
    }
    else {
      state.ded = true;
      console.log('status: DED');
    }
    return;
  }

  const increment = () => {
    state.tracking++;
  };

  const score = () => {
    state.tracking = 0;
    state.count++;
  };

  return {
    state,
    track,
  }
};

window.Sequencer = sequencer();
