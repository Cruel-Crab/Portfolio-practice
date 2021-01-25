// Wait till the DOM is ready.
console.log("HiHiHi")
$(function () {
  var roles = ["Enthusiast", "Student", "ATHARVite"]
  var count = 0
  var $typeSpan = $("#intro .content h2 span").typist({
    text: roles[count],
  })
  setInterval(() => {
    $typeSpan
      .typistRemove(roles[count++ % roles.length].length)
      .typistPause(2000)
      .typistAdd(roles[count % roles.length])
  }, 5000)
})
