module.exports = [
  {
    request: {
      path: "/user/:id",
      method: "GET",
      query: {
        q: "{:someQueryStrings}",
      },
    },
    response: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: {
        messages: [
          {
            message: "message1 {:id} {:someQueryStrings}",
          },
          {
            message: "message2 {:id} {:someQueryStrings}",
          },
          {
            message: "message3 {:id} {:someQueryStrings}",
          },
        ],
      },
    },
  },
];
