const get = async (url: string) => {
  const res = await fetch(url);

  let body;
  try {
    body = await res.json();
  } catch (e) {
    body = {
      detail: e
    };
  }

  const returnObject = {
    status: res.status,
    ok: res.ok,
    body: body
  };

  return returnObject;
};

export default { get };
