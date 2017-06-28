module.exports = (req, res)=> {
  res.render('startup_profile', {
    founderName: 'Mario',
    startupName: 'FAC',
    email: 'mario_the_freak@gmail.com',
    phoneNumber: 05236521562,
    websiteLink: 'foundersandcoders.com',
    linkedinLink: 'www.linkdin.com',
    twitterLink: 'titter.com'
  })
}
