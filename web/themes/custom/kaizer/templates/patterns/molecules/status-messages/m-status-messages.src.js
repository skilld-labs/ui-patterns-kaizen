(({ behaviors }) => {
  behaviors.kaizerMoleculeStatusMessages = {
    attach: (context) => {
      once('m-status-messages', '.m-status-messages', context).forEach((el) => {
        behaviors.kaizerMoleculeStatusMessages.handler(el);
      });
    },
    handler: (el) => {
      // eslint-disable-next-line no-console
      console.log(el);
    },
  };
})(Drupal);
