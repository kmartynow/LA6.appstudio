let members = ["Mary", "Sam", "Joey", "Paul", "Mike", "Char", "Jenny", "Kennedy", "Kaden", "Kurt", "Anne"]

btnShowMessage.onclick = function() {
  let userName = inptName.value
  for (i = 0; i < members.length; i++)
    if (members.includes(userName))
  lblDisplayName.value = userName + ", you are already a member"
  else {
    members.push()
    lblDisplayName.value = userName + "You have been added to the membership roster. "
  }
}