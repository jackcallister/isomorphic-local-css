export default function(opts) {
  const dispatch = opts.dispatch;

  dispatch({
    type: opts.begin
  });

  async function promise() {
    try {
      const response = await opts.promise();

      dispatch({
        type: opts.success,
        payload: response
      });
    } catch(e) {
      dispatch({
        type: opts.error,
        payload: e
      });
    }
  }

  return promise();
}
