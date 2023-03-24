(({ behaviors }) => {
  behaviors.skilldMoleculeLocalTask = {
    attach: (context) => {
      once("m-local-task", ".m-local-task", context).forEach((el) => {
        behaviors.skilldMoleculeLocalTask.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
