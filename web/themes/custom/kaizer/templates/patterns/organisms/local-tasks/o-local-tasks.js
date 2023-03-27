(({ behaviors }) => {
  behaviors.kaizerOrganismLocalTasks = {
    attach: (context) => {
      once('o-local-tasks', '.o-local-tasks', context).forEach((el) => {
        behaviors.kaizerOrganismLocalTasks.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
