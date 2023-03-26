(({ behaviors }) => {
  behaviors.skilldOrganismLocalTasks = {
    attach: (context) => {
      once('o-local-tasks', '.o-local-tasks', context).forEach((el) => {
        behaviors.skilldOrganismLocalTasks.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
