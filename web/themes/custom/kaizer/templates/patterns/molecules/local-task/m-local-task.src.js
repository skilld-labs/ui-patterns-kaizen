(({ behaviors }) => {
  behaviors.kaizerMoleculeLocalTask = {
    attach: (context) => {
      once('m-local-task', '.m-local-task', context).forEach((el) => {
        behaviors.kaizerMoleculeLocalTask.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
