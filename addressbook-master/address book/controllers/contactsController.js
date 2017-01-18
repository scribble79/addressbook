var contacts = require("../data/contacts");

function contactsIndex(req, res){
  res.render('contacts/index', { contacts: contacts });
}

function contactsNew(req, res) {
  res.render('contacts/new');
}

function contactsCreate(req, res){
  var contact = req.body.contact;
  contact.id = contacts.length;
  contacts.push(contact);
  res.redirect(302, "/contacts");
}

function contactsShow(req, res) {
  var id = parseInt(req.params.id);
  var contact = contacts[id];
  res.render("contacts/show", { contact: contact });
}

function contactsEdit(req, res) {
  var id = parseInt(req.params.id);
  res.render("contacts/edit", { contact: contacts[id] });
}

function contactsUpdate(req, res) {
  var id = parseInt(req.params.id);
  var contact = req.body.contact;
  contact.id  = id;
  contacts[id] = contact;
  res.redirect(302, "/contacts/"+ id);
}

function contactsDelete(req, res){
  var id = req.params.id;
  contacts.splice(id, 1);
  contacts = contacts.map(function(contact) {
    contact.id--;
    return contact; 
  });
  res.redirect(302, "/");
}



module.exports = {
  contactsIndex:  contactsIndex,
  contactsNew:    contactsNew,
  contactsCreate: contactsCreate,
  contactsShow:   contactsShow,
  contactsEdit:   contactsEdit,
  contactsUpdate: contactsUpdate,
  contactsDelete: contactsDelete
};
