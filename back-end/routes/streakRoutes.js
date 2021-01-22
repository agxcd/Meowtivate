module.exports = (router, db) => {
  // Get collections with id
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    db.getStreaks(user_id)
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // get log data back with id
  router.get("/logdata/:id", (req, res) => {
    const user_id = req.params.id;
    db.getLogData(user_id)
      .then((data) => {
        res.json(data);
        // console.log("cannot get the correct", data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  /*--------- Post data log -----------*/

  router.post("/logdata/:id", (req, res) => {
    const { id } = req.params;
    db.postLogData(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // /*--------- update data log -----------*/
  // router.put("/logdata/:id", (req, res) => {
  //   const { id } = req.params;
  //   const { is_completed } = req.body;
  //   db.postLogData(id, is_completed)
  //     .then(() => {
  //       res.status(200).send("Successfully update streak, current_streak");
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  /*--------- update streak -----------*/
  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { streak, current_streak } = req.body;
    db.updateStreak(id, streak, current_streak)
      .then(() => {
        res.status(200).send("Successfully update streak, current_streak");
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
