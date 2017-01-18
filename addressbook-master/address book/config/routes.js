var express = require("express");
var router  = express.Router();

var staticsController = require("../controllers/staticsController");
var contactsController   = require("../controllers/contactsController");

router.route("/")
  .get(staticsController.home);

router.route("/contacts")
  .get(contactsController.contactsIndex)
  .post(contactsController.contactsCreate);

router.route("/contacts/new")
  .get(contactsController.contactsNew);

router.route("/contacts/:id")
  .get(contactsController.contactsShow)
  .put(contactsController.contactsUpdate)
  .delete(contactsController.contactsDelete);

router.route("/contacts/:id/edit")
  .get(contactsController.contactsEdit);

module.exports = router;